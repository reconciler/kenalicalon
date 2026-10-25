# Kenali Calon

Panduan ta'aruf statis (satu file `index.html`, tanpa backend): 7 sesi pertanyaan bertahap plus diskusi penutup.
Jawaban disimpan di perangkat (`localStorage`) dan disalin ke clipboard untuk dikirim ke calon pasangan. Live di
**https://reconciler.github.io/kenalicalon/**, di-host GitHub Pages, terbit otomatis tiap push ke `main`.

Asal: artifact claude.ai "Kenali Calon Pasangan" buatan Amal, dipindah ke repo ini 22 Okt 2026. Sesi kerja repo ini
adalah PIC (ditunjuk Amal, 22 Okt 2026) dan melapor ke sesi "Auditor Project" (lihat bagian bawah). Repo ini **keempat**
setelah `catatankajian`, `jadwalkajian`, `bikin-cv-taaruf`; aturan bersama di bawah disalin dari `catatankajian`.

## Struktur

- `index.html` — satu file: CSS, markup, data pertanyaan (`window.PANDUAN_DATA`), dan JS. Tanpa build step; file ini
  sumber kebenaran sejak 22 Okt 2026. Panel "Tentang" dirender dari konstanta `ABOUT` di JS (Instagram pembuat + proyek
  lain = Daftar resmi dikurangi proyek ini, urutan dan label persis); ubah di sana bila Daftar resmi berubah.
- `lib/fonts/` — Poppins latin 400/500/600/700 (woff2) dari paket npm `@fontsource/poppins@5.3.0` (OFL-1.1, lisensi di
  `lib/fonts/OFL.txt`); sha1 tarball `2b0b95ad6d221ca81f884796429b209837954b89` dicocokkan ke registry npm. `index.html`
  tidak memuat apa pun dari luar origin (tanpa Google Fonts/CDN).
- `og-image.png` (2400x1260), `favicon.svg`, `robots.txt`, `sitemap.xml` — dibuat manual (satu URL, tanpa generator).
  Perbarui `lastmod` di `sitemap.xml` saat konten berubah.
- `scripts/test_site.js` — uji lokal (axe-core, fungsi inti, font lokal, jaringan luar diblokir); cara pakai di header
  berkasnya. Tidak tayang.
- `.github/workflows/deploy.yml` — susun `_site/`, terbitkan ke Pages, uji pasca-deploy.

## Berkas yang tayang di situs (folder `_site`)

Workflow menyalin hanya `index.html`, `og-image.png`, `favicon.svg`, `robots.txt`, `sitemap.xml`, dan folder `lib/`.
`CLAUDE.md`, `AUDIT-HANDOFF-*.md`, `COORDINATION-NOTE-*.md`, `scripts/`, `.github/` **tidak tayang**.

- **Menambah berkas/folder situs baru**: tambahkan ke daftar `cp` di workflow; kalau lupa, situs memberi 404.
- **Uji pasca-deploy** (`curl` di runner, pola `catatankajian`): beranda 200 + teks "Kenali Calon Pasangan"; tiap berkas
  langsung di `_site/` 200; sampel sampai 5 berkas **rekursif** per subfolder 200 (font ada di `lib/fonts/`);
  `CLAUDE.md`, `scripts/test_site.js`, semua `AUDIT-HANDOFF-*.md` dan `COORDINATION-NOTE-*.md` 404; **penjaga klaim**
  dari berkas repo: canonical benar, tanpa skrip/stylesheet/gambar/iframe/`url()` dari luar origin, tanpa
  `fetch`/`XMLHttpRequest`/`sendBeacon`/`WebSocket`. **Jangan dilonggarkan supaya hijau**; run merah = selidiki.
  Uji ini tidak menilai tampilan.
- Dua hal ini **tambahan/penyimpangan dari `catatankajian`** (dicatat di `AUDIT-HANDOFF-2026-10-22.md`): sampel rekursif
  dan penjaga klaim.
