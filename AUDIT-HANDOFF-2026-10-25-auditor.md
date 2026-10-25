# Instruksi Auditor, 25 Okt 2026: komparasi pertanyaan Kenali Calon vs Bikin CV Taaruf (hanya bahan keputusan)

Dari: sesi "Auditor Project". Untuk: sesi kerja (PIC) `kenalicalon`. Penanda: **[Amal]**, **[Terverifikasi]**, **[Auditor]**.

## 1. Dasar

- **[Amal, lewat laporan PIC `bikin-cv-taaruf`]** Amal meminta komparasi pertanyaan dua proyek karena pengguna memakai keduanya berurutan (CV dulu, lalu Kenali Calon) dan keduanya tidak boleh tumpang tindih.
- Komparasi lengkap (sisi CV, 108 kolom) ada di repo `bikin-cv-taaruf`, berkas `AUDIT-HANDOFF-2026-10-25-auditor.md`. Berkas ini memuat sisi Kenali Calon agar PIC repo ini bisa membacanya tanpa akses ke repo itu.
- **Tidak ada perubahan yang diminta sekarang.** Perubahan pertanyaan menunggu keputusan Amal di chat PIC. Aturan `CLAUDE.md` tetap: jangan mengubah atau menghapus `id` pertanyaan yang sudah ada.

## 2. Ringkasan [Terverifikasi dari pemetaan]

| | Jumlah |
|---|---|
| Pertanyaan Kenali Calon (170 + 4 penutup) | 174 |
| Mengulang kolom CV (**sama**) | 44 (25%) |
| Melengkapi kolom CV (topik sama, sudut beda) | 16 (9%) |
| Tanpa padanan di CV | 114 (66%) |
| Bertentangan dengan CV | 0 |

| Sesi | Pertanyaan | Sama | Melengkapi | Tanpa padanan |
|---|---|---|---|---|
| H1 Mengenal Diri (Bagian 1) | 24 | 6 | 2 | 16 |
| H2 Mengenal Diri (Bagian 2) | 28 | 9 | 5 | 14 |
| H3 Menuju Pernikahan | 22 | 12 | 2 | 8 |
| H4 Kehidupan Pernikahan (Bagian 1) | 27 | 4 | 2 | 21 |
| H5 Kehidupan Pernikahan (Bagian 2) | 23 | 7 | 3 | 13 |
| H6 Kehidupan Pernikahan (Bagian 3) | 18 | 4 | 2 | 12 |
| H7 Memiliki Anak | 28 | 2 | 0 | 26 |
| Penutup | 4 | 0 | 0 | 4 |

## 3. Opsi untuk sisi Kenali Calon (keputusan Amal)

- **A.** Tambah catatan tetap pada pertanyaan "sama": "Sudah kamu tulis di CV? Lewati bila sama." Hanya teks UI; tidak menyentuh `id` atau penyimpanan.
- **B (rekomendasi Auditor).** Ubah teks pertanyaan "sama" dari fakta menjadi lanjutan: "Bila sudah kamu tulis di CV, di sini ceritakan alasan dan contohnya." **`id` tetap**, jadi jawaban tersimpan tidak yatim; jawaban lama tetap terbaca walau pertanyaannya berubah arah (catat ini sebagai perubahan perilaku). Tanpa berbagi data antar proyek.
- **C.** (sisi CV, bukan repo ini) merampingkan CV; bila dipilih, sebagian pertanyaan Kenali Calon di bawah menjadi satu-satunya tempat topiknya.
- Syarat tampilan sama seperti sebelumnya: uji axe, tinggi, jaringan luar; sebut "tampilan berubah" (butir 11).

## 4. Pertanyaan Kenali Calon yang punya padanan di CV [Terverifikasi dari pemetaan; penilaian Auditor]

