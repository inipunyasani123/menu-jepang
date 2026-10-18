# Akagane Shokudō · Menu digital (QR menu)

Demo menu digital untuk warung makan Jepang rumahan: satu halaman ringan yang dibuka dari kode QR di meja. Tamu memindai, menyusun nampan, lalu mengirim pesanannya lewat WhatsApp bersama nomor meja. Akagane Shokudō adalah warung fiktif.

**Demo live:** https://menu-jepang.pintuweb.id — coba dengan nomor meja: https://menu-jepang.pintuweb.id/?meja=4

> Nama warung, alamat, dan harga semuanya rekaan. Tidak ada data yang dikirim ke server: nampan dan nomor meja disimpan di `localStorage` browser pengunjung, dan tombol WhatsApp membuka WhatsApp tanpa nomor tujuan.

## Yang diperlihatkan

- **Nomor meja dari QR.** Tautan `?meja=4` dibaca sekali lalu disimpan; lencana meja di header dan pesan WhatsApp ikut menyebutnya. Nomor bisa diketik sendiri di nampan.
- **Navigasi kategori di dasar layar.** Di ponsel, enam kategori berikon duduk di bilah lengket bawah dengan scrollspy; bilah nampan muncul tepat di atasnya tanpa tumpang tindih. Di layar lebar, judul tiap bagian ditulis vertikal di sisi kiri dan tautan kategori ada di header.
- **Teishoku hari ini.** Kartu besar di hero dengan diagram SVG komposisi set (nasi, sup miso, lauk utama, acar, ocha) yang bisa langsung dipilih.
- **Cari dan saring.** Pencarian nama/deskripsi, saringan Favorit, Tanpa gandum, Vegetarian, Pedas; bagian yang kosong disembunyikan.
- **Pilihan per item.** Tingkat pedas ichimi 0–3, porsi mie (+Rp8.000) dan nasi (+Rp5.000), telur ajitama/onsen (+Rp7.000), topping ramen multi-pilih, wasabi, saus; harga tambahan dihitung di lembar pilihan.
- **Nampan ke WhatsApp.** Jumlah per baris, makan di tempat/bungkus, atas nama, catatan, lalu pesan tersusun otomatis (`wa.me/?text=`) atau disalin.
- **Alergen dan catatan dapur.** Lima ikon alergen (gandum, telur, kedelai, ikan, susu) di tiap kartu; catatan dapur (tanpa babi, mirin, sake) di bagian "Sebelum memesan".
- **Jam buka WIB.** Status buka/tutup dihitung di perangkat tamu dalam WIB dan diperbarui tiap menit; Senin tutup ditangani ("buka 11.00 Selasa").
- **Kode QR sungguhan.** Dibuat saat build dengan paket `qrcode` sebagai SVG inline; inilah yang dicetak untuk tiap meja.
- **SEO menu.** JSON-LD `Restaurant` (servesCuisine Japanese) + `Menu` → `MenuSection` → `MenuItem` dengan harga, plus `FAQPage`.

## Identitas visual

- **Huruf:** Shippori Mincho (judul, 500/700) dan Zen Kaku Gothic New (teks, 400/500/700), lewat `next/font`. Aksara Jepang kecil hanya hiasan (`aria-hidden`) dengan font CJK sistem.
- **Warna:** washi `#f4efe6`, kertas `#faf7f1`, sumi `#1b1a19`, tinta `#4a4542`, tembaga `#b1683a` (teks kecil: `#8a4e28`), merah hanko `#b7282e`, lumut `#5f6b4e`, abu `#e6e1d6`.
- **Motif:** noren tiga panel bergelombang di bawah header, hanko merah sebagai logo dan stempel favorit, judul vertikal (`writing-mode`), kartu "nampan lacquer" sumi bergaris dalam tembaga dengan label harga fuda, diagram teishoku, ilustrasi SVG per item (ramen tampak atas, donburi, sushi roll, keranjang agemono, ocha, dan lainnya).

## Struktur

| Berkas | Isi |
| --- | --- |
| `lib/data.js` | Profil warung, jam buka, 6 kategori, 30 item, opsi, FAQ, catatan dapur, alergen |
| `lib/format.js` | Rupiah, status buka WIB |
| `lib/nampan.js` | Nampan, nomor meja, cara makan di `localStorage` (`akagane.*.v1`), opsi multi-pilih |
| `components/Menu.js` | Cari, saring, kartu nampan lacquer per kategori, lembar pilihan |
| `components/Nampan.js` | Bilah nampan, lembar nampan, pesan WhatsApp |
| `components/KategoriNav.js` | Bilah kategori bawah (ponsel) dan tautan header (desktop) dengan scrollspy |
| `components/Noren.js`, `Hanko.js` | Motif noren dan hanko |
| `components/Teishoku.js`, `Ilustrasi.js`, `Alergen.js` | Diagram teishoku, ilustrasi item, ikon alergen |
| `components/QR.js` | Kode QR SVG dari `qrcode` |

Satu rute (`/`), halaman 404 bergaya, `sitemap.xml`, `robots.txt`, Open Graph, dan ikon SVG.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000/?meja=4.

---

Dibuat oleh [PintuWeb](https://www.pintuweb.id), jasa pembuatan website.