- GitHub Pages source harus **GitHub Actions**; hanya Amal yang mengubah Settings Pages (aturan lintas-repo 17).

## Mengubah pertanyaan

- Data ada di `window.PANDUAN_DATA`: `phases[]` (4 fase), `days[]` (7 sesi, tiap sesi `cats[]` berisi `qs[]`),
  `reflection[]` (sesi penutup).
- Tiap pertanyaan: `id` (unik: `d{hari}q{nomor}`, `p{n}` untuk penutup), `t` (teks), `k` (`"o"` terbuka, `"y"` ya/tidak +
  alasan), `g` (`""` dijawab berdua, `"s"` khusus calon suami, `"i"` khusus calon istri).
- **Jangan mengubah atau menghapus `id` yang sudah ada**: jawaban pengguna disimpan per `id`, jadi id yang berubah
  membuat jawaban lama yatim. Pertanyaan baru memakai id baru (mis. `d1q25`); nomor tampil dihitung dari urutan.
- **Pembagian isi dengan CV** (keputusan Amal 25 Okt 2026, opsi C; instruksi Auditor: `AUDIT-HANDOFF-2026-10-25-auditor.md`
  bagian 8): 20 pertanyaan adalah satu-satunya tempat topiknya sejak dihapus dari CV: d3q2, d3q3, d3q6, d3q7, d3q9, d3q10,
  d3q12, d3q15, d3q16, d4q16, d4q23, d4q24, d5q9, d5q19, d5q22, d6q2, d6q3, d6q4, d7q5, d7q23. Ditambah 7 "Pertahankan":
  d1q22, d2q11, d3q20, d4q7, d5q5, d5q6, d6q1. **Jangan ubah artinya atau hapus tanpa koordinasi Auditor**;
  `scripts/test_site.js` menjaga teks 27 id itu (`SHA_27`) dan total pertanyaan (`TOTAL`).
- **Tahap A selesai (25 Okt 2026, `11ea855`):** teks 7 pertanyaan dipotong ke bagian yang tidak ada di CV, id tetap: d1q1,
  d2q8, d2q13, d2q15, d2q17, d3q14, d5q15. d5q15 berubah dari ya/tidak menjadi terbuka; jawaban lama `{yn,t}` aman (`t`
  tampil, `yn` diabaikan lewat peta `KIND`: `yn` hanya dihitung untuk pertanyaan berjenis ya/tidak). **Tahap B** (pensiun 10
  id) = penghapusan data, **menunggu konfirmasi Amal di chat PIC**; sebelum itu aturan "jangan menghapus `id`" berlaku penuh.
- Mengubah bentuk data penyimpanan: naikkan versi kunci (`kenalicalon_v2`), tulis migrasi atau catat bahwa jawaban lama
  hilang, dan laporkan ke Auditor.
- Semua teks Bahasa Indonesia, ringkas, bentuk "kamu". Bila jumlah sesi/pertanyaan berubah, perbarui blok "Tentang"
  (7 sesi; "16-28 pertanyaan per sesi" = rentang terkecil-terbesar di semua peran, dihitung dari data; "60-90" =
  perkiraan pembuat artifact, belum divalidasi). `scripts/test_site.js` membandingkan angka di UI dengan `PANDUAN_DATA`,
  jadi ubah teks stat bersama datanya.

## Penyimpanan dan privasi

- Satu kunci `localStorage`: **`kenalicalon_v1`** (`role`, `name`, `ans`). Jangan membaca atau menghapus kunci proyek lain
  (`scripts/test_site.js` menguji ini).
- Tidak ada panggilan jaringan. Klaim UI "Jawaban hanya tersimpan di perangkat ini" hanya benar selama itu; dijaga
  penjaga klaim di `deploy.yml`. "Salin jawaban" memakai clipboard browser; pengguna sendiri yang mengirimnya.
- Repo publik: jangan commit jawaban/data pengguna, tangkapan layar berisi jawaban, atau nama asli. Uji pakai data dummy.

