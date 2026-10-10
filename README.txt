CBT MANAJEMEN PERKANTORAN — PETUNJUK

File:
- index.html : struktur halaman
- style.css  : desain dan tampilan responsif
- script.js  : 20 soal, navigasi, penilaian, review, dan peringatan tab

Cara menjalankan:
1. Ekstrak ZIP ke satu folder.
2. Buka index.html menggunakan browser modern (Chrome, Edge, Firefox).
3. Tidak perlu database, server, atau instalasi. Koneksi internet hanya digunakan untuk memuat font dari Google Fonts; tanpa internet, website tetap berjalan dengan font cadangan.

Catatan perilaku tab:
Browser tidak menyediakan cara yang andal untuk mendeteksi secara khusus bahwa pengguna membuka tab baru. Implementasi ini memberi peringatan ketika halaman kehilangan fokus atau menjadi tidak terlihat, sehingga perpindah-tab biasa juga dapat memicu peringatan. Audio alarm mungkin dibatasi browser jika kebijakan autoplay tidak mengizinkannya. Karena tidak ada backend, sistem ini cocok untuk latihan/simulasi, bukan pengawasan ujian yang tahan manipulasi.
Penilaian:
- Ada 20 soal, termasuk pilihan tunggal dan pilihan ganda kompleks (checkbox).
- Setiap soal bernilai 5 poin.
- Untuk soal checkbox, jawaban dinilai benar hanya jika semua pilihan benar dipilih dan tidak ada pilihan salah yang dipilih.
- Nilai = jumlah jawaban benar / 20 × 100.
- Data dan nilai hanya disimpan sementara di memori halaman; memuat ulang halaman akan menghapus sesi.
