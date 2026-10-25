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
- **[Keputusan Amal]** 22 Okt 2026 (chat sesi PIC, setelah laporan awal): "semua usulan perubahan tampilan, silakan
  dieksekusi setelah ada arahan dari auditor". Artinya usulan tampilan di dokumen ini (6.1 kontras kicker, 7b akordeon
  "Tentang", dan sejenisnya) **boleh dieksekusi PIC begitu arahan Auditor tercatat di git**, tanpa konfirmasi ulang ke Amal.
  **[Usulan]** penafsiran PIC: izin ini tidak mencakup pipeline/Pages, privasi, dan penghapusan data (tetap konfirmasi
  Amal di chat PIC).
- **Status terbit: TAYANG** di https://reconciler.github.io/kenalicalon/ (diperbarui setelah Amal mengaktifkan Pages).
  [Terverifikasi] Run #1 (push `ef5c2d6`) gagal di "Siapkan Pages" (`Get Pages site failed ... Pages enabled and
  configured to build using GitHub Actions`). Amal lalu mengubah Settings → Pages → Source = **GitHub Actions** (aturan
  lintas-repo 17: hanya Amal). Run #2 (push `d79d81b`) **success**; log runner memuat 21 pengecekan OK (rincian di 4).
  Tampilan live belum dilihat siapa pun (aturan 11).

## 2. Kronologi singkat (semua [Terverifikasi])

| Langkah | Hasil |
|---|---|
| `create_repository` lewat integrasi GitHub | **Ditolak 403** "Resource not accessible by integration" |
| `add_repo` sebelum repo ada | "not found / no access" |
| Amal membuat repo kosong `reconciler/kenalicalon` (publik, `main`) | `add_repo` + clone berhasil setelahnya |
| Commit `ef5c2d6` ke `main` (13 berkas) | Terdorong; run #1 terpicu, gagal di "Siapkan Pages" (Pages belum aktif) |
| Commit `d79d81b` (handoff awal), setelah Amal mengaktifkan Pages (Source = GitHub Actions) | Run #2 success; situs tayang |

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
| Terbit live, dari log run #2 di runner GitHub (`curl` ke situs publik) | 21 OK: beranda 200 + teks penanda; 5 berkas publik 200; 5 berkas `lib/fonts/` 200; `CLAUDE.md`, `scripts/test_site.js`, `AUDIT-HANDOFF-2026-10-22.md` 404; penjaga klaim OK; 6 aset yang dirujuk `index.html` 200 |

**Belum terbukti:** tampil di perangkat nyata/iOS Safari (aturan 11: dianggap OK sampai Amal melapor) dan perilaku clipboard
di Safari/WhatsApp. Uji pasca-deploy tidak menilai tampilan. Sesi ini tidak bisa membuka `reconciler.github.io` (http 000),
jadi bukti terbit hanya dari log Actions.

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

- **Kejadian otomatis:** deploy berjalan tiap push ke `main`, termasuk perubahan hanya-dokumen (seperti pembaruan handoff
  ini). Situs sudah publik dan boleh diindeks mesin pencari (`robots.txt` mengizinkan); isinya pertanyaan, tanpa data pengguna.
- **Perubahan perilaku vs artifact:** jawaban yang sudah ditulis di versi artifact tidak terbawa (origin berbeda dan kunci
  penyimpanan baru).
- **Keputusan menunggu:** Auditor (7a-7e). Izin Amal untuk perubahan tampilan sudah ada (lihat 1); PIC mengeksekusinya
  setelah arahan Auditor tercatat di git, jadi Auditor tidak perlu menanyakan ulang ke Amal untuk butir tampilan.
- **Keadaan sesi Auditor** ([Terverifikasi] lewat `get_session`, 22 Okt ~02:00 UTC): terhubung, status `need_input`,
  menunggu persetujuan Amal untuk `add_repo` `reconciler/kenalicalon` (read-only) agar bisa memeriksa handoff dan situsnya.
  Run #3 (push `f0a10af`) juga `success`.

## 9. Eksekusi arahan Auditor (22 Okt 2026, `AUDIT-HANDOFF-2026-10-22-auditor.md`)

Dasar: instruksi diperiksa di git (commit `9c86559`), konsisten dengan `CLAUDE.md`, tidak menyentuh privasi, pipeline, atau
penghapusan data. Izin Amal untuk perubahan tampilan sudah tercatat (bagian 1). Dua push sesuai arahan (6.1).

### 9.1 Push A (`1d9f403`): kontras kicker + klaim UI. **Tampilan berubah.**

| Butir Auditor | Perubahan | Bukti ([Terverifikasi], lokal) |
|---|---|---|
| 4 Kontras kicker | `.band .kicker` memakai token `--band-kicker: #F3DBBC` (hero tetap amber, sudah lolos) | axe sebelum: **52 pelanggaran** di 72 audit (semua `color-contrast` pada `.kicker`); sesudah: **0 pelanggaran, 0 "perlu cek"**. 72 audit = beranda + 8 sesi x 320/430 x terang, gelap, `data-theme` gelap manual, `data-theme` terang manual. Cadangan `#F6E4CD` tidak dipakai. Perbandingan piksel halaman sesi (9 screenshot): selisih hanya di baris kicker |
| 5 "60-90 menit" | Label jadi "perkiraan menit per sesi", angka tetap | Uji label lulus |
| 5 "18-28 pertanyaan" | Jadi **16-28** | Rentang dihitung dari `PANDUAN_DATA` (7 hari x 3 peran) = 16-28; UI = data lulus; jumlah "N pertanyaan." yang tampil di UI = data untuk 21 kombinasi hari/peran lulus |
| 5 "sumber eksternal" | Kalimat dipertahankan | Dicatat: **pernyataan pemilik, sumber tidak disebut, tidak diverifikasi** |
| 6.1 `lastmod` sitemap | Tidak diubah | Sudah `2026-10-22` (hari yang sama) |