## Uji sebelum push

- Jalankan `scripts/test_site.js` (aturan lintas-repo 13 dan 19): axe di beranda + 8 sesi, 320/430 px, 4 mode (terang,
  gelap, `data-theme` gelap/terang manual); klaim UI vs data; fungsi inti; font lokal; jaringan luar diblokir; metrik
  tinggi. `KC_ONLY=metrics` dan `KC_BASELINE=<hasil.json>` untuk membandingkan tinggi sebelum/sesudah perubahan.
- Garis dasar setelah Tahap A (25 Okt 2026): axe 0 pelanggaran di 112 audit; panel tertutup (72 audit) 0 "perlu cek"; panel
  terbuka (40 audit) 36 "perlu cek" `color-contrast` dengan alasan axe `bgOverlap` (teks di bawah panel tertutup panel,
  sifat overlay, bukan soal warna); 154/154 cek lulus (111 uji Tentang, 6 uji data, 9 uji jawaban lama); 0 permintaan
  jaringan luar; 0 error konsol. Bagian `data` dan `legacy` bisa dijalankan sendiri: `KC_ONLY=data,legacy`.
- Perubahan tampilan: sebut bahwa tampilan berubah (aturan 11); cek visual di perangkat nyata oleh Amal.

## Keputusan terbuka (per 22 Okt 2026; arahan Auditor sudah tercatat di `AUDIT-HANDOFF-2026-10-22-auditor.md`, PIC memperbarui bagian ini saat mengeksekusi)

Semua butir arahan 22 Okt 2026 sudah dieksekusi (push A `1d9f403`, push B `b0d8ce7`). **Sisa yang terbuka:** Tahap B instruksi
25 Okt 2026 (pensiun 10 id, lihat "Mengubah pertanyaan") menunggu konfirmasi Amal di chat PIC.
Belum terbukti: tampilan di perangkat nyata (aturan 11) dan uji pembaca layar/urutan Tab (hanya Esc, fokus, dan axe yang diuji).

1. **Kontras kicker** (`.band .kicker`): **selesai, push A (`1d9f403`, 22 Okt 2026)**. Amber `#E0A458` (2,77:1 sampai 4,79:1
   di 8 warna pita) diganti token `--band-kicker` `#F3DBBC` (minimum 4,52:1). axe 0 pelanggaran dan 0 "perlu cek" di 72
   audit, jadi cadangan `#F6E4CD` tidak dipakai. Hero `.hero .kicker` tetap amber (lolos).
2. **Akordeon "Tentang"** (pola di bawah): **selesai, push B (`b0d8ce7`, 22 Okt 2026)**. Blok in-page kini berjudul "Untuk
   siapa" (`#untuk-siapa`; anchor lama `#tentang` dihapus, tidak ada rujukan lain), footer tanpa label/nav "Proyek lain"
   (baris merek dan credit tetap).
3. **Daftar resmi**: sudah memuat Kenali Calon (Auditor, 22 Okt 2026). Panel di tiga repo lain dikerjakan PIC masing-masing.
4. **Klaim UI** (aturan lintas-repo 8), keputusan Auditor 22 Okt 2026, selesai di push A: "18-28" menjadi **"16-28"**
   (benar di semua peran, dijaga uji dari `PANDUAN_DATA`); "menit per sesi" menjadi **"perkiraan menit per sesi"** (angka
   60-90 tetap, estimasi pembuat artifact). "Pertanyaan dihimpun dari berbagai sumber eksternal, lalu disusun ulang."
   dipertahankan: **pernyataan pemilik, sumber tidak disebut, tidak diverifikasi** (Amal boleh menambah daftar sumber).

## Aturan satu origin dan tautan antarproyek

