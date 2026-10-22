// Uji lokal Kenali Calon: axe-core (8 sesi + beranda, 320/430, terang/gelap + data-theme manual), fungsi inti,
// klaim UI vs data, font lokal, jaringan luar diblokir, metrik tinggi, screenshot.
// Tidak ikut terbit (scripts/ tidak disalin ke _site).
// Pakai:
//   npm i --prefix /tmp/kc-test playwright-core@1.56.1 axe-core@4.14.0
//   mkdir -p /tmp/kc-serve && ln -sfn /path/ke/repo /tmp/kc-serve/kenalicalon     # meniru subpath Pages
//   (cd /tmp/kc-serve && python3 -m http.server 8765 --bind 127.0.0.1 &)
//   NODE_PATH=/tmp/kc-test/node_modules CHROMIUM_PATH=/opt/pw-browsers/chromium \
//     node scripts/test_site.js http://127.0.0.1:8765/kenalicalon/ /tmp/kc-shots
// Keluaran: ringkasan di stdout, rincian di <OUT>/hasil.json (axe, metrik tinggi, cek), screenshot di <OUT>.
// Mengandalkan: kunci localStorage "kenalicalon_v1", selector .band h1, .stats, .fokus b, id #cta-start,
// #copy-btn, #clear-open/#clear-yes. Ubah bersama bila UI berubah.
const { chromium } = require("playwright-core");
const fs = require("fs");
const path = require("path");
const axeSrc = fs.readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");

const BASE = process.argv[2];
const OUT = process.argv[3];
fs.mkdirSync(OUT, { recursive: true });
const origin = new URL(BASE).origin;

const SESSIONS = ["hari1", "hari2", "hari3", "hari4", "hari5", "hari6", "hari7", "penutup"];
// mode tampilan untuk axe: emulasi prefers-color-scheme, dan/atau atribut data-theme manual
const MODES = [
  { name: "terang", scheme: "light" },
  { name: "gelap", scheme: "dark" },
  { name: "tema-gelap-manual", scheme: "light", theme: "dark" },
  { name: "tema-terang-manual", scheme: "dark", theme: "light" },
];

// KC_ONLY=<bagian,...> menjalankan sebagian saja (axe, metrics, claims, about, core); kosong = semua.
// KC_ONLY=metrics saja = hanya ukur tinggi (cepat), untuk membuat baseline. KC_BASELINE=<hasil.json>: bandingkan tinggi.
const ONLY = (process.env.KC_ONLY || "").split(",").filter(Boolean);
const want = (name) => ONLY.length === 0 || ONLY.includes(name);
const ONLY_METRICS = ONLY.length === 1 && ONLY[0] === "metrics";
// sesi yang juga diaudit axe dengan panel "Tentang" terbuka
const OPEN_PANEL_KEYS = new Set(["hari1", "hari4", "hari7", "penutup"]);

