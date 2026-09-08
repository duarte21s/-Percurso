"""Create a reproducible, self-contained studio book animation in Blender 4.5+.

Run with Blender, not with the system Python::

    blender -b --python scripts/render-livro-explodido.py -- --output-dir output/book --preview
    blender -b --python scripts/render-livro-explodido.py -- --output-dir output/book --render --engine BLENDER_EEVEE_NEXT

The default is Cycles on CPU. No downloads, add-ons, external textures or fonts
are needed. Output is an editable .blend and lossless PNG frames; encode the
frames with FFmpeg after rendering. With neither --preview nor --render this
script only creates the .blend. All times are deterministic, including grain.

Construction: twelve sewn signatures lie between two substantial cover boards.
The upper six turn about the spine, in order, into a left-hand stack. In the
exploded view each matching pair rises by the same additional distance. This
preserves binding order and gives seven clearly readable levels, including the
cover boards. Reassembly runs the same poses backwards. The flexible wrapper
and curved signature surfaces are an art-directed binding, not a cloth solve.
"""

import argparse
import math
import os
import sys
from pathlib import Path

import bpy
from mathutils import Vector


FPS = 30
LAST_FRAME = 360
W = 2.52
H = 3.68
BOARD_THICKNESS = 0.10
BACK_Z = 0.055
FRONT_Z = 0.620
PAGE_X0 = 0.085
PAGE_X1 = W - 0.065
PAGE_H = H - 0.155
SIGNATURE_THICKNESS = 0.034
SIGNATURE_PITCH = 0.0352
PAGE_Z0 = 0.149
HALF_GUTTER = 0.155
EXPLODED_STEP = 0.355


def arguments():
    argv = sys.argv[sys.argv.index("--") + 1 :] if "--" in sys.argv else []
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output-dir", required=True, type=Path)
    mode = parser.add_mutually_exclusive_group()
    mode.add_argument("--preview", action="store_true")
    mode.add_argument("--render", action="store_true")
    parser.add_argument("--engine", choices=("CYCLES", "BLENDER_EEVEE_NEXT"), default="CYCLES")
    parser.add_argument("--samples", type=int)
    parser.add_argument("--resolution-percent", type=int, default=100)
    parser.add_argument("--device", choices=("CPU", "GPU"), default="CPU")
    parser.add_argument("--motion-blur", action="store_true")
    parser.add_argument("--frames", help="Optional comma-separated frame numbers, overriding the render range")
    args = parser.parse_args(argv)
    if not 1 <= args.resolution_percent <= 100:
        parser.error("--resolution-percent must be from 1 to 100")
    if args.samples is not None and args.samples < 1:
        parser.error("--samples must be positive")
    args.output_dir = args.output_dir.resolve()
    args.output_dir.mkdir(parents=True, exist_ok=True)
    return args


def smooth(a, b, value):
    """Quintic easing has zero speed and acceleration at the end points."""
    t = max(0.0, min(1.0, (value - a) / (b - a)))
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0)


def mix(a, b, t):
    return a * (1.0 - t) + b * t


def node(material, kind, label, x=0, y=0):
    result = material.node_tree.nodes.new(kind)
    result.label = label
    result.location = (x, y)
    return result


def surface(name, color, roughness=0.5):
    material = bpy.data.materials.new(name)
    material.use_nodes = True
    material.diffuse_color = (*color, 1.0)
    bsdf = material.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = (*color, 1.0)
    bsdf.inputs["Roughness"].default_value = roughness
    return material, bsdf