Keempat situs (`catatankajian`, `jadwalkajian`, `bikin-cv-taaruf`, `kenalicalon`) dilayani dari origin yang sama,
`https://reconciler.github.io`. Path tidak ikut membentuk origin, jadi `localStorage` dipakai bersama. Draf CV di
`bikin-cv-taaruf` (kunci `ctgv1_draft_v1`) dan jawaban di repo ini (kunci `kenalicalon_v1`) memuat data sensitif, maka:

- Antarproyek **hanya tautan biasa**. Jangan berbagi skrip, penyimpanan, `fetch`, iframe, atau parameter pelacak.
- Kunci `localStorage`/`sessionStorage` wajib berawalan unik. Jangan membaca atau menghapus kunci proyek lain.
- Tautan luar `target="_blank" rel="noopener noreferrer"`.

**Pola "Tentang" dan proyek lain** (diminta Amal 30 Sep 2026, direvisi 1 Okt 2026, untuk tiga repo lain): satu akordeon di
header bernama "Tentang", tertutup, menutup dengan klik di luar dan Esc; isinya hanya kredit pembuat (Instagram) dan
Proyek lain; tanpa tautan kode sumber/GitHub dan tanpa deskripsi singkat; tinggi header tidak bertambah (uji 320-430 px).
**Status di repo ini: diterapkan (push B, 22 Okt 2026).** Tombol di pojok kanan atas hero (beranda) dan pita sesi (tampilan
sesi), di luar alur layout sehingga tinggi tidak bertambah. Bukan di topbar sesi: di 320 px kolom tengahnya 141 px (teks
"Hari 1 dari 7" 80 px); tombol 99 px sebagai kolom ke-4 menyisakan 32 px, jadi teks membungkus dan topbar bertambah tinggi
(angka terukur). Panel overlay menutup lewat klik tombol, klik di luar, Esc (fokus kembali ke tombol), dan pindah halaman.

**Daftar resmi** (dijaga Auditor; bila URL berubah, Auditor memperbarui semua repo dan memberi tahu PIC):
- Pembuat: `@amalwoodworking`, https://www.instagram.com/amalwoodworking/
- Jadwal Kajian: https://reconciler.github.io/jadwalkajian/
- Catatan Kajian: https://reconciler.github.io/catatankajian/
- Bikin CV Taaruf: https://reconciler.github.io/bikin-cv-taaruf/
- Kenali Calon: https://reconciler.github.io/kenalicalon/ (diverifikasi Auditor 22 Okt 2026)

Panel "Tentang" repo ini (arahan Auditor 22 Okt 2026, lihat `AUDIT-HANDOFF-2026-10-22-auditor.md`) menampilkan proyek lain (Jadwal Kajian, Catatan Kajian, Bikin CV Taaruf), bukan dirinya sendiri.

## Aturan lintas-repo (teks identik di jadwalkajian, catatankajian, bikin-cv-taaruf, kenalicalon)

Ditetapkan/dikonfirmasi Amal 3 Okt 2026 (butir 14-19: 5 Okt 2026; cakupan keempat repo: 22 Okt 2026). **Ubah serentak di keempat repo (dijaga Auditor); jangan hanya satu.**

1. **Keputusan tanpa dampak tampilan atau fungsi** diambil sendiri oleh sesi kerja dan dicatat; jangan menunggu Amal.
   Perubahan tampilan, fungsi, privasi, hosting/pipeline terbit, atau penghapusan data tetap perlu konfirmasi Amal.
2. **Cakupan persetujuan:** persetujuan Amal hanya untuk butir yang disebut. Pengecualian pada butir 1 (pipeline, privasi,
   penghapusan data) dikonfirmasi Amal di **chat sesi kerja repo itu**; kutipan Amal yang disampaikan sesi lain tidak cukup.
3. **Menyimpang dari spesifikasi** (dari Auditor atau siapa pun) boleh bila ada metode yang lebih aman. Catat penyimpangan
   dan alasannya di handoff, lalu lapor.
