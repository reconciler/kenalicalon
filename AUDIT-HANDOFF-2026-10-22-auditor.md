# Balasan Auditor, 22 Okt 2026: repo kenalicalon masuk cakupan; arahan 7a-7e (kenalicalon)

Dari: sesi "Auditor Project". Untuk: sesi kerja (PIC) repo ini. Penanda: **[Keputusan Amal]**, **[Terverifikasi]** (diperiksa
Auditor di git/Actions/hitungan), **[Usulan Auditor]** (kesimpulan Auditor).

## 1. Dasar dan batas

- **[Keputusan Amal]** 22 Okt 2026 (chat Auditor): Kenali Calon adalah proyek resmi keempat dan PIC-nya sudah ditunjuk;
  bagian credit tiap proyek diperbarui dengan tautan ke Kenali Calon; Auditor mengorkestrasi eksekusinya; temuan celah/error
  dieksekusi tanpa menunggu persetujuan Amal; "aturannya masih sama".
- **[Usulan Auditor]** tafsir "aturannya masih sama": butir 1 dan 2 aturan lintas-repo tetap berlaku. Tautan baru (tampilan)
  sudah disetujui Amal lewat keputusan di atas, jadi **tidak perlu konfirmasi ulang**. Pengecualian butir 2 (pipeline/`deploy.yml`,
  janji privasi, penghapusan data) tetap dikonfirmasi Amal **di chat sesi kerja repo ini**; kutipan di atas tidak
  menggantikannya. Gelombang yang tertahan karena itu ditandai **[DITAHAN]**; gelombang lain jalan terus.
- `CLAUDE.md` repo ini sudah diperbarui Auditor (komit yang sama): Daftar resmi memuat Kenali Calon, cakupan "keempat repo",
  dan bagian baru **"Proyek terkait dan sinkronisasi"** (tabel keempat proyek, apa yang harus sinkron, urutan proyek baru,
  jalur temuan untuk repo lain). Baca bagian itu dulu. Jalankan `git pull --rebase origin main` sebelum edit dan sebelum push.
- Tulis hasil di handoff PIC repo ini (bagian baru, gaya `Preferensi melapor`), lalu beri tahu Auditor. Jalur andal = git.

## 2. Jawaban atas permintaan arahan (handoff PIC `AUDIT-HANDOFF-2026-10-22.md` bagian 7)

| Butir | Jawaban Auditor |
|---|---|
| 7a Cakupan | **Ya.** Repo ini masuk cakupan audit; aturan akses berkas berlaku (Auditor: `CLAUDE.md`, `AUDIT-HANDOFF-*.md`, `COORDINATION-NOTE-*.md`; PIC: berkas inti). **[Keputusan Amal]** Amal sudah menunjuk PIC dan menyetujui orkestrasi ini. |
| 7b Akordeon "Tentang" | **Terapkan** (spesifikasi di 3). |
| 7c Kontras kicker | **Eksekusi.** `#F3DBBC` (4). |
| 7d Klaim | Keputusan di 5 (tanpa menunggu Amal). |
| 7e Daftar resmi dan penegasan | Daftar resmi di keempat `CLAUDE.md` sudah diperbarui Auditor. **Penegasan butir 1 dibenarkan:** privasi, pipeline/Pages, dan penghapusan data tetap menunggu Amal di chat PIC. Tafsir PIC atas izin tampilan (bagian 1 handoff PIC) tepat. |

## 3. Akordeon "Tentang" (tampilan; disetujui Amal) **[Usulan Auditor: spesifikasi]**
- Pola: satu tombol berlabel persis **"Tentang"**, panel tertutup secara default, menutup dengan klik di luar dan Esc
  (fokus kembali ke tombol), `aria-expanded` dan `aria-controls`. Isi panel hanya: "Dibuat oleh @amalwoodworking" (Instagram,
  `https://www.instagram.com/amalwoodworking/`) dan grup "Proyek lain" berisi **Jadwal Kajian, Catatan Kajian, Bikin CV Taaruf**
  (URL dan label persis Daftar resmi). Tanpa tautan kode sumber/GitHub, tanpa deskripsi singkat. Tautan luar
  `target="_blank" rel="noopener noreferrer"` (jawaban tetap di tab ini).
- Tempat: halaman depan tidak punya header, jadi PIC memilih penempatan yang **tidak menambah tinggi hero/halaman dan tidak
  menggeser tata letak** (mis. pojok kanan atas). Bila ada elemen puncak yang tampil di tampilan sesi, pasang juga di sana.
  Catat pilihan dan alasannya.
- Ganti eyebrow blok in-page "Tentang" menjadi **"Untuk siapa"** (usulan PIC; cek anchor `#tentang` dan rujukan lain).
- Hapus nav footer "Proyek lain" dan labelnya (aturan pola: proyek lain hanya lewat panel). Baris merek dan baris credit boleh tetap.
- Uji (perluas `scripts/test_site.js`): panel tertutup default; buka/tutup lewat klik, klik luar, Esc; tepat 3 tautan proyek +
  1 Instagram dengan `rel` benar; axe 0 pelanggaran dengan panel terbuka (320/430, terang/gelap); tinggi hero/halaman sebelum
  = sesudah di 320/375/430 (panel tertutup); tidak ada permintaan jaringan baru; kunci `localStorage` lain tidak tersentuh.

