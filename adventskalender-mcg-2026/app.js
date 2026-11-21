/* Digitaler Adventskalender – Logik. Inhalte stehen in tuerchen.js. */
(function () {
  "use strict";

  const CFG = window.KALENDER_CONFIG || { jahr: new Date().getFullYear() };
  const DATEN = (window.TUERCHEN || []).slice().sort((a, b) => a.tag - b.tag);
  const JAHR = CFG.jahr;
  /* ---------- Vorschau-Modus (Passwort im Footer, nur für den Arbeitskreis) ----------
     Das Passwort steht nicht im Klartext im Code, nur als Prüfsumme. Echter Schutz ist das
     nicht (der Quelltext ist öffentlich), aber es öffnet niemand aus Versehen alles. */
  const VORSCHAU_KEY = "mcg-advent-" + JAHR + "-vorschau";
  const VORSCHAU_HASH = "7858644457514985";
  function pruefsumme(str, seed = 7) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507); h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507); h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return String(4294967296 * (2097151 & h2) + (h1 >>> 0));
  }
  let vorschau = false;
  try { vorschau = localStorage.getItem(VORSCHAU_KEY) === VORSCHAU_HASH; } catch (e) { /* kein Speicher */ }

  // Im Vorschau-Modus wird "Gelesen" getrennt gespeichert, damit die echte Ansicht unberührt bleibt
  const SPEICHER = "mcg-advent-" + JAHR + "-gelesen" + (vorschau ? "-vorschau" : "");

  const KATEGORIEN = {
    nrw: "NRW & Recht",
    tool: "Tool-Tipp",
    unterricht: "Unterricht",
    fuerdich: "Für dich"
  };

  // Feste, "gemischte" Reihenfolge der Türchen im Raster
  const REIHENFOLGE = [7, 15, 2, 20, 11, 24, 4, 18, 9, 13, 1, 22, 16, 5, 23, 10, 3, 19, 12, 8, 21, 6, 14, 17];

  /* ---------- Datum (lokale Uhr; Testmodus über ?datum=2026-12-05) ---------- */
  const params = new URLSearchParams(location.search);
  let heute = new Date();
  let testmodus = false;
  const p = params.get("datum");
  if (p && /^\d{4}-\d{2}-\d{2}$/.test(p)) {
    const [y, m, d] = p.split("-").map(Number);
    heute = new Date(y, m - 1, d, 12, 0, 0);
    testmodus = true;
  }
  const oeffnetAm = (tag) => new Date(JAHR, 11, tag, 0, 0, 0);
  const istOffen = (tag) => vorschau || heute >= oeffnetAm(tag);
  const istHeute = (tag) =>
    heute.getFullYear() === JAHR && heute.getMonth() === 11 && heute.getDate() === tag;

  const WOCHENTAG = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
  const datumText = (tag) => WOCHENTAG[oeffnetAm(tag).getDay()] + ", " + tag + ". Dezember";

  /* ---------- Gelesen-Status (nur lokal im Browser) ---------- */
  function ladeGelesen() {
    try { return new Set(JSON.parse(localStorage.getItem(SPEICHER) || "[]")); }
    catch (e) { return new Set(); }
  }
  function speichereGelesen(set) {
    try { localStorage.setItem(SPEICHER, JSON.stringify([...set])); } catch (e) { /* egal */ }
  }
  const gelesen = ladeGelesen();

  /* ---------- Mini-Formatierung: **fett**, *kursiv*, `code` ---------- */
  function fmt(text) {
    return String(text)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*])\*(?!\s)(.+?)\*(?!\*)/g, "$1<em>$2</em>")
      .replace(/`(.+?)`/g, "<code>$1</code>");
  }
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- Raster aufbauen ---------- */
  const liste = document.getElementById("kalender");
  const status = document.getElementById("status");
  const dialog = document.getElementById("tuer-dialog");
  const inhalt = document.getElementById("dlg-inhalt");

  document.getElementById("jahr").textContent = JAHR;
  document.getElementById("fuss-absender").textContent = CFG.absender || "";
  document.getElementById("fuss-stand").textContent = CFG.stand || "";

  const nachTag = new Map(DATEN.map((t) => [t.tag, t]));
  const reihenfolge = REIHENFOLGE.filter((n) => nachTag.has(n))
    .concat(DATEN.map((t) => t.tag).filter((n) => !REIHENFOLGE.includes(n)));

  reihenfolge.forEach((tag, i) => {
    const t = nachTag.get(tag);
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "tuer kat-" + t.kategorie;
    btn.dataset.tag = tag;
    btn.innerHTML =
      '<span class="flaeche">' +
        '<span class="symbol" aria-hidden="true"></span>' +
        '<span class="nummer">' + tag + "</span>" +
        '<span class="info"></span>' +
      "</span>";
    li.appendChild(btn);
    liste.appendChild(li);
    btn.addEventListener("click", () => klick(tag, btn));
  });

  function aktualisiereRaster() {
    liste.querySelectorAll(".tuer").forEach((btn) => {
      const tag = Number(btn.dataset.tag);
      const t = nachTag.get(tag);
      const offen = istOffen(tag);
      btn.classList.toggle("zu", !offen);
      btn.classList.toggle("offen", offen);
      btn.classList.toggle("heute", istHeute(tag));
      btn.classList.toggle("gelesen", offen && gelesen.has(tag));
      const info = btn.querySelector(".info");
      const symbol = btn.querySelector(".symbol");
      if (offen) {
        info.textContent = KATEGORIEN[t.kategorie] || "";
        symbol.textContent = "";
        btn.setAttribute("aria-label", "Türchen " + tag + ": " + t.titel + (gelesen.has(tag) ? " (gelesen)" : ""));
        btn.removeAttribute("aria-disabled");
      } else {
        info.textContent = datumText(tag);
        symbol.textContent = "🔒";
        btn.setAttribute("aria-label", "Türchen " + tag + ", öffnet sich am " + datumText(tag));
        btn.setAttribute("aria-disabled", "true");
      }
    });
    aktualisiereStatus();
  }

  function aktualisiereStatus() {
    const offeneTage = DATEN.filter((t) => istOffen(t.tag)).map((t) => t.tag);
    const anzahlGelesen = offeneTage.filter((n) => gelesen.has(n)).length;
    let test = testmodus ? '<span class="testmodus">Testmodus: ' + heute.toLocaleDateString("de-DE") + "</span>" : "";
    if (vorschau) test += '<span class="testmodus">Vorschau: alle Türchen offen</span>';
    let html;
    if (offeneTage.length === 0) {
      const ms = oeffnetAm(1) - heute;
      const tage = Math.ceil(ms / 86400000);
      html = "Am <strong>1. Dezember</strong> öffnet sich das erste Türchen – noch <strong>" + tage + " " + (tage === 1 ? "Tag" : "Tage") + "</strong>. Ab dann jeden Morgen ein neuer Tipp.";
    } else if (offeneTage.length < DATEN.length) {
      const neu = Math.max(...offeneTage);
      html = "Heute ist <button type=\"button\" class=\"zu-heute\" data-tag=\"" + neu + "\">Türchen " + neu + " öffnen</button> – es leuchtet im Kalender. Du hast <strong>" + anzahlGelesen + " von " + offeneTage.length + "</strong> offenen Türchen gelesen.";
    } else {
      html = "Alle <strong>24 Türchen</strong> sind offen – zum Nachlesen, so oft du willst. Gelesen: <strong>" + anzahlGelesen + " von 24</strong>.";
    }
    status.innerHTML = html + " " + test;
    const b = status.querySelector(".zu-heute");
    if (b) b.addEventListener("click", () => {
      const tuer = liste.querySelector('.tuer[data-tag="' + b.dataset.tag + '"]');
      klick(Number(b.dataset.tag), tuer);
    });
  }

  /* ---------- Klick auf ein Türchen ---------- */
  function klick(tag, btn) {
    if (!istOffen(tag)) {
      status.innerHTML = "🔒 Geduld! <strong>Türchen " + tag + "</strong> öffnet sich am <strong>" + datumText(tag) + "</strong>.";
      btn.animate(
        [{ transform: "translateX(0)" }, { transform: "translateX(-5px)" }, { transform: "translateX(5px)" }, { transform: "translateX(0)" }],
        { duration: 260 }
      );
      setTimeout(aktualisiereStatus, 3500);
      return;
    }
    const ersterBesuch = !gelesen.has(tag);
    const ruhig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (ersterBesuch && !ruhig) {
      btn.classList.add("schwingt");
      setTimeout(() => { btn.classList.remove("schwingt"); oeffne(tag); }, 520);
    } else {
      oeffne(tag);
    }
  }

  function oeffne(tag) {
    const t = nachTag.get(tag);
    if (!t || !istOffen(tag)) return;
    inhalt.innerHTML = baueInhalt(t);
    if (t.quiz) bindeQuiz(t);
    if (!dialog.open) dialog.showModal();
    inhalt.scrollTop = 0;
    inhalt.focus();
    if (location.hash !== "#t" + tag) history.replaceState(null, "", location.pathname + location.search + "#t" + tag);
    gelesen.add(tag);
    speichereGelesen(gelesen);
    aktualisiereRaster();
  }

  dialog.addEventListener("close", () => {
    history.replaceState(null, "", location.pathname + location.search);
  });
  dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });

  function liste_(items, tagName) {
    if (!items || !items.length) return "";
    const arr = Array.isArray(items) ? items : [items];
    return "<" + tagName + ">" + arr.map((x) => "<li>" + fmt(x) + "</li>").join("") + "</" + tagName + ">";
  }

  function baueInhalt(t) {
    let h = "";
    h += '<header class="dlg-kopf k-' + t.kategorie + '">';
    h += '<img class="bm" src="assets/' + ((t.kategorie === "nrw" || t.kategorie === "fuerdich") ? "bildmarke-weiss.png" : "bildmarke.png") + '" alt="">';
    h += '<span class="pille">' + esc(KATEGORIEN[t.kategorie] || "") + "</span>";
    h += '<span class="datum">Türchen ' + t.tag + " · " + datumText(t.tag) + "</span>";
    h += '<h2 id="dlg-titel">' + fmt(esc(t.titel)) + "</h2>";
    h += "</header>";
    if (t.problem) h += '<p class="problem">' + fmt(t.problem) + "</p>";
    if (t.loesung) h += '<section class="block"><h3>' + esc(t.loesungTitel || "So geht's") + "</h3>" + liste_(t.loesung, "ul") + "</section>";
    if (t.beispiel) h += '<section class="block"><h3>' + esc(t.beispielTitel || "Beispiel") + "</h3>" + liste_(t.beispiel, "ul") + "</section>";
    if (t.quiz) h += baueQuiz(t);
    if (t.hinweis) h += '<p class="hinweis">' + fmt(t.hinweis) + "</p>";
    if (t.challenge) h += '<p class="challenge">' + fmt(t.challenge) + "</p>";
    if (t.quellen && t.quellen.length) {
      h += '<section class="quellen"><h3>Quellen &amp; zum Weiterlesen</h3><ul>';
      t.quellen.forEach((q) => {
        h += '<li><a href="' + esc(q.url) + '" target="_blank" rel="noopener noreferrer">' + esc(q.titel) + "</a></li>";
      });
      h += "</ul></section>";
    }
    return h;
  }

  /* ---------- Quiz ---------- */
  function baueQuiz(t) {
    let h = '<form class="quiz" id="quiz">';
    t.quiz.forEach((q, i) => {
      h += '<fieldset data-i="' + i + '"><legend>' + (i + 1) + ". " + esc(q.frage) + "</legend>";
      q.antworten.forEach((a, j) => {
        h += '<label><input type="radio" name="q' + i + '" value="' + j + '"> <span>' + esc(a) + "</span></label>";
      });
      h += '<p class="erkl" hidden></p></fieldset>';
    });
    h += '<button type="submit" class="pruefen">Auswerten</button><p class="ergebnis" aria-live="polite"></p></form>';
    return h;
  }
  function bindeQuiz(t) {
    const form = document.getElementById("quiz");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let punkte = 0;
      t.quiz.forEach((q, i) => {
        const fs = form.querySelector('fieldset[data-i="' + i + '"]');
        const wahl = form.querySelector('input[name="q' + i + '"]:checked');
        fs.querySelectorAll("label").forEach((l, j) => {
          l.classList.remove("richtig", "falsch");
          if (j === q.richtig) l.classList.add("richtig");
          else if (wahl && Number(wahl.value) === j) l.classList.add("falsch");
        });
        if (wahl && Number(wahl.value) === q.richtig) punkte++;
        const erkl = fs.querySelector(".erkl");
        erkl.textContent = q.erklaerung || "";
        erkl.hidden = false;
      });
      const n = t.quiz.length;
      const lob = punkte === n ? " – volle Punktzahl, Glückwunsch! 🎉" : punkte >= n - 2 ? " – stark!" : " – die Türchen bleiben ja zum Nachlesen offen. 😉";
      form.querySelector(".ergebnis").textContent = punkte + " von " + n + " richtig" + lob;
    });
  }

  /* ---------- Deep Link (#t5) ---------- */
  function ausHash() {
    const m = location.hash.match(/^#t(\d{1,2})$/);
    if (m) {
      const tag = Number(m[1]);
      if (istOffen(tag)) oeffne(tag);
    }
  }

  /* ---------- Dezenter Schneefall ---------- */
  function schnee() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = document.getElementById("schnee");
    const ctx = c.getContext("2d");
    let w, h, flocken = [];
    const farben = ["rgba(255,255,255,0.9)", "rgba(255,255,255,0.55)", "rgba(228,236,243,0.75)"];
    function groesse() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = c.clientWidth; h = c.clientHeight;
      c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const anzahl = Math.round(Math.min(60, (w * h) / 6000));
      flocken = Array.from({ length: anzahl }, () => neu(true));
    }
    function neu(irgendwo) {
      return { x: Math.random() * w, y: irgendwo ? Math.random() * h : -10, r: 1.2 + Math.random() * 2.6,
        v: 0.25 + Math.random() * 0.55, phase: Math.random() * 6.28, f: farben[(Math.random() * farben.length) | 0] };
    }
    let laeuft = true;
    function schritt() {
      if (!laeuft) return;
      ctx.clearRect(0, 0, w, h);
      for (const s of flocken) {
        s.y += s.v; s.phase += 0.01; s.x += Math.sin(s.phase) * 0.3;
        if (s.y > h + 10) Object.assign(s, neu(false));
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283); ctx.fillStyle = s.f; ctx.fill();
      }
      requestAnimationFrame(schritt);
    }
    document.addEventListener("visibilitychange", () => {
      laeuft = !document.hidden; if (laeuft) requestAnimationFrame(schritt);
    });
    window.addEventListener("resize", groesse);
    groesse(); requestAnimationFrame(schritt);
  }

  /* ---------- Vorschau-Formular im Footer ---------- */
  const vForm = document.getElementById("vorschau-form");
  const vMeldung = document.getElementById("vorschau-meldung");
  const vEingabe = document.getElementById("vorschau-passwort");
  const vKnopf = document.getElementById("vorschau-knopf");
  function zeigeVorschauStatus() {
    if (vorschau) {
      vEingabe.hidden = true;
      vKnopf.textContent = "Vorschau beenden";
      vMeldung.textContent = "Vorschau aktiv – alle Türchen sind in diesem Browser offen.";
    } else {
      vEingabe.hidden = false;
      vKnopf.textContent = "Entsperren";
    }
  }
  vForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (vorschau) {
      try { localStorage.removeItem(VORSCHAU_KEY); } catch (err) { /* egal */ }
      location.reload();
      return;
    }
    if (pruefsumme(vEingabe.value.trim()) === VORSCHAU_HASH) {
      try { localStorage.setItem(VORSCHAU_KEY, VORSCHAU_HASH); location.reload(); return; }
      catch (err) { vorschau = true; aktualisiereRaster(); zeigeVorschauStatus(); }
    } else {
      vMeldung.textContent = "Das Passwort stimmt leider nicht.";
      vEingabe.select();
    }
  });
  zeigeVorschauStatus();

  aktualisiereRaster();
  ausHash();
  window.addEventListener("hashchange", ausHash);
  schnee();

  // Um Mitternacht automatisch das neue Türchen freischalten (wenn die Seite offen bleibt)
  if (!testmodus) setInterval(() => { heute = new Date(); aktualisiereRaster(); }, 60000);
})();