def materials():
    leather, bsdf = surface("Cover | deep forest goatskin", (0.029, 0.049, 0.036), 0.47)
    bsdf.inputs["Coat Weight"].default_value = 0.08
    bsdf.inputs["Coat Roughness"].default_value = 0.42
    tex = node(leather, "ShaderNodeTexCoord", "Object-space leather grain", -800)
    noise = node(leather, "ShaderNodeTexNoise", "Fine pebbled leather", -600)
    noise.inputs["Scale"].default_value = 175.0
    noise.inputs["Detail"].default_value = 2.4
    noise.inputs["Roughness"].default_value = 0.72
    leather.node_tree.links.new(tex.outputs["Object"], noise.inputs["Vector"])
    ramp = node(leather, "ShaderNodeValToRGB", "Restrained forest colour variation", -330, 170)
    ramp.color_ramp.elements[0].position = 0.12
    ramp.color_ramp.elements[0].color = (0.024, 0.043, 0.031, 1)
    ramp.color_ramp.elements[1].position = 0.87
    ramp.color_ramp.elements[1].color = (0.043, 0.069, 0.050, 1)
    leather.node_tree.links.new(noise.outputs["Fac"], ramp.inputs["Fac"])
    leather.node_tree.links.new(ramp.outputs["Color"], bsdf.inputs["Base Color"])
    bump = node(leather, "ShaderNodeBump", "Microscopic leather relief", -80, -180)
    bump.inputs["Strength"].default_value = 0.24
    bump.inputs["Distance"].default_value = 0.012
    leather.node_tree.links.new(noise.outputs["Fac"], bump.inputs["Height"])
    leather.node_tree.links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])

    tooling, tool_bsdf = surface("Cover | blind impressed border", (0.024, 0.040, 0.029), 0.39)
    tool_bsdf.inputs["Coat Weight"].default_value = 0.08
    lining, _ = surface("Endpapers | muted olive linen", (0.105, 0.139, 0.103), 0.86)

    paper, paper_bsdf = surface("Paper | warm uncoated ivory", (0.82, 0.779, 0.664), 0.73)
    paper_bsdf.inputs["Subsurface Weight"].default_value = 0.018
    paper_bsdf.inputs["Subsurface Radius"].default_value = (0.45, 0.27, 0.12)
    paper_bsdf.inputs["Specular IOR Level"].default_value = 0.23
    grain = node(paper, "ShaderNodeTexNoise", "Paper fibres", -550, -120)
    grain.inputs["Scale"].default_value = 380.0
    grain.inputs["Detail"].default_value = 2.0
    bump = node(paper, "ShaderNodeBump", "Very fine paper tooth", -180, -120)
    bump.inputs["Strength"].default_value = 0.10
    bump.inputs["Distance"].default_value = 0.004
    paper.node_tree.links.new(grain.outputs["Fac"], bump.inputs["Height"])
    paper.node_tree.links.new(bump.outputs["Normal"], paper_bsdf.inputs["Normal"])

    edge, edge_bsdf = surface("Paper | individual leaf edges", (0.75, 0.697, 0.576), 0.86)
    edge_bsdf.inputs["Specular IOR Level"].default_value = 0.18
    coord = node(edge, "ShaderNodeTexCoord", "Stable coordinates for cut leaves", -800)
    sep = node(edge, "ShaderNodeSeparateXYZ", "Z across the thickness", -630)
    mul = node(edge, "ShaderNodeMath", "Thirteen leaves per signature", -480)
    mul.operation = "MULTIPLY"
    mul.inputs[1].default_value = 382.35
    fract = node(edge, "ShaderNodeMath", "Thin gaps between leaves", -320)
    fract.operation = "FRACT"
    ramp = node(edge, "ShaderNodeValToRGB", "Subtle cut-edge striping", -100, 120)
    ramp.color_ramp.elements[0].position = 0.04
    ramp.color_ramp.elements[0].color = (0.39, 0.348, 0.267, 1)
    ramp.color_ramp.elements[1].position = 0.22
    ramp.color_ramp.elements[1].color = (0.77, 0.723, 0.607, 1)
    links = edge.node_tree.links
    links.new(coord.outputs["Object"], sep.inputs[0])
    links.new(sep.outputs["Z"], mul.inputs[0])
    links.new(mul.outputs[0], fract.inputs[0])
    links.new(fract.outputs[0], ramp.inputs[0])
    links.new(ramp.outputs[0], edge_bsdf.inputs["Base Color"])
    edge_bump = node(edge, "ShaderNodeBump", "Fine relief on the cut edges", 80, -180)
    edge_bump.inputs["Strength"].default_value = 0.16
    edge_bump.inputs["Distance"].default_value = 0.002
    links.new(fract.outputs[0], edge_bump.inputs["Height"])
    links.new(edge_bump.outputs[0], edge_bsdf.inputs["Normal"])

    thread, _ = surface("Binding | linen thread", (0.61, 0.555, 0.418), 0.87)
    floor, floor_bsdf = surface("Studio | warm chalk", (0.58, 0.565, 0.535), 0.88)
    floor_bsdf.inputs["Specular IOR Level"].default_value = 0.18
    return dict(leather=leather, tooling=tooling, lining=lining, paper=paper, edge=edge, thread=thread, floor=floor)


