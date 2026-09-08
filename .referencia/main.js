/* =========================================================
   PERCURSO — main.js
   ========================================================= */
(function () {
  "use strict";

  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const pad2 = (n) => String(n).padStart(2, "0");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* =======================================================
     1. NAV
     ======================================================= */
  const nav = $("#nav");
  const navToggle = $("#navToggle");
  const navMobile = $("#navMobile");
  const readBar = $("#readBar");

  navToggle.addEventListener("click", () => {
    const open = navMobile.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });
  $$("#navMobile a").forEach((a) =>
    a.addEventListener("click", () => {
      navMobile.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );

  function onScrollChrome() {
    const y = window.scrollY;
    nav.classList.toggle("is-stuck", y > 40);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    readBar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", onScrollChrome, { passive: true });
  onScrollChrome();

  $("#year").textContent = new Date().getFullYear();

  /* =======================================================
     2. HERO — scroll travado, livro abrindo
     ======================================================= */
  const heroScroll = $("#heroScroll");
  const stage      = $("#heroStage");
  const video      = $("#heroVideo");
  const poster     = $("#heroPoster");
  const book3d     = $("#book3d");
  const glow       = $("#heroGlow");
  const railFill   = $("#railFill");
  const railNum    = $("#railNum");
  const scrollHint = $("#scrollHint");
  const heroCta    = $("#heroCta");
  const slides     = $$(".h1-slide");

  /* --- quebra os H1 em caracteres animáveis --- */
  function splitInto(node) {
    const out = [];
    node.childNodes.forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        child.textContent.split(/(\s+)/).forEach((chunk) => {
          if (!chunk) return;
          if (!chunk.trim()) {
            out.push(document.createTextNode(chunk));
            return;
          }
          const word = document.createElement("span");
          word.className = "h1-word";
          Array.from(chunk).forEach((ch) => {
            const c = document.createElement("span");
            c.className = "h1-char";
            c.textContent = ch;
            word.appendChild(c);
          });
          out.push(word);
        });
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        const clone = child.cloneNode(false);
        splitInto(child).forEach((n) => clone.appendChild(n));
        out.push(clone);
      }
    });
    return out;
  }

  $$("[data-split]").forEach((h) => {
    const nodes = splitInto(h);
    h.innerHTML = "";
    nodes.forEach((n) => h.appendChild(n));
    $$(".h1-char", h).forEach((c, i) => {
      c.style.transitionDelay = i * 20 + "ms";
    });
  });

  /* --- poeira luminosa --- */
  (function dust() {
    if (reduced) return;
    const box = $("#heroDust");
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 26; i++) {
      const d = document.createElement("i");
      d.className = "dust";
      d.style.left = Math.random() * 100 + "%";
      d.style.top = 40 + Math.random() * 60 + "%";
      d.style.animationDuration = 9 + Math.random() * 11 + "s";
      d.style.animationDelay = -Math.random() * 14 + "s";
      d.style.opacity = 0.2 + Math.random() * 0.5;
      frag.appendChild(d);
    }
    box.appendChild(frag);
  })();

  /* --- vídeo controlado pelo scroll --- */
  let vReady = false, vDur = 0, lastSeek = -1, usedFallback = false;

  function activateFallback() {
    if (usedFallback) return;
    usedFallback = true;
    video.style.display = "none";
    poster.style.display = "none";
    book3d.classList.add("is-active");
  }

  function markVideoReady() {
    if (vReady || usedFallback) return;
    vReady = true;
    video.classList.add("is-ready");
    poster.classList.add("is-hidden");
  }

  video.addEventListener("loadedmetadata", () => {
    vDur = video.duration || 0;
    if (!vDur || !isFinite(vDur)) { activateFallback(); return; }
    // "acorda" o vídeo para que o seek funcione em todos os navegadores
    const p = video.play();
    if (p && p.then) {
      p.then(() => { video.pause(); video.currentTime = 0; markVideoReady(); })
       .catch(() => { markVideoReady(); });
    } else {
      markVideoReady();
    }
  });
  video.addEventListener("error", activateFallback);
  // se em 4s nada carregou, cai para o livro em CSS
  setTimeout(() => { if (!vReady) activateFallback(); }, 4000);

  /* --- progresso do hero --- */
  function heroProgress() {
    const rect = heroScroll.getBoundingClientRect();
    const total = heroScroll.offsetHeight - window.innerHeight;
    if (total <= 0) return 0;
    return clamp(-rect.top / total, 0, 1);
  }

  const SLIDE_STOPS = [0.0, 0.26, 0.52, 0.76];
  let currentSlide = -1;
  let smooth = 0;
  let heroVisible = true;

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      (entries) => entries.forEach((e) => (heroVisible = e.isIntersecting)),
      { rootMargin: "100px" }
    ).observe(heroScroll);
  }

  function setSlide(i) {
    if (i === currentSlide) return;
    currentSlide = i;
    slides.forEach((s, k) => s.classList.toggle("is-on", k === i));
    railNum.textContent = pad2(i + 1);
    heroCta.classList.toggle("is-on", i === slides.length - 1);
  }

  function renderHero() {
    const p = heroProgress();
    smooth += (p - smooth) * 0.14;
    const sp = Math.abs(p - smooth) < 0.0008 ? p : smooth;

    // slide ativo
    let idx = 0;
    for (let i = SLIDE_STOPS.length - 1; i >= 0; i--) {
      if (sp >= SLIDE_STOPS[i]) { idx = i; break; }
    }
    setSlide(idx);

    // trilho + brilho
    railFill.style.width = sp * 100 + "%";
    glow.style.setProperty("--glow-o", String(clamp(sp * 1.5, 0, 1)));
    glow.style.setProperty("--glow-s", String(0.55 + sp * 0.6));

    // parallax leve do livro
    stage.style.setProperty("--book-s", String(0.94 + sp * 0.1));
    stage.style.setProperty("--book-y", (13 - sp * 5).toFixed(2) + "vh");

    // dica de scroll some no começo
    scrollHint.style.opacity = String(clamp(1 - sp * 9, 0, 1));

    // vídeo
    if (vReady && vDur) {
      const t = clamp(sp * vDur, 0, vDur - 0.06);
      if (Math.abs(t - lastSeek) > 0.012 && !video.seeking) {
        video.currentTime = t;
        lastSeek = t;
      }
    }

    // fallback CSS 3D
    if (usedFallback) {
      const cover = $(".cover.front", book3d);
      if (cover) cover.style.transform = `rotateY(${-clamp(sp / 0.3, 0, 1) * 168}deg)`;
      $$(".page", book3d).forEach((pg, i) => {
        const local = clamp((sp - 0.18 - i * 0.15) / 0.3, 0, 1);
        pg.style.transform = `rotateY(${-local * 168}deg) translateZ(${(4 - i) * 0.6}px)`;
      });
    }
  }

  function loop() {
    if (heroVisible) renderHero();
    requestAnimationFrame(loop);
  }

  if (reduced) {
    setSlide(slides.length - 1);
    poster.classList.remove("is-hidden");
  } else {
    setSlide(0);
    requestAnimationFrame(loop);
  }

  /* =======================================================
     3. MARQUEE
     ======================================================= */
  (function marquee() {
    const items = ["ENEM", "Fuvest", "Unicamp", "UERJ", "SiSU", "ProUni", "Cebraspe",
      "FGV", "Cesgranrio", "ITA", "IME", "EsPCEx", "PAS · UnB", "Escola Naval",
      "UFRJ", "UFMG", "UFRGS", "UFPE", "Redação nota 1000"];
    const track = $("#marqueeTrack");
    const html = items.map((t) => `<span class="marquee-item">${t}</span>`).join("");
    track.innerHTML = html + html; // duplicado para loop contínuo
  })();

  /* =======================================================
     4. CONTADORES
     ======================================================= */
  function runCounter(el) {
    const target = Number(el.dataset.count || 0);
    const suffix = el.dataset.suffix || "";
    const dur = 1400;
    const t0 = performance.now();
    function step(now) {
      const k = clamp((now - t0) / dur, 0, 1);
      const eased = 1 - Math.pow(1 - k, 3);
      if (k < 1) {
        el.textContent = Math.round(target * eased).toLocaleString("pt-BR") + suffix;
        requestAnimationFrame(step);
      } else {
        el.innerHTML = target.toLocaleString("pt-BR") + `<span>${suffix}</span>`;
      }
    }
    requestAnimationFrame(step);
  }

  /* =======================================================
     5. REVEAL ON SCROLL
     ======================================================= */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        $$("[data-count]", e.target).forEach(runCounter);
        if (e.target.hasAttribute("data-count")) runCounter(e.target);
        io.unobserve(e.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px" }
  );
  function observeReveals() { $$(".rv:not(.is-in)").forEach((el) => io.observe(el)); }

  /* =======================================================
     6. TRILHAS
     ======================================================= */
  const ICONS = {
    star:    '<path d="M12 3l2.6 5.6 6 .8-4.4 4.2 1.1 6.1L12 16.9 6.7 19.7l1.1-6.1L3.4 9.4l6-.8z"/>',
    book:    '<path d="M4 4h6a2.5 2.5 0 0 1 2.5 2.5V20a2 2 0 0 0-2-2H4z"/><path d="M20 4h-6a2.5 2.5 0 0 0-2.5 2.5V20a2 2 0 0 1 2-2H20z"/>',
    shield:  '<path d="M12 3l7.5 3v6c0 4.4-3 8.1-7.5 9.4C7.5 20.1 4.5 16.4 4.5 12V6z"/><path d="M9.3 12.2l1.9 1.9 3.6-3.7"/>',
    compass: '<circle cx="12" cy="12" r="8.5"/><path d="M15.2 8.8l-1.7 4.7-4.7 1.7 1.7-4.7z"/>',
    layers:  '<path d="M12 3.5l8.5 4.3-8.5 4.3-8.5-4.3z"/><path d="M3.5 12.5l8.5 4.3 8.5-4.3"/>',
    cap:     '<path d="M12 4L2.8 8.5 12 13l9.2-4.5z"/><path d="M6.5 10.7V16c0 1.5 2.5 2.8 5.5 2.8s5.5-1.3 5.5-2.8v-5.3"/>'
  };

  $("#tracks").innerHTML = TRACKS.map((t, i) => `
    <article class="track rv rv-${(i % 3) + 1}">
      <span class="track-ico">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
             stroke-linecap="round" stroke-linejoin="round">${ICONS[t.ico]}</svg>
      </span>
      <h3>${t.titulo}</h3>
      <p>${t.desc}</p>
      <div class="track-meta">
        ${t.destaque ? `<span class="chip accent">${t.destaque}</span>` : ""}
        ${t.tags.map((g) => `<span class="chip">${g}</span>`).join("")}
      </div>
      <div class="track-foot">
        <span>${t.stat}</span>
        <span class="go">Explorar <span class="arrow">→</span></span>
      </div>
    </article>`).join("");

  /* =======================================================
     7. MATÉRIAS
     ======================================================= */
  const subjectsBox = $("#subjects");

  function renderSubjects(area) {
    const list = area === "todas" ? SUBJECTS : SUBJECTS.filter((s) => s.area === area);
    subjectsBox.innerHTML = list.map((s, i) => `
      <article class="subject rv rv-${(i % 3) + 1}" data-id="${s.id}">
        <button class="subject-head" aria-expanded="false">
          <span class="subject-glyph">${s.glifo}</span>
          <span class="subject-title">
            <strong>${s.nome}</strong>
            <span>${s.aulas} aulas · ${s.resumo}</span>
          </span>
          <svg class="subject-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9.5l6 6 6-6"/>
          </svg>
        </button>
        <div class="subject-body"><div>
          <div class="subject-topics">
            ${s.topicos.map((t, k) => `
              <div class="topic">
                <span class="n">${pad2(k + 1)}</span>
                <span>${t[0]}</span>
                <span class="bar" title="Incidência ${t[1]}%"><i style="width:${t[1]}%"></i></span>
              </div>`).join("")}
          </div>
        </div></div>
      </article>`).join("");

    $$(".subject-head", subjectsBox).forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".subject");
        const open = card.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(open));
      });
    });
    observeReveals();
  }

  $$("#subjectFilter .pill").forEach((p) => {
    p.addEventListener("click", () => {
      $$("#subjectFilter .pill").forEach((x) => x.classList.remove("is-active"));
      p.classList.add("is-active");
      renderSubjects(p.dataset.area);
    });
  });
  renderSubjects("todas");

  /* =======================================================
     8. SIMULADO
     ======================================================= */
  const quizSel   = $("#quizSubject");
  const quizBody  = $("#quizBody");
  const quizCount = $("#quizCount");
  const quizBar   = $("#quizBar");
  const btnNext   = $("#quizNext");
  const btnRestart= $("#quizRestart");
  const sRight    = $("#scoreRight");
  const sWrong    = $("#scoreWrong");

  quizSel.innerHTML = '<option value="todas">Todas as matérias</option>' +
    SUBJECTS.map((s) => `<option value="${s.id}">${s.nome}</option>`).join("");

  let pool = [], qi = 0, right = 0, wrong = 0, answered = false;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function buildPool() {
    const mat = quizSel.value;
    const base = mat === "todas" ? QUESTIONS : QUESTIONS.filter((q) => q.materia === mat);
    pool = shuffle(base).slice(0, mat === "todas" ? 8 : base.length);
    qi = 0; right = 0; wrong = 0;
    sRight.textContent = "0";
    sWrong.textContent = "0";
    renderQuestion();
  }

  function renderQuestion() {
    answered = false;
    btnNext.innerHTML = 'Próxima <span class="arrow">→</span>';

    if (qi >= pool.length) return renderResult();

    const q = pool[qi];
    quizCount.textContent = `${pad2(qi + 1)} / ${pad2(pool.length)}`;
    quizBar.style.width = (qi / pool.length) * 100 + "%";

    quizBody.innerHTML = `
      <div class="q-source">${q.fonte}</div>
      <p class="q-text">${q.enunciado}</p>
      <div class="q-options">
        ${q.opcoes.map((o, i) => `
          <button class="q-opt" data-i="${i}">
            <span class="q-letter">${"ABCDE"[i]}</span>
            <span>${o}</span>
          </button>`).join("")}
      </div>
      <div id="qExplainSlot"></div>`;

    $$(".q-opt", quizBody).forEach((btn) => {
      btn.addEventListener("click", () => answer(Number(btn.dataset.i)));
    });
  }

  function answer(i) {
    if (answered) return;
    answered = true;
    const q = pool[qi];
    const opts = $$(".q-opt", quizBody);

    opts.forEach((b, k) => {
      b.disabled = true;
      if (k === q.correta) b.classList.add("is-right");
      if (k === i && i !== q.correta) b.classList.add("is-wrong");
    });

    if (i === q.correta) { right++; sRight.textContent = String(right); }
    else { wrong++; sWrong.textContent = String(wrong); }

    $("#qExplainSlot").innerHTML = `
      <div class="q-explain">
        <strong>${i === q.correta ? "Correto." : "Alternativa " + "ABCDE"[q.correta] + "."}</strong>
        ${q.explicacao}
      </div>`;

    if (qi === pool.length - 1) btnNext.innerHTML = 'Ver resultado <span class="arrow">→</span>';
  }

  function renderResult() {
    const total = right + wrong;
    const pct = total ? Math.round((right / total) * 100) : 0;
    const R = 52, C = 2 * Math.PI * R;
    quizCount.textContent = `${pad2(total)} / ${pad2(total)}`;
    quizBar.style.width = "100%";

    let msg;
    if (pct >= 80) msg = "Base sólida. Agora é aumentar o volume de questões e cuidar da revisão.";
    else if (pct >= 60) msg = "Você está no caminho. Volte nos tópicos que derrubaram e refaça.";
    else if (pct >= 40) msg = "Dá para melhorar rápido: revise a teoria dos temas errados antes de continuar.";
    else msg = "Comece pela teoria dessa matéria. Questão sem base vira chute, e chute não ensina.";

    quizBody.innerHTML = `
      <div class="quiz-result">
        <div class="ring">
          <svg width="130" height="130" viewBox="0 0 130 130">
            <circle cx="65" cy="65" r="${R}" fill="none" stroke="#23232a" stroke-width="6"/>
            <circle cx="65" cy="65" r="${R}" fill="none" stroke="#c9a227" stroke-width="6"
                    stroke-linecap="round" transform="rotate(-90 65 65)"
                    stroke-dasharray="${C}" stroke-dashoffset="${C}">
              <animate attributeName="stroke-dashoffset" from="${C}"
                       to="${C - (C * pct) / 100}" dur="1s" fill="freeze"
                       calcMode="spline" keySplines="0.22 1 0.36 1"/>
            </circle>
          </svg>
        </div>
        <div class="big">${pct}<span>%</span></div>
        <p class="muted" style="margin-top:14px">${right} acertos e ${wrong} erros em ${total} questões.</p>
        <p class="lede" style="margin:14px auto 0;text-align:center">${msg}</p>
      </div>`;
    btnNext.innerHTML = 'Novo simulado <span class="arrow">→</span>';
  }

  btnNext.addEventListener("click", () => {
    if (qi >= pool.length) { buildPool(); return; }
    if (!answered) { // pula sem responder conta como erro
      wrong++; sWrong.textContent = String(wrong);
    }
    qi++;
    renderQuestion();
  });
  btnRestart.addEventListener("click", buildPool);
  quizSel.addEventListener("change", buildPool);
  buildPool();

  /* =======================================================
     9. FACULDADES
     ======================================================= */
  const uniBody   = $("#uniBody");
  const uniSearch = $("#uniSearch");
  const uniRegion = $("#uniRegion");
  const uniSort   = $("#uniSort");
  const uniTotal  = $("#uniTotal");
  const MIN = 640, MAX = 840;

  function renderUnis() {
    const term = uniSearch.value.trim().toLowerCase();
    const reg  = uniRegion.value;

    let list = UNIS.filter((u) => {
      const okReg = reg === "todas" || u.regiao === reg;
      const hay = `${u.sigla} ${u.nome} ${u.curso} ${u.uf}`.toLowerCase();
      return okReg && (!term || hay.includes(term));
    });

    const s = uniSort.value;
    list.sort((a, b) =>
      s === "corte-asc" ? a.corte - b.corte
      : s === "nome"    ? a.sigla.localeCompare(b.sigla, "pt-BR")
      : b.corte - a.corte
    );

    uniTotal.textContent = String(list.length);

    if (!list.length) {
      uniBody.innerHTML = `<tr><td colspan="5" class="empty-row">
        Nenhum curso encontrado para essa busca. Tente outro termo ou região.</td></tr>`;
      return;
    }

    uniBody.innerHTML = list.map((u) => {
      const pct = clamp(((u.corte - MIN) / (MAX - MIN)) * 100, 6, 100);
      return `<tr>
        <td><span class="uni-name">${u.sigla}<small>${u.nome}</small></span></td>
        <td>${u.curso}</td>
        <td><span class="tag">${u.uf}</span></td>
        <td class="dim">${u.ingresso}</td>
        <td>
          <div style="display:flex;align-items:center;gap:12px">
            <span class="cut">${u.corte.toFixed(1).replace(".", ",")}</span>
            <span class="meter"><i style="width:${pct}%"></i></span>
          </div>
        </td>
      </tr>`;
    }).join("");
  }

  uniSearch.addEventListener("input", renderUnis);
  uniRegion.addEventListener("change", renderUnis);
  uniSort.addEventListener("change", renderUnis);
  renderUnis();

  /* =======================================================
     10. CRONOGRAMA
     ======================================================= */
  const pMat = $("#pMaterias");
  const pHoras = $("#pHoras"), pHorasVal = $("#pHorasVal");
  const pDias  = $("#pDias"),  pDiasVal  = $("#pDiasVal");
  const planOut = $("#planOut");

  pMat.innerHTML = SUBJECTS.map((s) => `
    <label class="check">
      <input type="checkbox" value="${s.id}">
      <span class="box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4"
             stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5"/></svg>
      </span>
      ${s.nome}
    </label>`).join("");

  pHoras.addEventListener("input", () => (pHorasVal.textContent = pHoras.value + "h"));
  pDias.addEventListener("input", () => (pDiasVal.textContent = pDias.value + " dias"));

  const DIAS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
  const ORDEM_ESTUDO = [0, 2, 4, 1, 3, 5, 6]; // espalha os dias quando são poucos

  const PESOS = {
    enem:       ["matematica", "portugues", "biologia", "historia", "quimica", "fisica", "filosofia", "ingles", "artes"],
    vestibular: ["matematica", "portugues", "fisica", "quimica", "biologia", "historia", "ingles", "filosofia", "artes"],
    concurso:   ["portugues", "matematica", "historia", "filosofia", "ingles"],
    militar:    ["matematica", "fisica", "quimica", "portugues", "ingles"],
    escola:     ["matematica", "portugues", "biologia", "historia", "quimica", "fisica", "ingles", "filosofia", "artes"]
  };

  function nomeDe(id) {
    const s = SUBJECTS.find((x) => x.id === id);
    return s ? s.nome : id;
  }

  $("#plannerForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const objetivo = $("#pObjetivo").value;
    const horas = Number(pHoras.value);
    const dias  = Number(pDias.value);
    const prior = $$("#pMaterias input:checked").map((i) => i.value);

    // monta a fila: prioridades entram duas vezes
    const base = PESOS[objetivo] || PESOS.enem;
    let fila = [];
    base.forEach((id) => {
      fila.push(id);
      if (prior.includes(id)) fila.push(id);
    });
    prior.forEach((id) => { if (!base.includes(id)) fila.push(id, id); });
    if (!fila.length) fila = base.slice();

    // escolhe os dias de estudo
    const estudo = new Set(ORDEM_ESTUDO.slice(0, dias));

    let k = 0;
    const linhas = DIAS.map((nome, di) => {
      if (!estudo.has(di)) {
        return `<div class="day">
          <div class="day-name">${nome}</div>
          <div class="day-blocks"><span class="block rest">Descanso — o cérebro consolida agora</span></div>
        </div>`;
      }

      const blocos = [];
      for (let h = 0; h < horas; h++) {
        const ultimo = h === horas - 1;
        if (ultimo && horas >= 3 && di % 2 === 1) {
          blocos.push(`<span class="block rev" style="animation-delay:${h * 55}ms">
            <span class="h">1h</span> Revisão espaçada</span>`);
        } else {
          const id = fila[k++ % fila.length];
          blocos.push(`<span class="block" style="animation-delay:${h * 55}ms">
            <span class="h">1h</span> ${nomeDe(id)}</span>`);
        }
      }
      if ((objetivo === "enem" || objetivo === "vestibular") && di === 5) {
        blocos.push(`<span class="block rev" style="animation-delay:${horas * 55}ms">
          <span class="h">1h</span> Redação</span>`);
      }

      return `<div class="day">
        <div class="day-name">${nome}</div>
        <div class="day-blocks">${blocos.join("")}</div>
      </div>`;
    }).join("");

    const totalSemana = horas * dias;
    planOut.innerHTML = `
      <div class="plan-head">
        <h3>Sua semana · ${$("#pObjetivo").selectedOptions[0].text}</h3>
        <span class="dim">${totalSemana}h por semana · ${(totalSemana * 4).toLocaleString("pt-BR")}h no mês</span>
      </div>
      <div class="plan-days">${linhas}</div>`;

    planOut.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "nearest" });
  });

  /* =======================================================
     11. FAQ
     ======================================================= */
  $$("#faq .faq-q").forEach((q) => {
    q.addEventListener("click", () => {
      const item = q.closest(".faq-item");
      const open = item.classList.contains("is-open");
      $$("#faq .faq-item").forEach((i) => i.classList.remove("is-open"));
      item.classList.toggle("is-open", !open);
    });
  });

  /* =======================================================
     12. INICIALIZA REVEALS
     ======================================================= */
  observeReveals();
})();
