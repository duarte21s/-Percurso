"""Check the animated book's full evaluated geometry against the camera frame.

Usage:
    blender --background path/to/book.blend --python scripts/verificar-enquadramento-livro.py

Reads the scene without saving it. Prints one JSON report and exits with status 1
on failed checks, including when Blender has no --python-exit-code configured.
"""

import json
import math
import os
import sys
import unicodedata

import bpy
from bpy_extras.object_utils import world_to_camera_view


FRAME_SAMPLES = tuple(range(1, 361, 5)) + (360,)
TOLERANCE = 0.01
SCENERY_TERMS = ("floor", "ground", "chao", "studio", "backdrop")
MAX_HORIZONTAL_SIZE = 25.0
MAX_DIAGNOSTICS = 24


def normalized_name(name):
    return "".join(
        character
        for character in unicodedata.normalize("NFKD", name.lower())
        if not unicodedata.combining(character)
    )


def empty_bounds():
    return {
        "x_min": math.inf,
        "x_max": -math.inf,
        "y_min": math.inf,
        "y_max": -math.inf,
        "z_min": math.inf,
        "z_max": -math.inf,
    }


def add_point(bounds, point):
    for axis in ("x", "y", "z"):
        value = getattr(point, axis)
        bounds[axis + "_min"] = min(bounds[axis + "_min"], value)
        bounds[axis + "_max"] = max(bounds[axis + "_max"], value)


def readable_bounds(bounds):
    return {
        key: round(value, 6) if math.isfinite(value) else None
        for key, value in bounds.items()
    }


def exit_with_report(report, failed):
    print(json.dumps(report, ensure_ascii=False, indent=2, allow_nan=False), flush=True)
    if failed:
        # Blender may otherwise log Python errors and still return status zero.
        # This process is a background verifier; no scene is saved or modified.
        sys.stdout.flush()
        sys.stderr.flush()
        os._exit(1)


def main():
    scene = bpy.context.scene
    if scene.camera is None:
        exit_with_report({"passed": False, "error": "Scene has no active camera."}, True)
        return

    initial_frame = scene.frame_current
    overall_bounds = empty_bounds()
    failures = []
    checked_objects = set()
    skipped_objects = set()
    empty_frames = []
    evaluated_vertex_count = 0
    mesh_sample_count = 0

    try:
        for frame in FRAME_SAMPLES:
            scene.frame_set(frame)
            depsgraph = bpy.context.evaluated_depsgraph_get()
            camera = scene.camera.evaluated_get(depsgraph)
            frame_vertex_count = 0

            for instance_index, instance in enumerate(depsgraph.object_instances):
                obj = instance.object
                if obj.type != "MESH" or obj.hide_render:
                    continue

                name = obj.original.name
                is_scenery = any(term in normalized_name(name) for term in SCENERY_TERMS)
                is_large = max(abs(obj.dimensions.x), abs(obj.dimensions.y)) > MAX_HORIZONTAL_SIZE
                if is_scenery or is_large:
                    skipped_objects.add(name)
                    continue

                mesh = obj.to_mesh(preserve_all_data_layers=False, depsgraph=depsgraph)
                if mesh is None:
                    continue

                try:
                    if not mesh.vertices:
                        continue

                    bounds = empty_bounds()
                    behind_vertices = 0
                    nonfinite_vertices = 0
                    outside_vertices = 0
                    max_overrun = 0.0
                    matrix_world = instance.matrix_world

                    for vertex in mesh.vertices:
                        projected = world_to_camera_view(scene, camera, matrix_world @ vertex.co)
                        if not all(math.isfinite(value) for value in projected):
                            nonfinite_vertices += 1
                            continue

                        add_point(bounds, projected)
                        add_point(overall_bounds, projected)
                        overrun = max(
                            0.0,
                            -projected.x,
                            projected.x - 1.0,
                            -projected.y,
                            projected.y - 1.0,
                        )
                        max_overrun = max(max_overrun, overrun)
                        outside_vertices += overrun > TOLERANCE
                        behind_vertices += projected.z <= 0.0

                    vertex_count = len(mesh.vertices)
                    frame_vertex_count += vertex_count
                    evaluated_vertex_count += vertex_count
                    mesh_sample_count += 1
                    checked_objects.add(name)

                    if outside_vertices or behind_vertices or nonfinite_vertices:
                        failures.append({
                            "frame": frame,
                            "object": name,
                            "instance_index": instance_index if instance.is_instance else None,
                            "bounds": readable_bounds(bounds),
                            "max_frame_overrun": round(max_overrun, 6),
                            "outside_vertices": outside_vertices,
                            "behind_camera_vertices": behind_vertices,
                            "nonfinite_vertices": nonfinite_vertices,
                            "vertex_count": vertex_count,
                        })
                finally:
                    obj.to_mesh_clear()

            if frame_vertex_count == 0:
                empty_frames.append(frame)
    finally:
        scene.frame_set(initial_frame)

    failures.sort(
        key=lambda item: (
            bool(item["nonfinite_vertices"]),
            bool(item["behind_camera_vertices"]),
            item["max_frame_overrun"],
            item["outside_vertices"],
        ),
        reverse=True,
    )
    passed = not failures and not empty_frames
    report = {
        "passed": passed,
        "camera": scene.camera.name,
        "frames": list(FRAME_SAMPLES),
        "tolerance": TOLERANCE,
        "ndc_note": "x/y bounds use [0,1]; z is signed camera depth, with positive values in front.",
        "bounds_across_all_frames": readable_bounds(overall_bounds),
        "checked_objects": sorted(checked_objects),
        "skipped_scenery_objects": sorted(skipped_objects),
        "mesh_samples": mesh_sample_count,
        "evaluated_vertices": evaluated_vertex_count,
        "empty_frames": empty_frames,
        "failure_count": len(failures),
        "failed_frames": sorted({item["frame"] for item in failures}),
        "worst_failures": failures[:MAX_DIAGNOSTICS],
    }
    exit_with_report(report, not passed)


if __name__ == "__main__":
    main()
