# Handoff PIC kenalicalon — 22 Okt 2026 (repo baru, laporan awal ke Auditor)

Dari: sesi PIC `kenalicalon` (`session_01MtVs2L4Kv6MUDieSBWBKF3`, judul "Kenali Calon project setup")
Untuk: sesi "Auditor Project" (`session_01V7K2gPxpghoLSqB74zsXWV`)

Penanda: **[Terverifikasi]** = diperiksa langsung di sesi ini (uji, log Actions, git). **[Keputusan Amal]** = Amal di chat
sesi ini. **[Usulan]** = kesimpulan/usulan PIC, belum diputuskan siapa pun.

## 1. Ringkasan

- Proyek baru **Kenali Calon** (panduan ta'aruf, statis, 7 sesi + penutup). Repo publik `reconciler/kenalicalon`, target
  https://reconciler.github.io/kenalicalon/. Asal: artifact claude.ai "Kenali Calon Pasangan" buatan Amal.
- **[Keputusan Amal]** 22 Okt 2026 (chat sesi ini): bila repo bisa dibuat dan terbit di `kenalicalon`, sesi ini jadi PIC,
  melapor ke Auditor, lalu menyesuaikan sesuai arahan Auditor "tanpa perlu konfirmasi ke saya".
  **[Usulan]** pengecualian di `CLAUDE.md` (privasi, pipeline/Pages, penghapusan data tetap konfirmasi Amal) dianggap
  **tetap berlaku**, karena kalimat Amal tidak menyebutnya. Mohon Auditor menegaskan.
- **Status terbit: BELUM tayang.** [Terverifikasi] Run Actions #1 (push `ef5c2d6`) gagal di langkah "Siapkan Pages":
  `Get Pages site failed ... Pages enabled and configured to build using GitHub Actions`. Pages belum diaktifkan, dan
  Settings Pages hanya Amal yang boleh ubah (aturan lintas-repo 17).
  **Menunggu Amal:** Settings → Pages → Build and deployment → Source = **GitHub Actions**. Setelah itu PIC re-run run #1.

## 2. Kronologi singkat (semua [Terverifikasi])

| Langkah | Hasil |
|---|---|
| `create_repository` lewat integrasi GitHub | **Ditolak 403** "Resource not accessible by integration" |
| `add_repo` sebelum repo ada | "not found / no access" |
| Amal membuat repo kosong `reconciler/kenalicalon` (publik, `main`) | `add_repo` + clone berhasil setelahnya |
| Commit `ef5c2d6` ke `main` (13 berkas) | Terdorong; run #1 terpicu, gagal di Pages (lihat atas) |

## 3. Perubahan dibanding artifact (semua [Terverifikasi] di diff/uji)

| Perubahan | Alasan | Tampilan berubah? |
|---|---|---|
| Font Poppins dilayani lokal (`lib/fonts/`, 4 bobot latin), tanpa Google Fonts | Aturan 7 dan 8; halaman memuat data pribadi ta'aruf | Tidak (font sama) |
| Kunci `localStorage` `panduan-calon-pasangan-v1` → `kenalicalon_v1` | Satu origin dengan 3 situs lain, kunci wajib berawalan unik | Tidak |
| Tautan "Proyek lain": Netlify → URL resmi GitHub Pages; ditambah Bikin CV Taaruf; `rel="noopener noreferrer"` | Netlify ditinggalkan 29 Sep; daftar resmi | Ya, minor (satu tautan bertambah) |
| `v-session` → `<main>`, judul sesi `h2` → `h1`, kategori `h3` → `h2` | axe: landmark-one-main, page-has-heading-one, region, urutan heading | Tidak (0 dari 15 screenshot berbeda, perbandingan piksel) |
| Shell HTML baru: meta SEO, canonical, OG/Twitter, JSON-LD `WebSite` (tanpa `SearchAction`), favicon, og-image 2400x1260, robots, sitemap | SEO pola repo lain | Tidak |

CSS, markup, data, dan JS selain butir di atas tidak diubah (dibangun terskrip dari sumber artifact; 11 substitusi teks,
tiap satu di-assert tepat 1 kecocokan, ditambah blok `@font-face` dan shell HTML).

## 4. Hasil uji ([Terverifikasi], lokal, Chromium, jaringan luar diblokir, data dummy)

| Uji | Hasil |
|---|---|
| axe-core beranda (320/430, terang/gelap) | **0 pelanggaran** (4 audit) |
| axe-core 8 sesi (320/430, terang/gelap; 32 audit) | Hanya `color-contrast` pada `.kicker`, 26 audit (6 audit bersih = fase 3 mode gelap). Sebelum perbaikan struktur: 48 pelanggaran di 12 audit sampel |
| Fungsi inti (14 uji) | 14/14 lulus: CTA, simpan + reload, filter peran, salin, hapus semua, kunci proyek lain tidak terhapus, tanpa scroll horizontal 320/375/430 |
| Permintaan jaringan dari halaman | 0; error/warn konsol 0 |
| Integritas font | sha1 tarball `@fontsource/poppins@5.3.0` = registry npm (`2b0b95ad…`), OFL-1.1 |
| Simulasi langkah uji pasca-deploy lokal | Sukses: exit 0. Gagal (font hilang, `CLAUDE.md` bocor, skrip CDN, `fetch`): semua exit 1 |
| Bagian bersama `CLAUDE.md` vs `catatankajian` | `diff` byte-identik (50 baris) |

**Belum terbukti:** tampil di perangkat nyata/iOS Safari (aturan 11: dianggap OK sampai Amal melapor), perilaku clipboard di
Safari/WhatsApp, hasil terbit live (egress ke `reconciler.github.io` diblokir, http 000; verifikasi lewat log Actions).

## 5. Penyimpangan dari pola repo lain

| Hal | Di repo ini | Alasan / status |
|---|---|---|
| Uji pasca-deploy: sampel rekursif per subfolder | Sampai 5 berkas rekursif | Font ada di `lib/fonts/` (dua tingkat); sampel non-rekursif melewatkannya |
| Uji pasca-deploy: cek aset yang dirujuk `index.html` | Baru: tiap font/favicon/og-image harus 200 | **Temuan simulasi:** versi awal lolos padahal font dihapus, karena daftar uji diturunkan dari isi `_site/`. [Usulan] `catatankajian/deploy.yml` kemungkinan punya celah sama (dari pembacaan, belum disimulasikan di sana) |
| Uji pasca-deploy: penjaga klaim | Baru: canonical, tanpa sumber eksternal, tanpa `fetch`/XHR/`sendBeacon`/`WebSocket` | Menjaga klaim "Jawaban hanya tersimpan di perangkat ini" (aturan 8) |
| Akordeon "Tentang" di header | **Belum ada**; ada blok "Tentang" di halaman + footer "Proyek lain" | Menunggu arahan Auditor (butir 7b) |
| `scripts/test_site.js` ada di repo | Ya (tidak tayang, uji 404 menjaganya) | Agar sesi berikut bisa mengulang uji aturan 13 dan 19 |
| Bagian bersama `CLAUDE.md` | Salinan ke-4, judul masih menyebut tiga repo | Auditor yang menyatukan daftar repo di judul |

## 6. Temuan dan usulan (aturan 4)

1. **Kontras kicker** `.band .kicker` (amber `#E0A458` di atas pita fase). [Terverifikasi, rumus WCAG]: 2,77:1 sampai
   4,79:1 di 8 warna pita; gagal 4,5:1 di 7 dari 8 (terburuk fase 4 terang). **[Usulan]** `#F3DBBC` (amber dicampur putih
   60%): minimum 4,52:1 di semua pita, nuansa amber terjaga. Mengubah tampilan, jadi belum diterapkan.
2. **Klaim tanpa sumber di UI** (aturan 8): "60–90 menit per sesi" (estimasi pembuat artifact) dan "Pertanyaan dihimpun
   dari berbagai sumber eksternal" (sumber tidak disebut). "18–28 pertanyaan per sesi" benar untuk "Lihat semua"
   ([Terverifikasi] dari data); bila peran dipilih jadi 16–28. **[Usulan]** tanya Amal: pertahankan, rujuk sumber, atau hapus.
3. **Daftar resmi dan panel "Proyek lain" di 3 repo lain belum mencantumkan Kenali Calon.** `CLAUDE.md` repo ini sudah
   memuatnya (ditandai menunggu verifikasi). **[Usulan]** Auditor memperbarui `CLAUDE.md` ketiga repo; panel di
   `index.html` tiap repo butuh PIC masing-masing + konfirmasi Amal (tampilan berubah).
4. **Lintas-project:** integrasi GitHub sesi tidak bisa membuat repo (403). **[Usulan]** untuk proyek baru berikutnya,
   Amal membuat repo kosong dulu; `add_repo` dan clone berjalan normal setelahnya. Settings Pages tetap Amal.
5. **Font:** `catatankajian` masih memuat Google Fonts dari CDN. Tidak melanggar aturan 7/8 selama tidak ada klaim
   "tanpa data terkirim", tetapi repo ini self-host. **[Usulan]** opsional menyamakan; tidak mendesak.

## 7. Permintaan arahan ke Auditor

- a. Konfirmasi repo ini masuk cakupan audit dan aturan akses berkas (bagian "Lapor ke Auditor" di `CLAUDE.md`) berlaku.
- b. Akordeon "Tentang": terapkan di header? Halaman depan memakai hero, bukan header; blok in-page bernama "Tentang"
  akan bentrok nama. **[Usulan]** bila diterapkan, ganti judul blok in-page menjadi "Untuk siapa" dan pindahkan kredit +
  Proyek lain ke panel, tanpa tautan kode sumber.
- c. Kontras kicker: eksekusi usulan 6.1?
- d. Klaim 60–90 menit dan "sumber eksternal": keputusan (6.2).
- e. Pembaruan daftar resmi di semua repo (6.3) dan penegasan butir 1 (pengecualian tetap berlaku).

## 8. Yang perlu diketahui

- **Belum tayang** sampai Amal mengubah Source Pages; push berikutnya akan memicu run yang gagal di langkah yang sama
  sampai itu dilakukan. Perubahan hanya-dokumen (seperti handoff ini) ikut memicu run karena deploy berjalan tiap push.
- **Perubahan perilaku vs artifact:** jawaban yang sudah ditulis di versi artifact tidak terbawa (origin berbeda dan kunci
  penyimpanan baru).
- **Keputusan menunggu:** Amal (Source Pages); Auditor (7a-7e).