const results = { axe: [], external: [], console: [], checks: [], metrics: {}, metricsSession: {} };
const ok = (name, pass, detail) => results.checks.push({ name, pass: !!pass, detail: detail || "" });

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || "/opt/pw-browsers/chromium", args: ["--no-sandbox"] });

  async function newPage(width, scheme) {
    const ctx = await browser.newContext({
      viewport: { width, height: 800 }, colorScheme: scheme || "light", deviceScaleFactor: 2,
      permissions: ["clipboard-read", "clipboard-write"],
    });
    await ctx.route("**/*", (route) => {
      const u = route.request().url();
      if (u.startsWith(origin) || u.startsWith("data:") || u.startsWith("blob:")) return route.continue();
      results.external.push(u);
      return route.abort();
    });
    const page = await ctx.newPage();
    page.on("console", (m) => { if (["error", "warning"].includes(m.type())) results.console.push(`[${width}] ${m.type()}: ${m.text()}`); });
    page.on("pageerror", (e) => results.console.push(`[${width}] pageerror: ${e.message}`));
    return { ctx, page };
  }

  async function runAxe(page, label) {
    await page.evaluate(axeSrc);
    const r = await page.evaluate(async () => await axe.run(document, { resultTypes: ["violations", "incomplete"] }));
    // why = alasan axe (mis. bgOverlap: teks tertutup elemen lain, jadi kontras tak bisa dihitung)
    const pack = (v) => ({ id: v.id, impact: v.impact, nodes: v.nodes.length, sample: v.nodes[0] && v.nodes[0].html.slice(0, 120),
      why: [...new Set(v.nodes.flatMap((n) => (n.any || []).map((a) => a.data && a.data.messageKey).filter(Boolean)))] });
    results.axe.push({ label, violations: r.violations.map(pack), incomplete: r.incomplete.map(pack) });
  }

  const applyTheme = (page, mode) =>
    mode.theme ? page.evaluate((t) => document.documentElement.setAttribute("data-theme", t), mode.theme) : Promise.resolve();

  // axe dengan panel "Tentang" terbuka (tombol yang sedang tampil), lalu tutup lewat Esc
  async function axeWithPanel(page, label) {
    const btn = page.locator(".about-btn:visible").first();
    if (!(await btn.count())) return;
    await btn.click();
    await runAxe(page, `${label} panel terbuka`);
    await page.keyboard.press("Escape");
  }

  // --- axe: beranda + 8 sesi, 320/430, 4 mode tampilan
  for (const mode of want("axe") ? MODES : []) {
    for (const w of [320, 430]) {
      const { ctx, page } = await newPage(w, mode.scheme);
      await page.goto(BASE, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      await applyTheme(page, mode);
      await runAxe(page, `beranda ${w}px ${mode.name}`);
      await axeWithPanel(page, `beranda ${w}px ${mode.name}`);
      for (const key of SESSIONS) {
        await page.goto(`${BASE}#${key}`, { waitUntil: "networkidle" });
        await page.reload({ waitUntil: "networkidle" });
        await applyTheme(page, mode);
        // buka satu kotak jawaban + isi supaya state aktif ikut diuji
        const btn = page.locator(".write").first();
        if (await btn.count()) { await btn.click(); await page.locator(".ta textarea").first().fill("Uji"); }
        await runAxe(page, `${key} ${w}px ${mode.name}`);
        if (OPEN_PANEL_KEYS.has(key)) await axeWithPanel(page, `${key} ${w}px ${mode.name}`);
      }
      await ctx.close();
    }
  }

  // --- screenshot + overflow + metrik tinggi (320/375/430, terang/gelap)
  for (const scheme of want("metrics") ? ["light", "dark"] : []) {
    for (const w of [320, 375, 430]) {
      const { ctx, page } = await newPage(w, scheme);
      await page.goto(BASE, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      if (scheme === "light") {
        results.metrics[w] = await page.evaluate(() => ({
          hero: Math.round(document.querySelector(".hero").getBoundingClientRect().height * 100) / 100,
          aboveFooter: Math.round(document.querySelector(".site-footer").offsetTop * 100) / 100,
          doc: document.documentElement.scrollHeight,
        }));
      }
      await page.screenshot({ path: path.join(OUT, `beranda-${w}-${scheme}.png`), fullPage: true });
      for (const key of ONLY_METRICS && scheme !== "light" ? [] : ["hari1", "hari3", "penutup"]) {
        await page.goto(`${BASE}#${key}`, { waitUntil: "networkidle" });
        await page.reload({ waitUntil: "networkidle" });
        if (scheme === "light" && key === "hari1") {
          results.metricsSession[w] = await page.evaluate(() => ({
            topbar: Math.round(document.querySelector(".topbar").getBoundingClientRect().height * 100) / 100,
            band: Math.round(document.querySelector(".band").getBoundingClientRect().height * 100) / 100,
            doc: document.documentElement.scrollHeight,
          }));
        }
        if (scheme === "light") { await page.evaluate(() => document.activeElement && document.activeElement.blur()); await page.waitForTimeout(500); await page.screenshot({ path: path.join(OUT, `${key}-${w}.png`), fullPage: false }); }
      }
      await page.goto(BASE, { waitUntil: "networkidle" });
      const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      ok(`tanpa scroll horizontal ${w}px ${scheme}`, over <= 0, `selisih ${over}px`);
      await ctx.close();
    }
  }

  // --- klaim UI vs data (aturan lintas-repo 8): jumlah sesi dan rentang pertanyaan per sesi
  if (want("claims")) {
    const { ctx, page } = await newPage(430, "light");
    await page.goto(BASE, { waitUntil: "networkidle" });
    const D = await page.evaluate(() => window.PANDUAN_DATA);
    const visibleFor = (q, role) => !q.g || role === "semua" || (role === "suami" && q.g === "s") || (role === "istri" && q.g === "i");
    const countFor = (d, role) => d.cats.reduce((n, c) => n + c.qs.filter((q) => visibleFor(q, role)).length, 0);
    const all = [];
    D.days.forEach((d) => ["semua", "suami", "istri"].forEach((r) => all.push(countFor(d, r))));
    const lo = Math.min(...all), hi = Math.max(...all);
    const stat = await page.evaluate(() => [...document.querySelectorAll(".stats div")].map((el) => ({ b: el.querySelector("b").innerText, span: el.querySelector("span").innerText })));
    const m = stat[1].b.match(/(\d+)\s*[–-]\s*(\d+)/);
    ok(`rentang pertanyaan per sesi di UI = data (${lo}-${hi}, semua peran)`, !!m && +m[1] === lo && +m[2] === hi, `UI="${stat[1].b}" data=${lo}-${hi}`);
    ok("jumlah sesi di UI = data", +stat[0].b === D.days.length, `UI=${stat[0].b} data=${D.days.length}`);
    ok("label estimasi waktu memakai kata 'perkiraan'", /perkiraan/i.test(stat[2].span), stat[2].span);

    // hitungan di UI (kalimat "N pertanyaan.") sama dengan hitungan dari data, 7 hari x 3 peran
    let mism = [];
    for (const role of ["semua", "suami", "istri"]) {
      await page.evaluate((r) => localStorage.setItem("kenalicalon_v1", JSON.stringify({ role: r, name: "", ans: {} })), role);
      for (let i = 0; i < D.days.length; i++) {
        await page.goto(`${BASE}#hari${i + 1}`, { waitUntil: "networkidle" });
        await page.reload({ waitUntil: "networkidle" });
        const ui = await page.locator(".fokus b").last().innerText();
        const want = countFor(D.days[i], role);
        if (ui.trim() !== `${want} pertanyaan.`) mism.push(`hari${i + 1}/${role}: UI="${ui}" data=${want}`);
      }
    }
    ok("jumlah pertanyaan tampil di UI = data (7 hari x 3 peran)", mism.length === 0, mism.join("; "));
    await ctx.close();
  }

  // --- Tentang (akordeon), arahan Auditor 22 Okt 2026 butir 3: perilaku, isi, penempatan, struktur halaman
  if (want("about")) {
    const PROJECTS = [
      ["Jadwal Kajian", "https://reconciler.github.io/jadwalkajian/"],
      ["Catatan Kajian", "https://reconciler.github.io/catatankajian/"],
      ["Bikin CV Taaruf", "https://reconciler.github.io/bikin-cv-taaruf/"],
    ];
    const IG = "https://www.instagram.com/amalwoodworking/";
    const overlap = (a, b) => !(a.x + a.width <= b.x || b.x + b.width <= a.x || a.y + a.height <= b.y || b.y + b.height <= a.y);

    for (const w of [320, 375, 430]) {
      for (const view of ["beranda", "hari1", "penutup"]) {
        const tag = `${view} ${w}px`;
        const { ctx, page } = await newPage(w, "light");
        await page.goto(view === "beranda" ? BASE : `${BASE}#${view}`, { waitUntil: "networkidle" });
        if (view !== "beranda") await page.reload({ waitUntil: "networkidle" });

        const btn = page.locator(".about-btn:visible");
        const nBtn = await btn.count();
        ok(`Tentang ${tag}: tepat 1 tombol berlabel 'Tentang'`, nBtn === 1 && (await btn.innerText()).trim() === "Tentang", `jumlah=${nBtn}`);
        if (nBtn !== 1) { await ctx.close(); continue; }
        const panel = page.locator("#" + (await btn.getAttribute("aria-controls")));
        const state = async () => ({ exp: await btn.getAttribute("aria-expanded"), vis: await panel.isVisible() });

        const s0 = await state();
        ok(`Tentang ${tag}: tertutup secara default (aria-expanded=false, panel tak tampak)`, s0.exp === "false" && !s0.vis, JSON.stringify(s0));

        // penempatan: pojok kanan atas hero/pita, 16px dari tepi kanan, tidak menimpa teks
        const bb = await btn.boundingBox();
        const blockBox = await page.locator(view === "beranda" ? ".hero" : ".band").boundingBox();
        ok(`Tentang ${tag}: di pojok kanan atas (48px teratas blok, tepi kanan 16px)`,
          bb.y - blockBox.y >= 0 && bb.y + bb.height - blockBox.y <= 48 && Math.abs(w - (bb.x + bb.width) - 16) <= 1,
          `y=${bb.y - blockBox.y} h=${bb.height} kanan=${w - (bb.x + bb.width)}`);
        // rect teks yang benar-benar tampak (per baris), bukan kotak blok selebar kolom; titik hari = tiap <li>
        const texts = await page.locator(".kicker:visible, .dots li:visible, h1:visible").evaluateAll((els) => els.flatMap((e) => {
          const rects = e.tagName === "LI" ? [e.getBoundingClientRect()] : (() => { const r = document.createRange(); r.selectNodeContents(e); return [...r.getClientRects()]; })();
          return rects.map((r) => ({ x: r.x, y: r.y, width: r.width, height: r.height, t: e.tagName }));
        }));
        ok(`Tentang ${tag}: tidak menimpa kicker/titik hari/judul`, texts.every((t) => !overlap(bb, t)), JSON.stringify(texts.filter((t) => overlap(bb, t))));

        // buka lewat klik, panel utuh di dalam viewport
        await btn.click();
        const s1 = await state();
        const pb = await panel.boundingBox();
        ok(`Tentang ${tag}: klik membuka (aria-expanded=true, panel tampak, di dalam viewport)`, s1.exp === "true" && s1.vis && pb && pb.x >= 0 && pb.x + pb.width <= w, JSON.stringify({ s1, x: pb && pb.x, r: pb && pb.x + pb.width }));

        // isi panel: 1 Instagram + 3 proyek persis Daftar resmi, rel benar, tanpa tautan GitHub
        const links = await panel.locator("a").evaluateAll((as) => as.map((a) => ({ t: a.textContent.trim(), h: a.getAttribute("href"), tg: a.getAttribute("target"), rel: a.getAttribute("rel") })));
        ok(`Tentang ${tag}: isi = 1 Instagram + 3 proyek (label, URL, urutan = Daftar resmi)`,
          links.length === 4 && links[0].h === IG && links[0].t === "@amalwoodworking" && PROJECTS.every((p, i) => links[i + 1].t === p[0] && links[i + 1].h === p[1]), JSON.stringify(links));
        ok(`Tentang ${tag}: semua tautan target=_blank rel="noopener noreferrer"`, links.every((l) => l.tg === "_blank" && l.rel === "noopener noreferrer"), JSON.stringify(links.map((l) => l.rel)));
        ok(`Tentang ${tag}: tanpa tautan kode sumber/GitHub`, links.every((l) => !/\/\/(www\.)?github\.com\//.test(l.h)), "");

        // tutup lewat klik di luar
        await page.mouse.click(4, 520);
        const s2 = await state();
        ok(`Tentang ${tag}: klik di luar menutup`, s2.exp === "false" && !s2.vis, JSON.stringify(s2));

        // Esc menutup dan fokus kembali ke tombol (juga bila fokus ada di dalam panel)
        await btn.click();
        await panel.locator("a").first().focus();
        await page.keyboard.press("Escape");
        const s3 = await state();
        const focusOnBtn = await page.evaluate(() => document.activeElement && document.activeElement.classList.contains("about-btn"));
        ok(`Tentang ${tag}: Esc menutup dan fokus kembali ke tombol`, s3.exp === "false" && !s3.vis && focusOnBtn, JSON.stringify({ s3, focusOnBtn }));

        // klik tombol lagi menutup
        await btn.click(); await btn.click();
        const s4 = await state();
        ok(`Tentang ${tag}: klik tombol kedua kali menutup`, s4.exp === "false" && !s4.vis, JSON.stringify(s4));

        if (view === "beranda") {
          // tautan proyek lain hanya lewat panel; footer tanpa label/nav; eyebrow dan anchor diganti
          const o = await page.evaluate(() => ({
            diLuarPanel: [...document.querySelectorAll('a[href*="reconciler.github.io"]')].filter((a) => !a.closest(".about-panel")).length,
            footerNav: document.querySelectorAll(".site-footer nav, .site-footer .others").length,
            eyebrow: (document.querySelector("#untuk-siapa .eyebrow") || {}).textContent,
            anchorLama: !!document.getElementById("tentang"),
          }));
          ok(`Tentang ${tag}: tautan proyek lain hanya lewat panel (0 di luar panel)`, o.diLuarPanel === 0, JSON.stringify(o));
          ok(`Tentang ${tag}: footer tanpa label/nav "Proyek lain"`, o.footerNav === 0, JSON.stringify(o));
          ok(`Tentang ${tag}: blok in-page berjudul "Untuk siapa" (#untuk-siapa), anchor #tentang tidak ada`, o.eyebrow === "Untuk siapa" && !o.anchorLama, JSON.stringify(o));
          // panel terbuka lalu pindah ke sesi: semua panel tertutup
          await btn.click();
          await page.click("#cta-start");
          const openAfter = await page.evaluate(() => document.querySelectorAll('.about-btn[aria-expanded="true"]').length);
          ok(`Tentang ${tag}: pindah halaman menutup panel`, openAfter === 0, `terbuka=${openAfter}`);
        }
        await ctx.close();
      }
    }
  }

  // --- fungsi inti (430px, terang)
  if (want("core")) {
    const { ctx, page } = await newPage(430, "light");
    await page.goto(BASE, { waitUntil: "networkidle" });
    await page.evaluate(() => localStorage.clear());
    await page.reload({ waitUntil: "networkidle" });

    const fontInfo = await page.evaluate(async () => {
      await document.fonts.ready;
      return { p400: document.fonts.check("400 16px Poppins"), p600: document.fonts.check("600 16px Poppins"),
        loaded: [...document.fonts].filter((f) => f.status === "loaded").map((f) => f.weight) };
    });
    ok("font Poppins dimuat dari lokal (4 bobot)", fontInfo.loaded.length === 4, JSON.stringify(fontInfo));

    await page.fill("#name-home", "Uji");
    await page.click('[data-role="istri"]');
    await page.click("#cta-start");
    ok("CTA membuka Hari 1", (await page.locator(".band h1").innerText()).includes("Mengenal Diri"));
    await page.locator(".write").first().click();
    await page.locator(".ta textarea").first().fill("Jawaban uji pertama");
    await page.locator('.seg.yn [data-yn="ya"]').first().click();
    await page.waitForTimeout(700);

    const keys = await page.evaluate(() => Object.keys(localStorage));
    ok("hanya satu kunci localStorage: kenalicalon_v1", keys.length === 1 && keys[0] === "kenalicalon_v1", JSON.stringify(keys));

    await page.reload({ waitUntil: "networkidle" });
    const restored = await page.locator(".ta textarea").first().inputValue();
    ok("jawaban bertahan setelah reload", restored === "Jawaban uji pertama", restored);

    // filter peran: istri tidak melihat pertanyaan khusus suami (Hari 3 q21 khusus calon istri/suami)
    await page.goto(`${BASE}#hari3`, { waitUntil: "networkidle" });
    await page.reload({ waitUntil: "networkidle" });
    const sess = await page.locator("#v-session").innerText();
    ok("peran istri: pertanyaan 'khusus calon suami' tersembunyi", !sess.includes("Khusus calon suami") && sess.includes("Khusus calon istri"));

    // salin
    await page.goto(`${BASE}#hari1`, { waitUntil: "networkidle" });
    await page.reload({ waitUntil: "networkidle" });
    await page.click("#copy-btn");
    await page.waitForTimeout(300);
    const clip = await page.evaluate(() => navigator.clipboard.readText());
    ok("salin jawaban menghasilkan teks berformat", clip.startsWith("KENALI CALON PASANGAN") && clip.includes("Penjawab: Uji (calon istri)") && clip.includes("Jawaban Uji: Ya"), clip.slice(0, 120).replace(/\n/g, " | "));

    // hapus semua
    await page.goto(BASE, { waitUntil: "networkidle" });
    await page.click("#clear-open");
    await page.click("#clear-yes");
    const after = await page.evaluate(() => JSON.parse(localStorage.getItem("kenalicalon_v1")));
    ok("hapus semua mengosongkan jawaban dan nama", Object.keys(after.ans).length === 0 && after.name === "");

    // kunci milik proyek lain tidak tersentuh
    await page.evaluate(() => localStorage.setItem("ctgv1_draft_v1", "SENTINEL"));
    await page.click("#clear-open");
    await page.click("#clear-yes");
    const sentinel = await page.evaluate(() => localStorage.getItem("ctgv1_draft_v1"));
    ok("kunci proyek lain (ctgv1_draft_v1) tidak terhapus", sentinel === "SENTINEL");
    await ctx.close();
  }

  await browser.close();

  if (ONLY.length === 0) ok("tidak ada permintaan jaringan luar dari halaman", results.external.length === 0, JSON.stringify([...new Set(results.external)]));

  // bandingkan tinggi dengan baseline (hasil.json dari run KC_ONLY=metrics atau run penuh sebelum perubahan)
  if (process.env.KC_BASELINE && want("metrics")) {
    const base = JSON.parse(fs.readFileSync(process.env.KC_BASELINE, "utf8"));
    const deltas = {};
    for (const w of [320, 375, 430]) {
      const a = base.metrics[w], b = results.metrics[w];
      ok(`tinggi hero beranda = baseline (${w}px)`, a.hero === b.hero, `${a.hero} -> ${b.hero}`);
      ok(`tinggi beranda di atas footer = baseline (${w}px)`, a.aboveFooter === b.aboveFooter, `${a.aboveFooter} -> ${b.aboveFooter}`);
      deltas[w] = { docBeranda: b.doc - a.doc };
      const sa = base.metricsSession && base.metricsSession[w], sb = results.metricsSession[w];
      if (sa && sb) {
        ok(`tinggi topbar, pita, dan halaman sesi (Hari 1) = baseline (${w}px)`, sa.topbar === sb.topbar && sa.band === sb.band && sa.doc === sb.doc, `${JSON.stringify(sa)} -> ${JSON.stringify(sb)}`);
      }
    }
    results.docHeightDelta = deltas;
    console.log("SELISIH tinggi dokumen beranda vs baseline (px, negatif = lebih pendek): " + JSON.stringify(deltas));
  }

  fs.writeFileSync(path.join(OUT, "hasil.json"), JSON.stringify(results, null, 2));

  const totalViol = results.axe.reduce((n, a) => n + a.violations.length, 0);
  console.log("AXE: " + results.axe.length + " audit, pelanggaran: " + totalViol);
  results.axe.filter((a) => a.violations.length).forEach((a) => console.log("  " + a.label + " -> " + JSON.stringify(a.violations)));
  const inc = results.axe.filter((a) => a.incomplete.length);
  console.log("AXE 'perlu cek' (incomplete): " + inc.length + " audit" + (inc.length ? "\n  " + inc.map((a) => a.label + " -> " + a.incomplete.map((i) => i.id + "x" + i.nodes + "[" + i.why.join("|") + "]").join(",")).slice(0, 12).join("\n  ") : ""));
  console.log("METRIK tinggi (terang, beranda): " + JSON.stringify(results.metrics));
  console.log("PERMINTAAN LUAR DIBLOKIR: " + results.external.length + (results.external.length ? " " + JSON.stringify([...new Set(results.external)]) : ""));
  console.log("KONSOL error/warn: " + results.console.length + (results.console.length ? "\n  " + [...new Set(results.console)].join("\n  ") : ""));
  results.checks.forEach((c) => console.log((c.pass ? "PASS " : "FAIL ") + c.name + (c.pass ? "" : "  -> " + c.detail)));
  process.exit(results.checks.every((c) => c.pass) && totalViol === 0 ? 0 : 1);
})();
