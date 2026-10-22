// Uji lokal Kenali Calon: axe-core (320/375/430, terang/gelap), fungsi inti, font lokal,
// jaringan luar diblokir, screenshot. Tidak ikut terbit (scripts/ tidak disalin ke _site).
// Pakai:
//   npm i --prefix /tmp/kc-test playwright-core@1.56.1 axe-core@4.14.0
//   mkdir -p /tmp/kc-serve && ln -sfn /path/ke/repo /tmp/kc-serve/kenalicalon     # meniru subpath Pages
//   (cd /tmp/kc-serve && python3 -m http.server 8765 --bind 127.0.0.1 &)
//   NODE_PATH=/tmp/kc-test/node_modules CHROMIUM_PATH=/opt/pw-browsers/chromium \
//     node scripts/test_site.js http://127.0.0.1:8765/kenalicalon/ /tmp/kc-shots
// Mengandalkan: kunci localStorage "kenalicalon_v1", selector .band h1, id #cta-start, #copy-btn,
// #clear-open/#clear-yes. Ubah bersama bila UI berubah.
const { chromium } = require("playwright-core");
const fs = require("fs");
const path = require("path");
const axeSrc = fs.readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");

const BASE = process.argv[2];
const OUT = process.argv[3];
fs.mkdirSync(OUT, { recursive: true });
const origin = new URL(BASE).origin;

const results = { axe: [], external: [], console: [], checks: [] };
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
    const r = await page.evaluate(async () => await axe.run(document, { resultTypes: ["violations"] }));
    results.axe.push({ label, violations: r.violations.map((v) => ({ id: v.id, impact: v.impact, nodes: v.nodes.length, sample: v.nodes[0] && v.nodes[0].html.slice(0, 120) })) });
  }

  // --- axe + screenshot: beranda dan sesi, 320/375/430, terang/gelap
  for (const scheme of ["light", "dark"]) {
    for (const w of [320, 375, 430]) {
      const { ctx, page } = await newPage(w, scheme);
      await page.goto(BASE, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      if (w !== 375) await runAxe(page, `beranda ${w}px ${scheme}`);
      await page.screenshot({ path: path.join(OUT, `beranda-${w}-${scheme}.png`), fullPage: true });
      for (const key of ["hari1", "hari3", "penutup"]) {
        await page.goto(`${BASE}#${key}`, { waitUntil: "networkidle" });
        await page.reload({ waitUntil: "networkidle" });
        // buka satu kotak jawaban + isi supaya state aktif ikut diuji
        const btn = page.locator(".write").first();
        if (await btn.count()) { await btn.click(); await page.locator(".ta textarea").first().fill("Uji"); }
        if (w !== 375) await runAxe(page, `${key} ${w}px ${scheme}`);
        if (scheme === "light") { await page.evaluate(() => document.activeElement && document.activeElement.blur()); await page.waitForTimeout(500); await page.screenshot({ path: path.join(OUT, `${key}-${w}.png`), fullPage: false }); }
      }
      // overflow horizontal
      const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      ok(`tanpa scroll horizontal ${w}px ${scheme}`, over <= 0, `selisih ${over}px`);
      await ctx.close();
    }
  }

  // --- fungsi inti (430px, terang)
  {
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
    const txt = await page.locator("main, #v-session").first().innerText().catch(() => "");
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
  fs.writeFileSync(path.join(OUT, "hasil.json"), JSON.stringify(results, null, 2));

  const totalViol = results.axe.reduce((n, a) => n + a.violations.length, 0);
  console.log("AXE: " + results.axe.length + " halaman diuji, pelanggaran: " + totalViol);
  results.axe.filter((a) => a.violations.length).forEach((a) => console.log("  " + a.label + " -> " + JSON.stringify(a.violations)));
  console.log("PERMINTAAN LUAR DIBLOKIR: " + results.external.length + (results.external.length ? " " + JSON.stringify([...new Set(results.external)]) : ""));
  console.log("KONSOL error/warn: " + results.console.length + (results.console.length ? "\n  " + [...new Set(results.console)].join("\n  ") : ""));
  results.checks.forEach((c) => console.log((c.pass ? "PASS " : "FAIL ") + c.name + (c.pass ? "" : "  -> " + c.detail)));
  process.exit(results.checks.every((c) => c.pass) ? 0 : 1);
})();