def empty(name, parent=None):
    ob = bpy.data.objects.new(name, None)
    bpy.context.collection.objects.link(ob)
    ob.parent = parent
    ob.empty_display_size = 0.15
    return ob


def mesh_object(name, vertices, faces, material, parent=None):
    mesh = bpy.data.meshes.new(name + " geometry")
    mesh.from_pydata(vertices, [], faces)
    mesh.update()
    ob = bpy.data.objects.new(name, mesh)
    bpy.context.collection.objects.link(ob)
    ob.parent = parent
    ob.data.materials.append(material)
    return ob


def rounded_box(name, location, size, material, parent=None, bevel=0.025):
    bpy.ops.mesh.primitive_cube_add(size=1)
    ob = bpy.context.object
    ob.name = name
    ob.dimensions = size
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    ob.location = location
    ob.parent = parent
    ob.data.materials.append(material)
    modifier = ob.modifiers.new("Hand-bound rounded edges", "BEVEL")
    modifier.width = bevel
    modifier.segments = 5
    modifier.affect = "EDGES"
    modifier = ob.modifiers.new("Flat faces and soft corner normals", "WEIGHTED_NORMAL")
    modifier.keep_sharp = True
    for polygon in ob.data.polygons:
        polygon.use_smooth = True
    return ob


def tube_curve(name, points, radius, material, parent=None, closed=False):
    data = bpy.data.curves.new(name, "CURVE")
    data.dimensions = "3D"
    data.resolution_u = 2
    data.bevel_depth = radius
    data.bevel_resolution = 3
    spline = data.splines.new("POLY")
    spline.points.add(len(points) - 1)
    for point, position in zip(spline.points, points):
        point.co = (*position, 1.0)
    spline.use_cyclic_u = closed
    ob = bpy.data.objects.new(name, data)
    bpy.context.collection.objects.link(ob)
    ob.parent = parent
    data.materials.append(material)
    return ob


def board(name, hinge, mats, outer_side):
    rounded_box(name, (W / 2, 0, 0), (W, H, BOARD_THICKNESS), mats["leather"], hinge, 0.035)
    # Pastedown is a genuinely separate sheet set into the inside cover.
    rounded_box(name + " | pastedown", (W / 2 + 0.022, 0, -outer_side * 0.054),
                (W - 0.115, H - 0.12, 0.008), mats["lining"], hinge, 0.024)
    if outer_side > 0:
        border = []
        inset, radius = 0.17, 0.060
        for cx, cy, begin in ((W - inset - radius, H / 2 - inset - radius, 0),
                              (inset + radius, H / 2 - inset - radius, 90),
                              (inset + radius, -H / 2 + inset + radius, 180),
                              (W - inset - radius, -H / 2 + inset + radius, 270)):
            for step in range(9):
                angle = math.radians(begin + step * 90 / 8)
                border.append((cx + radius * math.cos(angle), cy + radius * math.sin(angle), 0.049))
        tube_curve(name + " | subtle blind border", border, 0.004, mats["tooling"], hinge, True)
        # Two very restrained joint creases catch a little studio light.
        for x in (0.105, 0.125):
            tube_curve(name + " | hinge crease", [(x, -H / 2 + 0.09, 0.049), (x, H / 2 - 0.09, 0.049)],
                       0.0028, mats["tooling"], hinge)