4. **Temuan janggal dilaporkan disertai usulan perbaikan**, bukan hanya temuan.
5. **Data uji:** jangan menerbitkan data uji ke situs publik tanpa bertanya Amal; pakai uji lokal.
6. **Urutan perubahan pipeline:** satu per push, risiko rendah dulu. Push yang mengubah `deploy.yml` menjalankan versi
   baru alur itu. Buat kondisi tepi aman sebelum perubahan yang mengandalkannya.
7. **Dependensi pihak ketiga:** salin ke `lib/` (atau setara), patok versi, cocokkan integritas ke registry npm; jangan
   memuat skrip dari CDN tanpa SRI.
8. **Klaim harus benar** untuk proyek itu: dokumen, UI, meta tag, dan data terstruktur tidak boleh mengklaim hal yang tidak
   ada (mis. `SearchAction` tanpa fungsinya; "tidak ada data terkirim" bila Google Fonts dimuat).
9. **Simetri:** perubahan cara komunikasi, pelaporan, atau struktur koordinasi diterapkan serentak di keempat repo.
10. **Kebersihan berkas:** hapus berkas koordinasi yang tidak lagi relevan; pertahankan yang masih atau akan dipakai.
11. **Verifikasi tampilan:** uji otomatis tidak menilai tampilan, dan sesi kerja tidak bisa membuka `reconciler.github.io`.
    Cek visual di perangkat nyata dilakukan Amal; **dianggap tidak bermasalah sampai Amal melapor** (keputusan 5 Okt 2026):
    jangan menahan pekerjaan atau mengulang peringatan, cukup sebut bahwa tampilan berubah.
12. **Kepastian terbit lebih penting daripada kecepatan.**
13. **Aksesibilitas:** untuk perubahan UI, jalankan axe-core di Chromium bila tersedia; laporkan 0 pelanggaran atau daftar
    temuannya.
14. **Konteks kurang:** baca riwayat chat, handoff, dan git dulu; baru sumber eksternal.
15. **Status ragu** (termasuk klaim "sukses" dari jalur otomatis): verifikasi manual sendiri, lalu konfirmasi ke Amal dan
    Auditor lewat chat + git.
16. **Batas buatan:** jangan pasang tanpa dasar platform yang terverifikasi (kecuali keamanan); catat risikonya.
17. **Pembagian kerja:** kerjakan sendiri yang bisa; minta Amal hanya untuk akses yang sesi tak punya. Settings Pages hanya
    Amal yang ubah: PIC siapkan workflow + langkahnya, dan beri jalur kembali satu langkah sebelum mengalihkan pipeline.
18. **Repo publik:** jangan commit data pribadi (isi CV, kontak, kredensial), termasuk di handoff dan kutipan chat.
19. **Praktik uji** (bukan aturan keras): uji deterministik (data beku, jam terkunci); simulasikan skrip workflow lokal
    (jalur sukses + gagal) sebelum push; UI: screenshot 320/375/430 px, font asli, jaringan luar diblokir.

## Preferensi melapor (teks identik di jadwalkajian, catatankajian, bikin-cv-taaruf, kenalicalon)

Berlaku untuk laporan, handoff, dan chat. Ditetapkan Amal 5 Okt 2026.

- **Bahasa:** Indonesia, campur English untuk istilah yang populer (mis. deploy, commit, workflow). **Concise, simpel,
  spesifik**: hemat token dan mudah dipahami Amal.
- Faktual dan formal, tanpa emoji; pakai poin/tabel, bukan paragraf panjang. Jangan memperhalus masalah.
- Tandai mana yang **tervalidasi** (sumber) vs **kesimpulan sendiri**. Jangan mengarang hasil atau angka; bila tak ada
  data, atau alat/akses tak tersedia, katakan.
- Gagal atau keliru (termasuk kesalahan sendiri) disebut terus terang.
- Penjelasan "awam": analogi + tabel kecil, tanpa jargon.
- Akhiri pekerjaan besar dengan "yang perlu diketahui": belum terbukti, perubahan perilaku, kejadian otomatis, keputusan
  yang menunggu.