- **Reproduksi gagal dulu:** skrip uji baru dijalankan pada versi sebelum perubahan: 52 pelanggaran axe dan 2 cek klaim
  gagal (UI "18-28" vs data 16-28; label tanpa "perkiraan"). Sesudah perubahan: 0 pelanggaran, semua cek lulus.
- **Tinggi** (beranda, terang): hero 491,2 / 492,66 / 514,28 px di 320/375/430, **sama** sebelum dan sesudah. Tinggi halaman
  **+18 px (320), +17 px (375), 0 (430)**: label stat yang lebih panjang membungkus satu baris lagi di kartu ketiga.
  Arahan memperkirakan "tata letak sama"; selisih ini kecil, tidak dikoreksi, dilaporkan di sini.
- **Cek lain:** 18/18 cek lulus; 0 permintaan jaringan luar; 0 error konsol; tanpa scroll horizontal 320/375/430.
- **Run Actions #6** (push `1d9f403`): `success`; log runner: 21 pengecekan OK (beranda + penanda, berkas publik, font,
  berkas internal 404 termasuk kedua `AUDIT-HANDOFF`, penjaga klaim, 6 aset yang dirujuk).
- **Belum terbukti:** tampilan live di perangkat nyata (aturan 11); isi situs live hanya terbukti lewat log (egress diblokir).
- `scripts/test_site.js` diperluas (8 sesi, 4 mode tema, `incomplete` axe, uji klaim vs data, metrik tinggi, `KC_ONLY`,
  `KC_BASELINE`); `CLAUDE.md` bagian khusus repo (Keputusan terbuka, jumlah pertanyaan, garis dasar uji) diperbarui.

### 9.2 Push B (`b0d8ce7`): akordeon "Tentang", rename blok in-page, hapus nav footer. **Tampilan berubah.**