def signature(index, root, mats):
    """A continuous, thin solid surface. Smooth bends remain coherent in motion."""
    segments = 64
    verts = []
    half_thick = SIGNATURE_THICKNESS / 2
    for step in range(segments + 1):
        x = mix(PAGE_X0, PAGE_X1, step / segments)
        # Round the two outside corners, not the sewn edge at the spine.
        corner = 0.030
        delta = max(0.0, x - (PAGE_X1 - corner))
        y_half = PAGE_H / 2 - (corner - math.sqrt(max(0.0, corner * corner - delta * delta)))
        verts.extend(((x, -y_half, -half_thick), (x, y_half, -half_thick),
                      (x, -y_half, half_thick), (x, y_half, half_thick)))
    faces, sides = [], []
    for step in range(segments):
        a, b = step * 4, (step + 1) * 4
        faces.extend(((a, a + 1, b + 1, b), (a + 2, b + 2, b + 3, a + 3),
                      (a, b, b + 2, a + 2), (a + 1, a + 3, b + 3, b + 1)))
        sides.extend((False, False, True, True))
    faces.extend(((0, 2, 3, 1), (segments * 4, segments * 4 + 1, segments * 4 + 3, segments * 4 + 2)))
    sides.extend((True, True))
    ob = mesh_object(f"Signature {index + 1:02d} | thirteen ivory leaves", verts, faces, mats["paper"], root)
    ob.data.materials.append(mats["edge"])
    for polygon, is_side in zip(ob.data.polygons, sides):
        polygon.material_index = int(is_side)
        polygon.use_smooth = not is_side
    ob.shape_key_add(name="Closed")
    flex = ob.shape_key_add(name="Natural page turn")
    opened = ob.shape_key_add(name="Settled at the binding")
    is_left = index >= 6
    sign = -1 if is_left else 1
    for i, vertex in enumerate(verts):
        x, y, z = vertex
        u = (x - PAGE_X0) / (PAGE_X1 - PAGE_X0)
        # No lateral stretching: a restrained continuous bow, strongest mid-leaf.
        flex.data[i].co.z = z + 0.115 * math.sin(math.pi * u) * (0.96 + 0.04 * math.cos(y / PAGE_H * math.pi))
        # All signatures on one side share the same curve, preserving clearance.
        opened.data[i].co.z = z + sign * (0.020 * math.exp(-u * 9.0) + 0.004 * math.sin(u * math.pi))
    return ob, flex, opened