| ID | Sesi | Pertanyaan | Hubungan | Kolom CV |
|---|---|---|---|---|
| d1q1 | H1 | Deskripsikan dirimu: karakter, kelebihan, dan kekurangan (misalnya 10 hal positif… | sama | G.01, G.03, G.04 |
| d1q2 | H1 | Sifat apa yang kamu sukai dari diri sendiri? | sama | G.05 |
| d1q3 | H1 | Apa hal yang paling kamu sukai dan paling tidak kamu sukai? | sama | G.05 |
| d1q5 | H1 | Siapa tokoh yang menginspirasimu? Kenapa? | sama | G.08 |
| d1q13 | H1 | Apa values atau prinsip hidup yang kamu yakini? | melengkapi | G.02, K.04 |
| d1q21 | H1 | Amalan atau praktik ibadah harian apa yang rutin kamu jalankan (shalat, tilawah,… | sama | I.01, I.02, I.04, I.06, I.03, I.07 |
| d1q22 | H1 | Seberapa penting interaksimu dengan Qur'an? Apa yang kamu lakukan untuk membangun… | sama | I.06 |
| d1q24 | H1 | Doa apa yang menjadi favoritmu dan rutin kamu baca? | melengkapi | I.07 |
| d2q5 | H2 | Bagaimana pandanganmu tentang rukun Islam, khususnya haji? | melengkapi | I.09 |
| d2q6 | H2 | Bagaimana pandanganmu tentang umrah? | melengkapi | I.09 |
| d2q7 | H2 | Bagaimana pandanganmu tentang masjid? | melengkapi | I.10 |
| d2q8 | H2 | Kajian, guru, atau manhaj apa yang kamu ikuti? Selain ortu, siapa tempatmu memint… | sama | B.06, I.08 |
| d2q9 | H2 | Bagaimana pandanganmu soal aurat dan batasan interaksi dengan lawan jenis, sebelu… | melengkapi | I.11 |
| d2q11 | H2 | Bagaimana kebiasaan hidup sehatmu (olahraga, pola makan, tidur)? | sama | D.14, D.13 |
| d2q13 | H2 | Adakah riwayat penyakit pribadi atau penyakit keturunan dalam keluarga? | sama | D.08 |
| d2q15 | H2 | Bagaimana riwayat hubunganmu: status sebelumnya (lajang, pernah bertunangan, pern… | sama | B.08, H.11, H.09 |
| d2q17 | H2 | Jelaskan latar belakang keluargamu (ortu masih lengkap atau tidak, hubungan denga… | sama | H.02, H.05, H.13, H.10 |
| d2q20 | H2 | Seperti apa lingkungan kerjamu (suasana, rekan kerja)? | melengkapi | F.02 |
| d2q22 | H2 | Apa hobi dan aktivitas me time yang membuat energimu terisi kembali? | sama | F.09, G.09 |
| d2q25 | H2 | Buku apa (umum maupun agama) yang paling menginspirasi dan kamu rekomendasikan? | sama | G.06 |
| d2q27 | H2 | Apakah kamu merokok? Kenapa memutuskan begitu? | sama | D.12 |
| d2q28 | H2 | Pernahkah kamu mengonsumsi alkohol? | sama | D.12 |
| d3q2 | H3 | Apa tujuan dan rencana hidupmu, termasuk karier, dalam 5–10 tahun ke depan? | sama | L.06, K.05, L.12 |
| d3q3 | H3 | Apa tujuan dan motivasi utamamu menikah? Kenapa sekarang, dan apa yang menyadarka… | sama | K.01 |
| d3q6 | H3 | Seperti apa gambaran keluarga ideal yang ingin kamu bangun? | sama | K.02, J.08 |
| d3q7 | H3 | Apa indikator rumah tangga yang sukses? Pencapaian apa yang ingin diraih bersama… | sama | K.02, K.03, L.11, L.12 |
| d3q8 | H3 | Di luar profesi, kontribusi apa yang ingin kamu berikan kepada masyarakat? | melengkapi | G.11 |
| d3q9 | H3 | Seperti apa pasangan idealmu (fisik dan non-fisik)? Karakter apa yang wajib dimil… | sama | M.02, M.05, M.03 |
| d3q10 | H3 | Non-starters: hal apa yang membuatmu langsung berhenti di tahap perkenalan? | sama | M.01 |
| d3q11 | H3 | Bagaimana sikapmu jika calon pasangan memiliki "ketidaksempurnaan" fisik atau kon… | melengkapi | D.09 |
| d3q12 | H3 | Seberapa siap kamu menikah? Bagaimana persiapan fisik, personal, mental, fiqh, da… | sama | J.01, J.02, J.03, J.04 |
| d3q14 | H3 | Kapan target waktumu menikah? Berapa waktu ideal dari ta'aruf menuju pernikahan? | sama | J.07 |
| d3q15 | H3 | Bagaimana pandanganmu soal mahar? | sama | L.03 |
| d3q16 | H3 | Konsep acara sederhana atau resepsi besar? Siapa yang menanggung biaya? | sama | L.01, L.02 |
| d3q19 | H3 | Apakah ortu sudah merestui rencana menikah dalam waktu dekat? | sama | B.09, J.05 |
| d3q20 | H3 | Adakah harapan atau pesan ortu tentang calon menantu yang ideal? | sama | J.05, M.06 |
| d4q7 | H4 | Bagaimana kamu mengisi waktu luang setelah menikah? | sama | G.09 |
| d4q16 | H4 | Apa saja peran dan tugas ideal suami dan istri menurutmu? | sama | L.05 |
| d4q23 | H4 | Sejauh apa kamu akan bertahan dalam pernikahan? Apa dealbreaker-mu (hal fatal yan… | sama | M.01 |
| d4q24 | H4 | Bagaimana pandanganmu soal poligami? | sama | G.12 |
| d4q25 | H4 | Bagaimana pengamalan syariat dalam keluarga yang akan kamu bangun? Target ibadah… | melengkapi | K.03, K.04, L.10 |
| d4q27 | H4 | Partisipasi dakwah apa yang ingin kamu lakukan? Bagaimana kamu mendorong pasangan… | melengkapi | G.11 |
| d5q5 | H5 | Berapa ekspektasi penghasilan suami per bulan? | sama | F.08 |
| d5q6 | H5 | Berapa kemampuan nafkah bulanan yang bisa kamu berikan? | sama | F.08 |
| d5q9 | H5 | Seperti apa gambaran belanja dan alokasi keuangan rumah tangga? Dikelola digabung… | sama | L.09 |
| d5q13 | H5 | Materi atau aset apa yang pantas diperjuangkan (rumah, kendaraan, pendidikan)? Ap… | melengkapi | K.05 |
| d5q14 | H5 | Apa goals finansialmu untuk diri, keluarga, dan lingkungan? Bagaimana rencana dan… | melengkapi | K.05 |
| d5q15 | H5 | Apakah kamu punya hutang atau cicilan pribadi saat ini? Bagaimana pandanganmu ten… | sama | J.06 |
| d5q16 | H5 | Apakah ada kewajiban membiayai ortu atau saudara (cicilan, biaya sekolah) setelah… | sama | J.09 |
| d5q18 | H5 | Bolehkah sebagian nafkah dialokasikan untuk pembelajaran keluarga (bahasa Arab, t… | melengkapi | L.10 |
| d5q19 | H5 | Bagaimana pandanganmu tentang istri bekerja setelah menikah, termasuk tetap berka… | sama | L.07 |
| d5q22 | H5 | Bagaimana kamu membagi waktu antara kerja dan keluarga? | sama | L.06, F.02 |
| d6q1 | H6 | Bagaimana rutinitas harianmu (jam bangun, tidur, standar kebersihan)? | sama | D.14 |
| d6q2 | H6 | Setelah menikah, ingin tinggal di kota mana? | sama | L.04 |
| d6q3 | H6 | Rumah sendiri, sewa, atau tinggal bersama ortu/mertua? | sama | L.04 |
| d6q4 | H6 | Bagaimana pembagian pekerjaan rumah yang kamu harapkan? | sama | L.05 |
| d6q13 | H6 | Seperti apa batas wajar pakaian dan makeup istri di luar rumah? | melengkapi | I.11 |
| d6q14 | H6 | Seperti apa standar penampilan yang kamu harapkan dari suami di luar rumah? | melengkapi | I.11 |
| d7q5 | H7 | Berapa jumlah anak yang diinginkan, dan berapa jarak usia idealnya? | sama | L.08 |
| d7q23 | H7 | Bagaimana pandanganmu tentang pendidikan formal anak (sekolah umum, sekolah Islam… | sama | L.08 |

## 5. Tanpa padanan di CV (114 pertanyaan)

Tidak ada tindakan. Daftar id: d1q4, d1q6, d1q7, d1q8, d1q9, d1q10, d1q11, d1q12, d1q14, d1q15, d1q16, d1q17, d1q18, d1q19, d1q20, d1q23, d2q1, d2q2, d2q3, d2q4, d2q10, d2q12, d2q14, d2q16, d2q18, d2q19, d2q21, d2q23, d2q24, d2q26, d3q1, d3q4, d3q5, d3q13, d3q17, d3q18, d3q21, d3q22, d4q1, d4q2, d4q3, d4q4, d4q5, d4q6, d4q8, d4q9, d4q10, d4q11, d4q12, d4q13, d4q14, d4q15, d4q17, d4q18, d4q19, d4q20, d4q21, d4q22, d4q26, d5q1, d5q2, d5q3, d5q4, d5q7, d5q8, d5q10, d5q11, d5q12, d5q17, d5q20, d5q21, d5q23, d6q5, d6q6, d6q7, d6q8, d6q9, d6q10, d6q11, d6q12, d6q15, d6q16, d6q17, d6q18, d7q1, d7q2, d7q3, d7q4, d7q6, d7q7, d7q8, d7q9, d7q10, d7q11, d7q12, d7q13, d7q14, d7q15, d7q16, d7q17, d7q18, d7q19, d7q20, d7q21, d7q22, d7q24, d7q25, d7q26, d7q27, d7q28, p1, p2, p3, p4.

## 6. Batas

Pemetaan berdasarkan teks pertanyaan, bersifat penilaian Auditor (bukan pencocokan kata). Filter peran (suami/istri) dan kolom bersyarat CV mengurangi jumlah yang dilihat satu pengguna. Perubahan apa pun menunggu keputusan Amal.

## 7. Keputusan Amal 25 Okt 2026: opsi C (ramping-kan CV); dampak untuk Kenali Calon

- **[Keputusan Amal]** 25 Okt 2026 (chat Auditor): "Lakukan opsi C". Yang berubah ada di CV (repo `bikin-cv-taaruf`): 20 kolom pandangan dan rencana dihapus dari CV karena topiknya sudah ada di Kenali Calon.
- **Tidak ada perubahan wajib di repo ini.** Tetapi 20 pertanyaan di bawah menjadi **satu-satunya tempat** topiknya. **Jangan menghapus atau mengubah artinya** tanpa koordinasi dengan Auditor (aturan `id` tidak berubah tetap berlaku).

| ID Kenali Calon | Topik (dulu juga ada di CV) | Kolom CV yang dihapus |
|---|---|---|
| d3q2 | Apa tujuan dan rencana hidupmu, termasuk karier, dalam 5–10 tahun ke… | L.06 |
| d3q3 | Apa tujuan dan motivasi utamamu menikah? Kenapa sekarang, dan apa yan… | K.01 |
| d3q6 | Seperti apa gambaran keluarga ideal yang ingin kamu bangun? | K.02 |
| d3q7 | Apa indikator rumah tangga yang sukses? Pencapaian apa yang ingin dir… | K.02 |
| d3q9 | Seperti apa pasangan idealmu (fisik dan non-fisik)? Karakter apa yang… | M.02, M.05 |
| d3q10 | Non-starters: hal apa yang membuatmu langsung berhenti di tahap perke… | M.01 |
| d3q12 | Seberapa siap kamu menikah? Bagaimana persiapan fisik, personal, ment… | J.01, J.02, J.03, J.04 |
| d3q15 | Bagaimana pandanganmu soal mahar? | L.03 |
| d3q16 | Konsep acara sederhana atau resepsi besar? Siapa yang menanggung biay… | L.01, L.02 |
| d4q16 | Apa saja peran dan tugas ideal suami dan istri menurutmu? | L.05 |
| d4q23 | Sejauh apa kamu akan bertahan dalam pernikahan? Apa dealbreaker-mu (h… | M.01 |
| d4q24 | Bagaimana pandanganmu soal poligami? | G.12 |
| d5q9 | Seperti apa gambaran belanja dan alokasi keuangan rumah tangga? Dikel… | L.09 |
| d5q19 | Bagaimana pandanganmu tentang istri bekerja setelah menikah, termasuk… | L.07 |
| d5q22 | Bagaimana kamu membagi waktu antara kerja dan keluarga? | L.06 |
| d6q2 | Setelah menikah, ingin tinggal di kota mana? | L.04 |
| d6q3 | Rumah sendiri, sewa, atau tinggal bersama ortu/mertua? | L.04 |
| d6q4 | Bagaimana pembagian pekerjaan rumah yang kamu harapkan? | L.05 |
| d7q5 | Berapa jumlah anak yang diinginkan, dan berapa jarak usia idealnya? | L.08 |
| d7q23 | Bagaimana pandanganmu tentang pendidikan formal anak (sekolah umum, s… | L.08 |

- Pertanyaan Kenali Calon yang masih mengulang CV turun dari 44 jadi 24 (umumnya fakta dan kebiasaan). Sisanya ditangani di **bagian 8** (Amal 25 Okt 2026: "Ok tolong siapkan perintah eksekusi" atas klasifikasi Hapus 10 / Sederhanakan 7 / Pertahankan 7; Tahap B menunggu konfirmasi Amal di chat PIC).

## 8. Instruksi eksekusi: 24 pertanyaan yang masih mengulang CV (Amal 25 Okt 2026)

### 8.1 Dasar dan status

- **[Keputusan Amal]** 25 Okt 2026 (chat Auditor), setelah Auditor menyajikan klasifikasi: "Ok tolong siapkan perintah eksekusi". Auditor menafsirkan ini sebagai **persetujuan atas klasifikasi apa adanya** (Hapus 10, Sederhanakan 7, Pertahankan 7). Bila Amal ternyata hanya menghendaki sebagian, Amal menyebutnya di chat PIC; Tahap A dan B di bawah sengaja dipisah supaya bisa jalan sendiri-sendiri.
- **[Penilaian Auditor]** Klasifikasi dan teks baru adalah kesimpulan Auditor dari pemetaan bagian 4 plus pembacaan teks lengkap; **bukan** sumber eksternal. Teks baru adalah usulan: PIC boleh memperhalus kata asal maknanya sama, lalu mencatat teks akhir.
- **Pembagian menurut aturan lintas-repo butir 2:** Tahap A (ubah teks, id tetap) tidak menghapus apa pun, jadi boleh langsung dieksekusi dari instruksi ini. **Tahap B (pensiunkan 10 id) = penghapusan data (jawaban lama pada id itu tidak tampil lagi) dan menunggu konfirmasi Amal di chat PIC ini** (teks usulan di 8.6). Kutipan Amal di chat Auditor tidak cukup.
- **Penyimpangan dari `CLAUDE.md` repo ini, sadar:** aturan "jangan menghapus `id`" dikecualikan untuk 10 id di Tahap B atas keputusan Amal. Alasan aturan itu (jawaban yatim) memang dipilih Amal di sini; id tidak dipakai ulang. PIC mencatat pengecualian dan daftar id pensiun di `CLAUDE.md`.

### 8.2 Tahap A: ubah teks 7 pertanyaan (id dan makna dasar tetap)

Hanya potong bagian yang sudah ada di CV. Tidak ada pertanyaan yang hilang, jumlah tetap 174. Kolom CV pemegang topik tetap ada setelah opsi C [Terverifikasi dari inventaris dan 8.1 bikin].

| id | Teks sekarang | Teks baru (usulan) | Jenis | CV pemegang bagian yang dipotong |
|---|---|---|---|---|
| d1q1 | Deskripsikan dirimu: karakter, kelebihan, dan kekurangan (misalnya 10 hal positif dan negatif). Bagaimana kamu menyikapinya? | Bagaimana kamu menyikapi kelebihan dan kekuranganmu? | terbuka | G.01 deskripsi diri, G.03 kelebihan, G.04 kekurangan (semua wajib) |
| d2q8 | Kajian, guru, atau manhaj apa yang kamu ikuti? Selain ortu, siapa tempatmu meminta pendapat (teman, guru, ustadz, murabbi), dan bagaimana pandanganmu tentang mereka? | Selain ortu, siapa tempatmu meminta pendapat (teman, guru, ustadz, murabbi), dan bagaimana pandanganmu tentang mereka? | terbuka | B.06 manhaj, I.08 pengajian rutin |
| d2q13 | Adakah riwayat penyakit pribadi atau penyakit keturunan dalam keluarga? | Adakah penyakit keturunan dalam keluarga? | ya/tidak + alasan | D.08 (hanya penyakit pribadi; penyakit keturunan TIDAK ada di CV) |
| d2q15 | Bagaimana riwayat hubunganmu: status sebelumnya (lajang, pernah bertunangan, pernah menikah, punya anak), pernah berpacaran atau tidak, dan interaksimu dengan lawan jenis selama ini? Bagaimana pendapatmu tentang pacaran? | Pernahkah kamu bertunangan atau berpacaran, dan seperti apa interaksimu dengan lawan jenis selama ini? Bagaimana pendapatmu tentang pacaran? | terbuka | B.08 status pernikahan (Perjaka/Gadis/Duda/Janda), H.11 status anak. Pertunangan TIDAK ada di CV |
| d2q17 | Jelaskan latar belakang keluargamu (ortu masih lengkap atau tidak, hubungan dengan ortu dan saudara). Seperti apa sosok ibu dan bapakmu, dan apa yang paling berkesan dari mereka? | Bagaimana hubunganmu dengan ortu dan saudara? Apa yang paling berkesan dari ibu dan bapakmu? | terbuka | H.02 gambaran ortu, H.05 status ortu, H.13 saudara |
| d3q14 | Kapan target waktumu menikah? Berapa waktu ideal dari ta'aruf menuju pernikahan? | Berapa waktu ideal dari ta'aruf menuju pernikahan? | terbuka | J.07 rencana waktu menikah (wajib) |
| d5q15 | Apakah kamu punya hutang atau cicilan pribadi saat ini? Bagaimana pandanganmu tentang hutang dalam rumah tangga? | Bagaimana pandanganmu tentang hutang dalam rumah tangga? | ya/tidak + alasan **menjadi terbuka (`k:"o"`)** | J.06 tanggungan utang/cicilan |

- **d5q15: `k` berubah dari `"y"` ke `"o"`.** Teks baru bukan pertanyaan ya/tidak. Jawaban lama tetap tersimpan sebagai `{yn, t}`; `t` tetap tampil, `yn` diabaikan. PIC memastikan tidak ada galat membaca jawaban lama (uji: muat `localStorage` dengan jawaban d5q15 bentuk lama).
- **Efek ke jawaban lama (diterima):** tiap id punya jawaban yang ditulis untuk teks panjang. Teks baru adalah himpunan bagian, jadi jawaban lama tetap relevan walau bisa memuat bagian yang kini ditanyakan di CV. Aplikasi baru tayang 22 Okt; jumlah pengguna tidak terukur (tanpa analitik).

### 8.3 Tahap B: pensiunkan 10 id (menunggu konfirmasi Amal di chat PIC)

| id | Teks (hapus) | CV pemegang topik (tetap ada) | Keyakinan Auditor |
|---|---|---|---|
| d1q2 | Sifat apa yang kamu sukai dari diri sendiri? | G.05 (disukai/tidak disukai), G.03 (kelebihan) | sedang |
| d1q3 | Apa hal yang paling kamu sukai dan paling tidak kamu sukai? | G.05 (disukai/tidak disukai) | sedang |
| d1q5 | Siapa tokoh yang menginspirasimu? Kenapa? | G.08 (tokoh idola) | tinggi |
| d1q21 | Amalan atau praktik ibadah harian apa yang rutin kamu jalankan (shalat, tilawah, puasa sunnah, dll.)? | I.01 shalat wajib, I.02 sunnah, I.04 puasa sunnah, I.06 tilawah | tinggi |
| d2q22 | Apa hobi dan aktivitas me time yang membuat energimu terisi kembali? | F.09 hobi, G.09 kegiatan waktu luang | sedang |
| d2q25 | Buku apa (umum maupun agama) yang paling menginspirasi dan kamu rekomendasikan? | G.06 bacaan favorit | tinggi |
| d2q27 | Apakah kamu merokok? Kenapa memutuskan begitu? | D.12 merokok/alkohol/narkoba | tinggi |
| d2q28 | Pernahkah kamu mengonsumsi alkohol? | D.12 merokok/alkohol/narkoba (opsi 'Konsumsi lain') | tinggi |
| d3q19 | Apakah ortu sudah merestui rencana menikah dalam waktu dekat? | B.09 izin/restu ortu, J.05 kesiapan ortu | tinggi |
| d5q16 | Apakah ada kewajiban membiayai ortu atau saudara (cicilan, biaya sekolah) setelah menikah? | J.09 tanggungan nafkah keluarga | tinggi |

**Perubahan lain yang wajib sama-sama dalam push Tahap B:**

- **d5q17** ("Bersediakah jika pasangan punya kewajiban tersebut?") menunjuk "kewajiban tersebut" ke d5q16 yang dihapus. Ganti teks menjadi: **"Bersediakah jika pasangan punya kewajiban membiayai ortu atau saudaranya (cicilan, biaya sekolah)?"** (id dan jenis ya/tidak tetap). [Terverifikasi dari data: satu-satunya rujukan menggantung; dicek dengan menyisir kata "tersebut/itu/tadi/di atas/sebelumnya" pada semua pertanyaan.]
- Hapus 10 objek itu dari `cats[].qs[]` di `window.PANDUAN_DATA`. Tidak ada kategori yang menjadi kosong (terkecil: "Gaya Hidup & Sosial" 7 menjadi 3) [Terverifikasi dari data].
- `CLAUDE.md` bagian "Mengubah pertanyaan": tambah daftar **id pensiun** (10 id di atas, tanggal, dasar keputusan Amal), tegaskan id pensiun **tidak dipakai ulang**, dan ubah kalimat "Jangan mengubah atau menghapus `id`" menjadi mengacu daftar itu.
- **Jawaban lama pada 10 id dibiarkan di `localStorage`** (tidak dimigrasi, kunci tetap `kenalicalon_v1`, tidak ada pembersihan otomatis). Jawaban itu tidak tampil dan tidak ikut "Salin jawaban". "Hapus semua jawaban" tetap membersihkannya. Membersihkannya otomatis = penghapusan data tambahan dan hanya atas keputusan Amal.

### 8.4 Yang tidak boleh disentuh

- **20 pertanyaan di bagian 7** (satu-satunya tempat topik yang dihapus dari CV): d3q2, d3q3, d3q6, d3q7, d3q9, d3q10, d3q12, d3q15, d3q16, d4q16, d4q23, d4q24, d5q9, d5q19, d5q22, d6q2, d6q3, d6q4, d7q5, d7q23. [Terverifikasi: tidak beririsan dengan Tahap A maupun B.]
- **7 pertanyaan "Pertahankan"** (tidak diubah; alasan di bawah) dan 130 pertanyaan lain (174 - 10 - 7 - 7 - 20). Tidak ada pertanyaan baru, tidak ada id berubah selain pensiun 10 id.

| id | Alasan dipertahankan (Penilaian Auditor) |
|---|---|
| d1q22 | CV I.06 hanya mencatat tilawah/hafalan; ini menanyakan kelekatan dan pandangan |
| d2q11 | CV hanya D.13 (halal) dan D.14 (tidur); ini mencakup olahraga dan pola makan sehat |
| d3q20 | Kecocokan dengan M.06 lemah, dan M.06 dihapus dari CV oleh opsi C; ini jadi satu-satunya tempat topiknya |
| d4q7 | Waktu luang SETELAH menikah; CV G.09 menanyakan waktu luang sekarang |
| d5q5 | Ekspektasi penghasilan suami; CV F.08 mencatat penghasilan sendiri |
| d5q6 | Kemampuan nafkah bulanan; CV F.08 mencatat penghasilan, bukan nafkah |
| d6q1 | Rutinitas harian (bangun, tidur, kebersihan); CV D.14 hanya pola tidur |

### 8.5 Syarat uji dan terbit

1. **Dua push terpisah**, risiko rendah dulu (butir 6): push 1 = Tahap A; push 2 = Tahap B (hanya setelah Amal menjawab di chat PIC). Verifikasi run `success` tiap push.
2. **Cek data otomatis (skrip lokal, catat hasilnya):** JSON valid; id unik; setelah Tahap B total **164** pertanyaan; id yang hilang **persis** 10 id di 8.3; teks 20 id bagian 7 dan 7 id "Pertahankan" sama persis dengan sebelum perubahan (bandingkan dengan `git show HEAD:index.html`); tidak ada kata rujukan menggantung ("tersebut/itu/tadi/di atas/sebelumnya") yang rujukannya sudah hilang.
3. **Angka UI:** rentang "16–28 pertanyaan per sesi" **tidak berubah** (dihitung Auditor dari data setelah Tahap B: tetap 16–28 di semua peran; per sesi menjadi H1 20, H2 24, H3 20–21, H4 25–27, H5 18–22, H6 16–18, H7 24–28) [Terverifikasi dari data]. Jumlah sesi tetap 7. `scripts/test_site.js` bagian `claims` harus lulus. Tidak ada angka "174" di `index.html` (dicek Auditor) tetapi PIC memeriksa ulang README/`CLAUDE.md` bila menyebut total.
4. **Jawaban lama:** uji dengan `localStorage` berisi jawaban untuk id pensiun (mis. d2q27) dan id yang diubah (d1q1, d5q15): halaman termuat tanpa galat, progres dan hitungan benar, "Salin jawaban" tidak memuat id pensiun dan tetap memuat jawaban d1q1/d5q15, "Hapus semua jawaban" bekerja. Pakai data dummy.
5. **Uji lengkap** (butir 13 dan 19): `node scripts/test_site.js` (axe 0 pelanggaran, 320/430, terang/gelap), metrik tinggi header 44 px, jaringan luar terblokir. Sebut "teks pertanyaan berubah" (butir 11); tanpa perubahan CSS atau struktur.
6. **Laporan:** catat di `AUDIT-HANDOFF-2026-10-22.md` (atau berkas PIC baru) teks akhir 7 pertanyaan, daftar id pensiun, hasil uji, dan SHA run. Ini termasuk "wajib lapor" (penghapusan id): konfirmasi lewat chat ke Amal **dan** commit.

### 8.6 Konfirmasi di chat PIC (untuk Amal; menyalakan Tahap B)

PIC menampilkan 8.3 ke Amal dalam satu pesan. Teks usulan yang Amal tempel di chat PIC:

> Konfirmasi Amal 25 Okt 2026: saya setuju pensiunkan 10 id ini dari Kenali Calon: d1q2, d1q3, d1q5, d1q21, d2q22, d2q25, d2q27, d2q28, d3q19, d5q16. Saya paham jawaban lama pada 10 id itu tidak tampil lagi, tetapi tetap tersimpan di perangkat pengguna. Jalankan Tahap B di bagian 8 handoff Auditor 25 Okt.

Bila Amal ingin lebih sempit (mis. tanpa d1q2/d1q3/d2q22 yang keyakinannya "sedang"), ikuti jawabannya dan catat.

### 8.7 Verifikasi Auditor setelah selesai

- Auditor membandingkan `index.html` sebelum dan sesudah: id yang hilang persis 10; 7 teks sesuai 8.2 (atau perbaikan yang dicatat PIC); 27 teks yang tidak boleh berubah sama persis; total 164; run `success`; `CLAUDE.md` memuat daftar id pensiun. Hasil dicatat di bagian verifikasi handoff ini.
- Auditor menambah catatan simetris di repo `bikin-cv-taaruf`: 25 kolom CV pemegang topik (daftar di bawah) tidak boleh dihapus tanpa koordinasi, karena sekarang satu-satunya tempat topiknya.

### 8.8 Koreksi atas pemetaan bagian 4 (kesalahan Auditor)

- **d2q13 / D.08:** pemetaan menulis catatan "riwayat penyakit pribadi dan keturunan" sebagai padanan penuh. Setelah label dan placeholder `SCHEMA` dibaca ulang, D.08 hanya "Riwayat penyakit yang pernah / sedang diderita" (pribadi). **Penyakit keturunan tidak ada di CV.** Itu sebabnya d2q13 diklasifikasi Sederhanakan (bagian keturunan dipertahankan), bukan Hapus.
- **d2q15 / B.08:** pilihan B.08 hanya Perjaka/Gadis/Duda/Janda. **Pertunangan tidak ada di CV**, jadi teks baru d2q15 mempertahankannya.
- Kedua koreksi diverifikasi dari `SCHEMA` di `bikin-cv-taaruf/index.html` (Auditor, 25 Okt 2026). Jumlah "24 yang masih mengulang" tidak berubah; hanya isi potongannya.

**Batas:** analisis hanya membandingkan **antar-produk**. Tumpang tindih di dalam Kenali Calon (mis. d1q2 dan d1q3 saling mirip) tidak dianalisis.

**25 kolom CV pemegang topik** (untuk catatan simetris): B.06, B.08, B.09, D.08, D.12, F.09, G.01, G.03, G.04, G.05, G.06, G.08, G.09, H.02, H.05, H.11, I.01, I.02, I.04, I.06, I.08, J.05, J.06, J.07, J.09.

## 9. Verifikasi Auditor atas Tahap A (25 Okt 2026, setelah laporan PIC `AUDIT-HANDOFF-2026-10-22.md` bagian 10)

Penanda: **[Diperiksa Auditor]** dijalankan Auditor sendiri dari git; **[Laporan PIC]** diambil dari laporan PIC, tidak dijalankan ulang.

- **[Diperiksa Auditor]** `PANDUAN_DATA` di `e2706f0` dibanding `HEAD` (`57f5a1a`): total 174 di kedua sisi; himpunan id sama; yang berubah **persis 7 id** (d1q1, d2q8, d2q13, d2q15, d2q17, d3q14, d5q15); teks ketujuhnya **sama persis** dengan tabel 8.2; `g` tidak berubah; `k` hanya d5q15 (`y` menjadi `o`); 20 id bagian 7 dan 7 id "Pertahankan" identik objek per objek; judul sesi dan nama kategori tidak berubah.
- **[Diperiksa Auditor]** Diff kode `index.html` di luar data: tiga baris (peta `KIND`, `answered()`, `buildText()`). **Penyimpangan 10.4 diterima.** Alasan: instruksi 8.2 sendiri menyatakan `yn` d5q15 diabaikan; tanpa kode ini jawaban `yn` lama dihitung terjawab dan terkirim sebagai "Ya." padahal tidak tampak. Perubahannya sempit dan tidak menyentuh id yatim (tidak ada di `KIND`, tidak pernah dilewati). Dicatat sebagai penyimpangan sah (butir 3), tidak perlu dibalik.
- **[Diperiksa Auditor, via API Actions]** Run #14 (`11ea855`) dan #15 (`57f5a1a`) `success`.
- **[Laporan PIC, tidak dijalankan ulang]** 154/154 cek, axe 0 pelanggaran di 112 audit, 0 permintaan jaringan luar, uji jawaban lama. Tampilan berubah (teks pertanyaan); belum dilihat di perangkat nyata.
- **Penafsiran konfirmasi Amal oleh PIC dinilai tepat.** "Silakan eksekusi sesuai perintah auditor" tanpa menyebut id tidak dibaca sebagai Tahap B; daftar 8.3 ditampilkan dulu. Tahap B tetap **belum dikerjakan** dan menunggu jawaban Amal di chat PIC. Saat Tahap B dikerjakan: ikuti 8.3 (termasuk teks d5q17) dan 8.5.