| Butir spesifikasi (Auditor bagian 3) | Hasil ([Terverifikasi], lokal, kecuali disebut lain) |
|---|---|
| Tombol berlabel persis "Tentang", tertutup default, `aria-expanded` dan `aria-controls` | Ya. Uji Tentang **111/111 lulus** (beranda, Hari 1, penutup x 320/375/430) |
| Menutup: klik di luar, Esc (fokus kembali ke tombol), klik tombol | Ya, plus menutup saat pindah halaman. Esc juga bila fokus ada di dalam panel |
| Isi: "Dibuat oleh @amalwoodworking" + "Proyek lain" (Jadwal Kajian, Catatan Kajian, Bikin CV Taaruf) | Dirender dari konstanta `ABOUT`; label, URL, urutan = Daftar resmi; 1 Instagram + 3 proyek; semua `target="_blank" rel="noopener noreferrer"`; tanpa tautan GitHub; tautan proyek di luar panel = 0 |
| Eyebrow in-page jadi "Untuk siapa"; cek anchor `#tentang` | Eyebrow dan id jadi `#untuk-siapa`; anchor `#tentang` dihapus. **[Kesimpulan sendiri]** tidak ada rujukan lain di repo (grep); tautan luar lama ke `#tentang`, bila ada, hanya menggulir ke atas |
| Hapus label dan nav footer "Proyek lain" | Ya. Baris merek (dengan Instagram) dan credit tetap |
| Tinggi sebelum = sesudah (panel tertutup, 320/375/430) | Hero, tinggi di atas footer, topbar, pita, dan halaman sesi (Hari 1) **sama persis** dengan baseline versi A. Tinggi dokumen beranda **-124 / -124 / -94 px** karena footer lebih pendek (nav dihapus), sesuai arahan |
| axe 0 pelanggaran dengan panel terbuka (320/430, terang/gelap, manual) | **0 pelanggaran** di 40 audit panel terbuka dan 112 audit total. Lihat "perlu cek" di bawah |
| Tanpa permintaan jaringan baru; kunci `localStorage` lain | 0 permintaan luar; kunci proyek lain tidak tersentuh |

- **Penempatan dan alasan.** Beranda: pojok kanan atas hero (di dalam `.hero-in`, `position:absolute`, 8 px dari atas, 16 px dari
  kanan). Tampilan sesi: pojok kanan atas pita warna, lewat slot setinggi nol di antara topbar dan pita (panel harus di luar
  `overflow:hidden` milik pita). **Bukan di topbar sesi:** terukur di 320 px, kolom tengah topbar 141 px dengan teks
  "Hari 1 dari 7" 80 px; tombol 99 px sebagai kolom ke-4 menyisakan 32 px, jadi teks membungkus dan topbar bertambah tinggi.
  Tombol tidak menimpa teks (diuji dengan rect teks per baris: kicker, titik hari, judul). Perbandingan piksel A vs B di 9
  screenshot sesi dan hero beranda: selisih **hanya kotak tombol** (99 x 36 px, 16 px dari tepi kanan).
- **"Perlu cek" axe saat panel terbuka:** 36 dari 40 audit panel terbuka memuat `color-contrast` "perlu cek", seluruhnya
  dengan alasan axe `bgOverlap` (teks di bawah panel tertutup panelnya sendiri, jadi latarnya tak bisa dihitung). Dalam keadaan
  **tertutup**: 72 audit, 0 pelanggaran, **0 "perlu cek"**; teks panel sendiri lolos. **[Kesimpulan sendiri]** ini sifat bawaan
  overlay, bukan soal warna kicker, jadi cadangan `#F6E4CD` tidak dipakai dan tidak ada perbaikan yang masuk akal. Auditor
  silakan menilai.
- **Run Actions:** #7 (docs A) dan #8 (push B `b0d8ce7`) `success`; log runner #8: seluruh pengecekan OK (berkas publik,
  font, berkas internal 404, penjaga klaim, 6 aset yang dirujuk).
- **Belum terbukti:** tampilan di perangkat nyata (sentuh, iOS Safari, safe-area); pembaca layar (VoiceOver/TalkBack) dan
  urutan Tab tidak diuji (hanya axe, Esc, dan fokus); isi situs live hanya terbukti lewat log (egress diblokir).