## Proyek terkait dan sinkronisasi (teks identik di jadwalkajian, catatankajian, bikin-cv-taaruf, kenalicalon)

Ditetapkan Amal 22 Okt 2026 (proyek baru Kenali Calon; Auditor mengorkestrasi). Sesi kerja = PIC repo itu. Sesi bisa
berganti, jadi pegangannya git (`CLAUDE.md` + `AUDIT-HANDOFF-*.md`), bukan ID sesi.

| Proyek | Fungsi | URL | Kunci penyimpanan |
|---|---|---|---|
| Jadwal Kajian | Jadwal kajian Jabodetabek | https://reconciler.github.io/jadwalkajian/ | tidak ada |
| Catatan Kajian | Arsip catatan sesi kajian | https://reconciler.github.io/catatankajian/ | tidak ada |
| Bikin CV Taaruf | Pembuat CV ta'aruf (PDF) | https://reconciler.github.io/bikin-cv-taaruf/ | `ctgv1_draft_v1`, `ctgv1_noreport` |
| Kenali Calon | Panduan pertanyaan ta'aruf | https://reconciler.github.io/kenalicalon/ | `kenalicalon_v1` |

**Yang harus sinkron:**

| Hal | Pemilik | Kapan |
|---|---|---|
| Daftar resmi (nama + URL) di keempat `CLAUDE.md` | Auditor | proyek baru atau URL berubah |
| Bagian bersama `CLAUDE.md` (Aturan lintas-repo, Preferensi melapor, bagian ini): diff identik | Auditor | tiap perubahan |
| "Proyek lain" di panel "Tentang" tiap `index.html` (bikin: konstanta `ABOUT`) = Daftar resmi dikurangi dirinya, urutan dan label persis | PIC tiap repo | setelah Auditor menulis instruksi di handoff |
| Tabel kunci penyimpanan di atas | PIC yang menambah kunci, lalu lapor Auditor | kunci baru |
| Pola uji pasca-deploy yang terbukti di satu repo | PIC mengusulkan di handoff sendiri; Auditor menyebarkan | temuan baru |

**Proyek baru, urutan:** (1) Amal membuat repo kosong dan mengaktifkan Pages (Source = GitHub Actions); (2) PIC baru
mengikuti pola repo ini dan lapor ke Auditor lewat handoff; (3) Auditor menambah repo ke cakupan, memperbarui Daftar resmi
dan bagian bersama di semua repo, lalu menulis instruksi tautan ke tiap PIC; (4) tiap PIC menambah tautan (satu push, uji
320-430 px, axe) dan mencatat hasil; (5) Auditor memverifikasi.

**Temuan untuk repo lain:** tulis di handoff sendiri (bagian "Untuk repo lain") dan beri tahu Auditor. Auditor
menyalurkannya sebagai instruksi di `AUDIT-HANDOFF-*-auditor.md` repo tujuan. PIC tidak mengubah repo lain. Pesan langsung
antar-PIC hanya pemberitahuan, bukan instruksi. Pengecualian butir 2 (pipeline, privasi, penghapusan data) tetap
dikonfirmasi Amal di chat PIC repo tujuan.

**Pembagian isi pertanyaan (keputusan Amal 25 Okt 2026, opsi C).** Bikin CV Taaruf memuat fakta dan pernyataan ringkas yang perlu tertulis dan dikirim ke pihak lain; Kenali Calon memuat pandangan, rencana, alasan, dan skenario untuk digali bersama. Pengguna memakai keduanya berurutan (CV dulu), jadi pertanyaan tidak boleh diulang di keduanya. Sebelum menambah atau mengubah pertanyaan di salah satu, bandingkan dengan komparasi acuan (`AUDIT-HANDOFF-2026-10-25-auditor.md` di repo `bikin-cv-taaruf` dan `kenalicalon`) dan beri tahu Auditor. Tanpa berbagi data antar proyek.