## 4. Kontras kicker **[Terverifikasi: hitungan Auditor independen, rumus WCAG, 8 pita terang dan gelap]**
- Hitungan PIC benar: `#E0A458` 2,77:1 sampai 4,79:1, gagal di 7 dari 8 pita (terburuk fase 4 terang `#4E6B30`).
- `#F3DBBC`: minimum **4,52:1** (fase 4 terang), terbaik 7,81:1. Lolos, tetapi margin hanya 0,02. **Terapkan `#F3DBBC`.** Bila axe
  melaporkan pelanggaran atau "perlu cek" pada pita mana pun (dekorasi `.band-art` bertumpuk), pakai cadangan `#F6E4CD`
  (minimum 4,87:1) dan catat. Jalankan axe di 320/430, terang/gelap (termasuk `data-theme` manual).

## 5. Klaim di UI (aturan 8) **[Usulan Auditor; penyimpangan lebih aman dari bertanya, butir 3]**
- "60-90 menit per sesi" adalah estimasi pembuat artifact, bukan hasil ukur. Ubah label menjadi **"perkiraan menit per sesi"**
  (angka tetap). Bukan penghapusan, supaya tata letak sama dan klaimnya benar.
- "18-28 pertanyaan per sesi": benar hanya untuk "Lihat semua"; saat peran dipilih menjadi 16-28 (hitungan PIC). Tampilkan
  rentang yang benar di semua keadaan (mis. **16-28**), dan tambah uji yang menghitung rentang dari `PANDUAN_DATA` lalu
  membandingkannya dengan teks, supaya tidak melenceng saat data berubah.
- "Pertanyaan dihimpun dari berbagai sumber eksternal, lalu disusun ulang.": **pertahankan kata-katanya**. Itu pernyataan asal-usul
  dari pemilik (artifact buatan Amal), bukan klaim fungsi. Auditor tidak dapat memverifikasinya. Catat di handoff sebagai
  "pernyataan pemilik, sumber tidak disebut, tidak diverifikasi". Bila Amal punya daftar sumber, ia dapat menambahkannya; tidak
  memblokir apa pun.

## 6. Urutan dan lain-lain
1. Push A: kontras kicker + klaim (butir 4 dan 5). Push B: akordeon + rename + hapus nav footer (butir 3). Dua push agar mudah
   dibatalkan. Verifikasi run `success` tiap push; perbarui `lastmod` di `sitemap.xml`; sebut "tampilan berubah" (butir 11).
2. Setelah tiap push: perbarui bagian "Keputusan terbuka" dan status "Tentang" di `CLAUDE.md` repo ini (bagian khusus repo ini
   milik PIC; Auditor hanya mengubah bagian bersama dan Daftar resmi). `git pull --rebase origin main` dulu: Auditor baru
   mengubah `CLAUDE.md`.
3. Tinjauan Auditor atas `deploy.yml` repo ini **[Terverifikasi: dibaca penuh]**: sampel rekursif dan penjaga klaim disetujui
   sebagai pola; langkah 4d dan 5 (aset yang dirujuk) akan Auditor sebarkan ke tiga repo lain sebagai gelombang 3 mereka.
   Catatan opsional (pipeline, butuh Amal, tidak mendesak): `on.push` tanpa `paths`, jadi push dokumen saja ikut deploy.
4. Temuan 6.5 PIC (font CDN di `catatankajian`): **dicatat, tidak dikerjakan sekarang** **[Usulan Auditor]**. Klaim privasi repo
   lain sudah dibatasi (bikin menyebut Google Fonts; dua lainnya tidak mengklaim "tanpa data terkirim"); mengganti font mengubah
   tampilan dan menyentuh tiga repo. Buka lagi bila Amal meminta atau klaimnya diperkuat.
5. Temuan 6.4 PIC (Amal membuat repo kosong lebih dulu): sudah masuk "Proyek baru, urutan" di bagian bersama `CLAUDE.md`.

## 7. Lapor
Handoff PIC bagian baru: tabel push A/B, angka uji (axe, tinggi, jaringan), run, penempatan tombol dan alasannya, hal yang
menunggu Amal. Setelah selesai, beri tahu Auditor.

## 8. Verifikasi Auditor atas hasil PIC (22 Okt 2026, sore) **[Terverifikasi: git, Actions, uji ulang Auditor]**

| Butir | Hasil |
|---|---|
| Uji ulang Auditor | `scripts/test_site.js` dijalankan Auditor di salinan lokal komit `7bde62d` (Chromium, jaringan luar diblokir): axe 112 audit, **0 pelanggaran**; 130 cek lulus, 0 gagal; 0 permintaan jaringan luar; 0 error konsol. 36 "perlu cek" `color-contrast` seluruhnya alasan `bgOverlap` dan hanya saat panel terbuka; keadaan tertutup 0. **Penilaian Auditor atas butir yang PIC minta: setuju, jangan ubah warna; cadangan `#F6E4CD` tidak perlu.** |
| Tinggi | Hero 491,2/492,7/514,3 px (320/375/430) **sama** sebelum (`9c86559`) dan sesudah (`7bde62d`), tanpa scroll horizontal. Blok `.stats` +17,5 px di 320/375 karena label "perkiraan menit per sesi" membungkus; dilaporkan ke Amal sebagai perubahan tampilan. |
| Push B (akordeon) | Diff dibaca: `ABOUT.projects` = Jadwal Kajian, Catatan Kajian, Bikin CV Taaruf (label, URL, urutan = Daftar resmi); Instagram benar; Esc mengembalikan fokus; nav footer dihapus; eyebrow "Untuk siapa". Diterima. |
| Run | #6 sampai #9 success. |
| Usulan 9.3 PIC | (1) Patokan axe = keadaan tertutup untuk overlay: **diterima**, disebarkan ke PIC lain lewat catatan ini. (2) Pola uji rect teks per baris dan baseline tinggi: opsional, belum disebarkan. |
| `CLAUDE.md` | Bagian bersama identik di keempat repo setelah perubahan PIC (hash sama). |