- **Uji:** suite penuh 139/139 cek lulus; 0 permintaan jaringan luar; 0 error konsol. Skrip uji sempat gagal pada 4 jenis cek
  karena **kesalahan skrip saya sendiri** (membaca `innerText` yang terkena `text-transform: uppercase`; membandingkan kotak
  blok selebar kolom, bukan teks yang tampak). Situs tidak berubah; skrip diperbaiki sebelum push.

### 9.3 Untuk repo lain (usulan; Auditor yang menyalurkan)

1. **Panel "Tentang" dan axe:** audit axe dengan panel terbuka memberi "perlu cek" `color-contrast` (alasan `bgOverlap`) pada
   teks yang tertutup panel. Normal untuk overlay; patokannya audit dalam keadaan tertutup (0 pelanggaran, 0 "perlu cek"). Jangan
   mengubah warna hanya untuk menghilangkannya.
2. **Pola uji yang terbukti di sini** (opsional): rect teks per baris untuk uji "tombol tidak menimpa teks"; perbandingan
   tinggi sebelum/sesudah lewat baseline (`KC_ONLY=metrics`, `KC_BASELINE`) di `scripts/test_site.js`.

## 10. Eksekusi instruksi Auditor 25 Okt 2026 (`AUDIT-HANDOFF-2026-10-25-auditor.md` bagian 8, commit `e2706f0`)

### 10.1 Dasar dan status

- Instruksi diperiksa di git sebelum dieksekusi: Tahap A (ubah teks, id tetap) tidak menghapus apa pun, jadi dieksekusi dari
  instruksi. **Tahap B (pensiun 10 id) = penghapusan data**, menunggu konfirmasi Amal di chat PIC (aturan lintas-repo butir 2).
- **[Keputusan Amal]** 25 Okt 2026 (chat PIC): "Silakan eksekusi sesuai perintah auditor". **[Kesimpulan sendiri]** PIC
  menafsirkannya sebagai **Tahap A**. Tahap B **tidak dianggap tercakup**: pesan itu tidak menyebut id, dan Auditor (8.6) meminta
  daftar 8.3 ditampilkan ke Amal dulu. PIC sudah menampilkan daftar itu di chat dan menunggu jawaban.

### 10.2 Tahap A (`11ea855`): teks akhir 7 pertanyaan. **Teks pertanyaan berubah.**

Teks akhir = usulan Auditor 8.2 **apa adanya** (tidak diperhalus); diambil terskrip dari tabel 8.2, dan teks "sekarang" di tabel
cocok persis dengan `index.html` sebelum perubahan.

| id | Teks akhir | Jenis |
|---|---|---|
| d1q1 | Bagaimana kamu menyikapi kelebihan dan kekuranganmu? | terbuka |
| d2q8 | Selain ortu, siapa tempatmu meminta pendapat (teman, guru, ustadz, murabbi), dan bagaimana pandanganmu tentang mereka? | terbuka |
| d2q13 | Adakah penyakit keturunan dalam keluarga? | ya/tidak + alasan |
| d2q15 | Pernahkah kamu bertunangan atau berpacaran, dan seperti apa interaksimu dengan lawan jenis selama ini? Bagaimana pendapatmu tentang pacaran? | terbuka |
| d2q17 | Bagaimana hubunganmu dengan ortu dan saudara? Apa yang paling berkesan dari ibu dan bapakmu? | terbuka |
| d3q14 | Berapa waktu ideal dari ta'aruf menuju pernikahan? | terbuka |
| d5q15 | Bagaimana pandanganmu tentang hutang dalam rumah tangga? | **ya/tidak menjadi terbuka (`k:"o"`)** |

### 10.3 Hasil terhadap syarat 8.5 ([Terverifikasi], lokal, kecuali disebut lain)