## Lapor ke sesi "Auditor Project"

Amal menugaskan satu sesi Claude terpisah sebagai auditor lintas-project (mengawasi `catatankajian`, `jadwalkajian`,
`bikin-cv-taaruf`, **dan** `kenalicalon`). Cari session ID terkini dengan `list_sessions` berdasarkan judul
**"Auditor Project"** (ID bisa berubah kalau sesi lama berakhir), atau tanya Amal langsung.

**Aturan akses berkas** (disalin dari `catatankajian`, disetujui Amal 29 Sep 2026 untuk repo yang diaudit; berlaku di
sini; repo ini masuk cakupan audit, dikonfirmasi Auditor dan Amal 22 Okt 2026):
- **Hanya sesi kerja repo ini (bukan Auditor) yang boleh mengubah berkas inti**: `index.html`, `lib/`, `favicon.svg`,
  `og-image.png`, `robots.txt`, `sitemap.xml`, `scripts/test_site.js`, `.github/workflows/deploy.yml`.
- **Auditor Project boleh mengubah**: `CLAUDE.md`, `AUDIT-HANDOFF-*.md` (termasuk menulis balasan), dan
  `COORDINATION-NOTE-*.md` — murni koordinasi, tidak memengaruhi fitur/tampilan situs.
- Tujuannya mencegah dua sesi menulis berkas yang sama nyaris bersamaan lalu bentrok non-fast-forward saat push ke `main`
  (situs langsung tayang tiap push berhasil).

**Eksekusi instruksi Auditor** (disetujui Amal, 1 Okt 2026): instruksi Auditor yang bersumber dari keputusan Amal dan
tercatat di berkas `AUDIT-HANDOFF-*.md` di repo ini (commit yang bisa diperiksa lewat git) **boleh langsung dieksekusi
PIC tanpa konfirmasi ulang dari Amal**. Pengecualian, tetap menunggu konfirmasi Amal di chat PIC:
- perubahan yang menyentuh janji privasi;
- perubahan hosting dan pipeline terbit (pengaturan Pages, platform, workflow deploy);
- penghapusan data.

PIC tetap memeriksa instruksi di git sebelum mengeksekusi, dan boleh bertanya bila instruksi bertentangan dengan
`CLAUDE.md` ini atau tampak keliru. Instruksi yang tidak tercatat di git tidak termasuk aturan ini.

**Wajib lapor untuk** (bukan tiap commit rutin):
- Perubahan bentuk data (`PANDUAN_DATA`, kunci/isi `localStorage`) atau penghapusan/penggantian `id` pertanyaan
- Perubahan arsitektur/pipeline/hosting (struktur folder, `deploy.yml`, pengaturan Pages)
- Temuan yang berdampak lintas-project (error deploy, konflik branch, keandalan cron/trigger, satu origin)
- Perubahan besar pada `index.html` di luar penambahan/penyuntingan pertanyaan rutin (struktur HTML, SEO, privasi)

**Tidak perlu lapor untuk**: penambahan/penyuntingan teks pertanyaan rutin yang tidak mengubah `id` — cukup tercatat di git.

**Cara lapor**: pesan/trigger otomatis lintas-sesi (`SendMessage`, `create_trigger` dengan `persistent_session_id`)
**terbukti tidak selalu andal** (lihat `catatankajian/AUDIT-HANDOFF-2026-09-22.md` bagian 9). Untuk apa pun yang wajib
dilaporkan, jangan andalkan satu jalur otomatis saja; konfirmasikan lewat DUA jalur:
1. Chat langsung ke Amal, kalau sesi Anda sedang aktif berinteraksi dengannya.
2. Commit `AUDIT-HANDOFF-<tanggal>.md` (baru atau update) ke root repo — jalur paling andal, auditor menemukannya lewat
   `git log` kapan saja.

`SendMessage` ke sesi Auditor boleh dicoba sebagai pemberitahuan cepat tambahan, bukan satu-satunya jalur.