def spine(root, mats):
    verts, opened_verts = [], []
    steps = 64
    radius = (FRONT_Z - BACK_Z) / 2
    center_z = (FRONT_Z + BACK_Z) / 2
    for step in range(steps + 1):
        t = step / steps
        theta = -math.pi / 2 + math.pi * t
        x, z = -radius * math.cos(theta), center_z + radius * math.sin(theta)
        # Back-to-front order also holds in the flattened, open binding.
        ox, oz = mix(HALF_GUTTER, -HALF_GUTTER, t), BACK_Z + 0.022 * math.sin(math.pi * t)
        for y in (-H / 2 + 0.01, H / 2 - 0.01):
            verts.append((x, y, z))
            opened_verts.append((ox, y, oz))
    faces = [(i * 2, (i + 1) * 2, (i + 1) * 2 + 1, i * 2 + 1) for i in range(steps)]
    ob = mesh_object("Flexible rounded leather spine", verts, faces, mats["leather"], root)
    for polygon in ob.data.polygons:
        polygon.use_smooth = True
    ob.shape_key_add(name="Rounded closed binding")
    opened = ob.shape_key_add(name="Open binding")
    for target, position in zip(opened.data, opened_verts):
        target.co = position
    solid = ob.modifiers.new("Leather and flexible spine board", "SOLIDIFY")
    solid.thickness = 0.035
    solid.offset = 0
    bevel = ob.modifiers.new("Soft wrapper edges", "BEVEL")
    bevel.width = 0.008
    bevel.segments = 3
    # The rotating cover's joint descends later than the rest of the wrapper.
    # A second shape keeps the leather attached to that exact moving hinge.
    joint = ob.shape_key_add(name="Front joint articulation")
    joint.slider_min = -1.0
    for i, (target, position) in enumerate(zip(joint.data, verts)):
        t = (i // 2) / steps
        target.co = (position[0], position[1], position[2] + (BACK_Z - FRONT_Z) * t * t)
    return opened, joint


def light(name, position, target, power, size, color, shape="DISK", size_y=None):
    data = bpy.data.lights.new(name, "AREA")
    data.energy = power
    data.shape = shape
    data.size = size
    if size_y is not None and hasattr(data, "size_y"):
        data.size_y = size_y
    data.color = color
    ob = bpy.data.objects.new(name, data)
    bpy.context.collection.objects.link(ob)
    ob.location = position
    ob.rotation_euler = (Vector(target) - ob.location).to_track_quat("-Z", "Y").to_euler()
    return ob


def setup_render(args):
    scene = bpy.context.scene
    scene.render.engine = args.engine
    scene.render.resolution_x = 960 if args.preview else 1920
    scene.render.resolution_y = 540 if args.preview else 1080
    scene.render.resolution_percentage = args.resolution_percent
    scene.render.fps = FPS
    scene.frame_start, scene.frame_end = 1, LAST_FRAME
    scene.render.image_settings.file_format = "PNG"
    scene.render.image_settings.color_mode = "RGB"
    scene.render.image_settings.color_depth = "8"
    scene.render.image_settings.compression = 15
    scene.render.film_transparent = False
    scene.render.use_file_extension = True
    scene.render.use_persistent_data = True
    scene.render.threads_mode = "AUTO"
    scene.view_settings.view_transform = "AgX"
    try:
        scene.view_settings.look = "AgX - Medium High Contrast"
    except TypeError:
        pass
    scene.view_settings.exposure = 0.25
    scene.view_settings.gamma = 1.0
    if hasattr(scene.render, "use_motion_blur"):
        scene.render.use_motion_blur = args.motion_blur
        scene.render.motion_blur_shutter = 0.18

    if args.engine == "CYCLES":
        scene.cycles.samples = args.samples or (16 if args.preview else 48)
        scene.cycles.use_denoising = True
        scene.cycles.use_adaptive_sampling = True
        scene.cycles.adaptive_threshold = 0.06 if args.preview else 0.035
        scene.cycles.max_bounces = 7
        scene.cycles.diffuse_bounces = 4
        scene.cycles.glossy_bounces = 4
        scene.cycles.transparent_max_bounces = 4
        scene.cycles.sample_clamp_indirect = 3.0
        scene.cycles.seed = 19
        scene.cycles.device = "CPU"
        if args.device == "GPU":
            preferences = bpy.context.preferences.addons["cycles"].preferences
            enabled = False
            for backend in ("OPTIX", "CUDA", "HIP", "METAL", "ONEAPI"):
                try:
                    preferences.compute_device_type = backend
                    preferences.get_devices()
                    found = [dev for dev in preferences.devices if dev.type != "CPU"]
                    if found:
                        for dev in preferences.devices:
                            dev.use = dev.type != "CPU"
                        scene.cycles.device = "GPU"
                        enabled = True
                        print("Using Cycles GPU backend:", backend, flush=True)
                        break
                except (TypeError, RuntimeError):
                    continue
            if not enabled:
                print("No supported Cycles GPU; using CPU.", flush=True)
    else:
        eevee = scene.eevee
        if hasattr(eevee, "taa_render_samples"):
            eevee.taa_render_samples = args.samples or (48 if args.preview else 96)
        if hasattr(eevee, "use_gtao"):
            eevee.use_gtao = True
            eevee.gtao_distance = 0.75
            eevee.gtao_quality = 1.0
        if hasattr(eevee, "use_fast_gi"):
            eevee.use_fast_gi = True
            eevee.fast_gi_quality = 0.75
        if hasattr(eevee, "shadow_ray_count"):
            eevee.shadow_ray_count = 4
            eevee.shadow_step_count = 8
        if hasattr(eevee, "use_raytracing"):
            eevee.use_raytracing = True
        if hasattr(eevee, "ray_tracing_method"):
            eevee.ray_tracing_method = "SCREEN"
        if hasattr(eevee, "ray_tracing_options"):
            tracing = eevee.ray_tracing_options
            if hasattr(tracing, "resolution_scale"):
                tracing.resolution_scale = "1"
            if hasattr(tracing, "screen_trace_quality"):
                tracing.screen_trace_quality = 0.85
            if hasattr(tracing, "use_denoise"):
                tracing.use_denoise = True
    return scene


def iter_fcurves(action):
    # The compatibility collection is retained in Blender 4.5; the fallback
    # also supports actions stored in layered/slotted form.
    if hasattr(action, "fcurves"):
        yield from action.fcurves
    elif hasattr(action, "layers"):
        for layer in action.layers:
            for strip in layer.strips:
                for slot in action.slots:
                    channelbag = strip.channelbag(slot, ensure=False)
                    if channelbag:
                        yield from channelbag.fcurves


def set_interpolation():
    for action in bpy.data.actions:
        for curve in iter_fcurves(action):
            for key in curve.keyframe_points:
                key.interpolation = "BEZIER"
                key.handle_left_type = "AUTO_CLAMPED"
                key.handle_right_type = "AUTO_CLAMPED"


def create_scene(args):
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    scene = setup_render(args)
    mats = materials()
    root = empty("BOOK | reversible construction study")
    back = empty("Back cover | spine hinge", root)
    front = empty("Front cover | spine hinge", root)
    board("Back cover", back, mats, -1)
    board("Front cover", front, mats, 1)
    signatures = [signature(i, root, mats) for i in range(12)]
    spine_open, spine_joint = spine(root, mats)

    # This very large ground plane becomes a seamless studio sweep in camera.
    rounded_box("Seamless studio ground", (0, 0, -0.095), (200, 200, 0.18), mats["floor"], bevel=0.0)
    world = bpy.data.worlds.new("Neutral studio ambience")
    world.use_nodes = True
    world.node_tree.nodes["Background"].inputs["Color"].default_value = (0.64, 0.67, 0.69, 1)
    world.node_tree.nodes["Background"].inputs["Strength"].default_value = 0.32
    scene.world = world
    light("Key | large warm silk", (-4.5, -4.5, 8), (0, 0, 0.5), 1050, 5.0, (1.0, 0.94, 0.84))
    light("Fill | broad neutral bounce", (5, -2.5, 5.5), (0, 0, 0.8), 580, 4.0, (0.86, 0.93, 1.0))
    light("Rim | overhead strip", (1.0, 4.0, 7.5), (0, 0, 0.8), 1200, 5.0, (1.0, 0.97, 0.91), "RECTANGLE", 2.0)
    light("Spine | soft edge definition", (-5, 1.5, 3.8), (-0.5, 0, 0.3), 260, 3.0, (0.90, 0.96, 1.0))

    camera_data = bpy.data.cameras.new("52 mm studio perspective")
    camera = bpy.data.objects.new("Camera | measured three-quarter orbit", camera_data)
    bpy.context.collection.objects.link(camera)
    scene.camera = camera
    camera_data.lens = 55
    camera_data.sensor_width = 36
    camera_data.clip_start = 0.1
    camera_data.clip_end = 250
    focus = empty("Camera focus | centre of construction")
    constraint = camera.constraints.new("TRACK_TO")
    constraint.track_axis = "TRACK_NEGATIVE_Z"
    constraint.up_axis = "UP_Y"
    constraint.target = focus
    # Deep product-photography focus retains crisp edges throughout the layers.
    camera_data.dof.use_dof = True
    camera_data.dof.focus_object = focus
    camera_data.dof.aperture_fstop = 11.0
    camera_data.dof.aperture_blades = 8

    for frame in range(1, LAST_FRAME + 1):
        # One master clock opens the book and then traverses identical poses
        # backwards after all exploded pieces have settled. First/last match.
        book_time = frame if frame <= 300 else 110 - (frame - 300) / 0.535
        cover_p = smooth(24, 86, book_time)
        spine_p = smooth(28, 104, book_time)
        explode = smooth(114, 176, frame) * (1 - smooth(240, 296, frame))
        root.location = (-W / 2 * (1 - cover_p), 0, 0)
        root.keyframe_insert("location", frame=frame)
        back.location = (HALF_GUTTER * spine_p, 0, BACK_Z)
        back.keyframe_insert("location", frame=frame)
        front.location = (-HALF_GUTTER * spine_p, 0,
                          mix(FRONT_Z, BACK_Z, smooth(0.34, 1.0, cover_p)))
        front.rotation_euler = (0, -math.pi * cover_p, 0)
        front.keyframe_insert("location", frame=frame)
        front.keyframe_insert("rotation_euler", frame=frame)
        spine_open.value = spine_p
        spine_open.keyframe_insert("value", frame=frame)
        spine_joint.value = smooth(0.34, 1.0, cover_p) - spine_p
        spine_joint.keyframe_insert("value", frame=frame)

        for index, (ob, flex, settled) in enumerate(signatures):
            initial_z = PAGE_Z0 + index * SIGNATURE_PITCH
            if index >= 6:
                order = 11 - index
                progress = smooth(44 + order * 4, 90 + order * 4, book_time)
                rank = 11 - index
                target_z = PAGE_Z0 + rank * SIGNATURE_PITCH
                ob.location = (-HALF_GUTTER * spine_p, 0,
                               mix(initial_z, target_z, smooth(0.40, 1.0, progress)) +
                               (rank + 1) * EXPLODED_STEP * explode)
                ob.rotation_euler = (0, -math.pi * progress, 0)
                flex.value = math.sin(math.pi * progress) ** 2
                settled.value = smooth(0.76, 1.0, progress)
            else:
                rank = index
                ob.location = (HALF_GUTTER * spine_p, 0,
                               initial_z + (rank + 1) * EXPLODED_STEP * explode)
                ob.rotation_euler = (0, 0, 0)
                flex.value = 0
                settled.value = smooth(70, 112, book_time)
            ob.keyframe_insert("location", frame=frame)
            ob.keyframe_insert("rotation_euler", frame=frame)
            flex.keyframe_insert("value", frame=frame)
            settled.keyframe_insert("value", frame=frame)

        camera_open = smooth(20, 110, book_time)
        position = Vector((-6.15, -8.35, 7.65)).lerp(Vector((-7.35, -10.4, 8.75)), camera_open)
        position = position.lerp(Vector((-8.10, -11.55, 9.65)), explode)
        orbit = math.radians(-10.0) * smooth(174, 240, frame) * (1 - smooth(245, 330, frame))
        x, y = position.x, position.y
        position.x = x * math.cos(orbit) - y * math.sin(orbit)
        position.y = x * math.sin(orbit) + y * math.cos(orbit)
        camera.location = position
        focus.location = (0, 0, mix(0.285, 1.08, explode))
        camera.keyframe_insert("location", frame=frame)
        focus.keyframe_insert("location", frame=frame)

    set_interpolation()
    for name, frame in (("Closed — three-quarter study", 1), ("Hinged opening", 30),
                        ("Pages settle", 110), ("Construction layers", 176),
                        ("Small studio orbit", 218), ("Reassemble", 250),
                        ("Close", 310), ("Closed — seamless loop", 360)):
        scene.timeline_markers.new(name, frame=frame)
    scene["description"] = "A quiet 12-second 3D construction study: hinged opening, curved leaves, ordered layers, orbit, reassembly."
    scene["layer_order"] = "Right: signatures 01–06, bottom to top. Left: 12–07, bottom to top. Matching levels rise together."
    scene["animation_notes"] = "Deterministic art-directed geometry; no physics cache, external media, text, or watermark."
    scene.frame_set(1)
    scene.render.filepath = str(args.output_dir / "frames" / "book_")
    for screen in bpy.data.screens:
        for area in screen.areas:
            if area.type == "VIEW_3D":
                area.spaces.active.region_3d.view_perspective = "CAMERA"
    blend_path = args.output_dir / "livro-explodido.blend"
    bpy.ops.wm.save_as_mainfile(filepath=str(blend_path))
    print("Saved editable scene:", blend_path, flush=True)
    return scene


def main():
    args = arguments()
    scene = create_scene(args)
    if args.frames:
        frames = [int(value) for value in args.frames.split(",")]
    elif args.preview:
        frames = [1, 90, 180, 240, 360]
    elif args.render:
        frames = range(1, LAST_FRAME + 1)
    else:
        return
    output = args.output_dir / ("preview" if args.preview else "frames")
    output.mkdir(parents=True, exist_ok=True)
    for frame in frames:
        if not 1 <= frame <= LAST_FRAME:
            raise ValueError(f"Frame {frame} is outside 1–{LAST_FRAME}")
        scene.frame_set(frame)
        scene.render.filepath = str(output / f"book_{frame:04d}.png")
        print(f"Rendering frame {frame:04d}/{LAST_FRAME} using {args.engine}", flush=True)
        bpy.ops.render.render(write_still=True)
    print("Rendered frames:", output, flush=True)


if __name__ == "__main__":
    main()