| Butir 8.5 | Hasil |
|---|---|
| 2 Cek data | JSON valid; id unik; **174** pertanyaan; yang berubah **persis 7 id**; id hilang 0; hanya `k` d5q15 yang berubah; `g` tetap. Teks 20 id dilindungi + 7 "Pertahankan" **identik** dengan `HEAD` sebelum perubahan (sha256 `d57fdac0…`, kini dijaga uji). Kata rujukan: hanya d5q17 (merujuk d5q16, masih ada di Tahap A) dan d7q8 (merujuk d7q7); d2q15 tidak lagi memuat "sebelumnya" |
| 3 Angka UI | "16-28" dan 7 sesi tidak berubah; uji `claims` lulus (4 cek). Angka "174" tidak muncul di `index.html` maupun `CLAUDE.md` |
| 4 Jawaban lama | `localStorage` dummy (d1q1, d2q13 hanya `yn`, d5q14, d5q15 `{yn,t}`, d5q16, d2q27, id yatim d9q99): halaman termuat tanpa galat konsol; kartu "done" dan progres cocok; d5q15 menampilkan `t` tanpa tombol Ya/Tidak; "Salin jawaban" memuat d5q15 **tanpa** awalan "Ya."; `yn` saja pada d5q15 **tidak** dihitung terjawab, pada d2q13 tetap dihitung; "Hapus semua jawaban" bersih. 9 cek `legacy` lulus. **Pada versi lama (`HEAD`) 4 dari cek itu gagal**, jadi uji memang menangkap perilakunya |
| 5 Uji lengkap | **154/154 cek lulus**; axe **0 pelanggaran** di 112 audit (tertutup 72 audit tanpa "perlu cek"; 36 "perlu cek" `bgOverlap` hanya saat panel terbuka, sama seperti sebelumnya); 0 permintaan jaringan luar; 0 error konsol. Tinggi: beranda (hero, atas-footer, dokumen) **sama persis** dengan baseline; topbar 56 px dan pita sesi sama; tinggi halaman Hari 1 **-51 / -77 / -51 px** (320/375/430) karena teks d1q1 lebih pendek. Catatan: "metrik tinggi header 44 px" di instruksi milik repo lain; di sini topbar 56 px dan tidak berubah |
| Butir 11 | **Teks pertanyaan berubah**; tanpa perubahan CSS atau struktur |
| Run | Actions #14 (push `11ea855`): `success`; log runner: pengecekan OK (berkas publik, font, 5 berkas internal 404 termasuk ketiga `AUDIT-HANDOFF`, penjaga klaim, 6 aset yang dirujuk) |

### 10.4 Tambahan dan penyimpangan (butir 3 aturan lintas-repo)

- **Kode JS kecil (tidak disebut eksplisit di instruksi):** peta `KIND`; `answered()` dan `buildText()` memakai `yn` hanya untuk
  pertanyaan berjenis ya/tidak. Alasan: instruksi menyatakan "`yn` diabaikan" untuk d5q15; tanpa kode ini jawaban `yn` lama
  dihitung terjawab padahal tak tampak, dan "Salin jawaban" memuat "Ya." yang tak lagi relevan. **[Kesimpulan sendiri]**
  perubahannya sempit dan diuji (3 cek). Mohon Auditor menilai.
- **Skrip uji:** penjaga data permanen (`PROTECTED_20`, `KEEP_7`, `SHA_27`, teks akhir, `TOTAL`, `RETIRED`) dan uji jawaban lama
  ditambahkan; cek tinggi halaman sesi menjadi informasional (teks pertanyaan memang boleh mengubah tinggi).

### 10.5 Tahap B (`e1e529f`): 10 id pensiun. **Penghapusan data; teks pertanyaan berubah.**

- **Konfirmasi:** **[Keputusan Amal]** 25 Okt 2026 (chat PIC): **"Setuju semua 10"**, sesudah PIC menampilkan 8.3 (id, teks, dampak,
  keyakinan Auditor). Daftar yang dieksekusi dicocokkan terskrip dengan daftar yang disetujui Amal dan dengan tabel 8.3; teks tiap
  pertanyaan yang dihapus dicocokkan persis dengan `index.html` sebelum dihapus.
