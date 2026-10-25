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