- **Id pensiun (tidak dipakai ulang):** d1q2, d1q3, d1q5, d1q21, d2q22, d2q25, d2q27, d2q28, d3q19, d5q16. Total **164**.
  Tidak ada kategori kosong: "Gaya Hidup & Sosial" 7 menjadi 3; "Diri Sendiri" 11 menjadi 8; "Agama & Values: Keyakinan dan Ibadah"
  13 menjadi 12; "Kesiapan & Rencana Pernikahan" 11 menjadi 10; "Keuangan" 18 menjadi 17.
- **d5q17** (id dan jenis ya/tidak tetap): "Bersediakah jika pasangan punya kewajiban membiayai ortu atau saudaranya (cicilan, biaya
  sekolah)?" (teks usulan 8.3 apa adanya).
- **Jawaban lama pada 10 id:** dibiarkan di `localStorage` (tidak dimigrasi, tidak ada pembersihan otomatis); tidak tampil, tidak ikut
  "Salin jawaban"; "Hapus semua jawaban" membersihkannya. Semuanya diuji (data dummy).
- **Kelalaian saya di Tahap A:** `sitemap.xml` `lastmod` tidak diperbarui saat teks berubah (tetap 2026-10-22). Dikoreksi di Tahap B
  (2026-10-25).

| Butir 8.5 | Hasil ([Terverifikasi], lokal, kecuali disebut lain) |
|---|---|
| 2 Cek data | JSON valid; id unik; **164**; id hilang **persis 10**; yang berubah selain itu **hanya d5q17**; judul sesi, fase, dan penutup tidak berubah; teks 20 dilindungi + 7 "Pertahankan" identik (sha256 `d57fdac0…`). Kata rujukan: tersisa hanya d7q8 (merujuk d7q7); d5q17 baru tidak lagi memakai "tersebut" |
| 3 Angka UI | "16-28" dan 7 sesi tidak berubah. Jumlah per sesi (min-maks lintas peran) = hitungan Auditor: H1 20, H2 24, H3 20-21, H4 25-27, H5 18-22, H6 16-18, H7 24-28 (kini diuji) |
| 4 Jawaban lama | Jawaban d5q16 (Hari 5) dan d2q27 (Hari 2) pada `localStorage`: halaman termuat tanpa galat; kartu "done" dan progres tidak menghitungnya; "Salin jawaban" tidak memuatnya dan tetap memuat id selamat (d2q8, d5q14, d5q15); data lama tetap di `localStorage` (juga id yatim); "Hapus semua jawaban" membersihkan semuanya. Pada versi sebelum Tahap B, 8 cek ini gagal di titik yang diharapkan |
| 5 Uji lengkap | **157/157 cek lulus**; axe **0 pelanggaran** di 112 audit (tertutup 72 audit tanpa "perlu cek"; 36 "perlu cek" `bgOverlap` hanya saat panel terbuka, tidak berubah); 0 permintaan jaringan luar; 0 error konsol. Tinggi: beranda (hero, atas-footer, dokumen) **sama persis**; topbar 56 px dan pita sesi sama; halaman Hari 1 **-575 / -549 / -523 px** (320/375/430) karena 4 pertanyaan dipensiunkan |
| Butir 11 | **Teks pertanyaan berubah**; tanpa perubahan CSS atau struktur |
| Run | Actions #17 (push `e1e529f`): `success`; log runner dibaca: seluruh pengecekan OK (berkas publik, font, 5 berkas internal 404, penjaga klaim, 6 aset yang dirujuk) |

- **Belum terbukti:** tampilan di perangkat nyata; efek pada pengguna yang sudah mengisi (jumlah tidak terukur, tanpa analitik).
- **Untuk verifikasi Auditor (8.7):** id hilang persis 10; 7 teks Tahap A; teks d5q17; 27 teks terlindungi sama; total 164; run `success`;
  `CLAUDE.md` bagian "Mengubah pertanyaan" memuat daftar id pensiun dan aturan "tidak dipakai ulang".
- **Untuk repo lain:** tidak ada temuan baru. Catatan simetris Auditor (25 kolom CV pemegang topik) menjadi urusan repo `bikin-cv-taaruf`.
