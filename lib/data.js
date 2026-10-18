// Semua isi menu Akagane Shokudō. Warung ini fiktif: nama, alamat, dan harganya rekaan untuk demo.
// Tidak ada babi, mirin, dan sake di seluruh menu (lihat `catatanDapur`).

export const site = {
  nama: 'Akagane Shokudō',
  slug: 'jepang',
  url: 'https://menu-jepang.pintuweb.id',
  judul: 'Menu Akagane Shokudō: Teishoku, Ramen, Donburi',
  deskripsi:
    'Menu digital Akagane Shokudō, warung Jepang rumahan di Jakarta Selatan: teishoku, ramen, donburi, sushi roll. Tanpa babi, mirin, sake. Pesan via WhatsApp.',
  tagline: 'Masakan rumahan Jepang, dimasak pelan di dapur kecil.',
  alamat: 'Jl. Bangka Raya No. 21, Mampang Prapatan, Jakarta Selatan',
  kota: 'Jakarta Selatan',
  // Jam buka dalam WIB. 0 = Minggu. Senin tutup.
  jam: [{ hari: [2, 3, 4, 5, 6, 0], buka: '11.00', tutup: '22.00' }],
  hariTutup: 'Senin',
  pajak: 'Harga sudah termasuk pajak. Tidak ada biaya layanan.',
  edisi: 'Oktober 2026',
  teishokuHariIni: 'saba-teishoku',
};

export const KUNCI = {
  nampan: 'akagane.nampan.v1',
  meja: 'akagane.meja.v1',
  cara: 'akagane.cara.v1',
};

// Pilihan yang dipakai ulang. `diam: true` = bawaan yang tidak ditulis di ringkasan. `multi: true` = boleh pilih lebih dari satu.
const PEDAS = { id: 'pedas', label: 'Tingkat pedas (ichimi)', pilihan: [{ id: '0', label: 'Tidak pedas', diam: true }, { id: '1', label: 'Ichimi 1 · sedikit' }, { id: '2', label: 'Ichimi 2 · sedang' }, { id: '3', label: 'Ichimi 3 · pedas' }] };
const PEDAS_TANTAN = { id: 'pedas', label: 'Tingkat pedas (ichimi)', pilihan: [{ id: '1', label: 'Ichimi 1 · standar', diam: true }, { id: '2', label: 'Ichimi 2 · sedang' }, { id: '3', label: 'Ichimi 3 · pedas' }] };
const MIE = { id: 'mie', label: 'Porsi mie', pilihan: [{ id: 'biasa', label: 'Biasa 150 g', diam: true }, { id: 'besar', label: 'Besar 220 g', tambah: 8000 }] };
const NASI = { id: 'nasi', label: 'Porsi nasi', pilihan: [{ id: 'biasa', label: 'Biasa', diam: true }, { id: 'besar', label: 'Besar', tambah: 5000 }] };
const AJITAMA = { id: 'ajitama', label: 'Telur ajitama', pilihan: [{ id: 'tanpa', label: 'Tanpa telur', diam: true }, { id: 'satu', label: 'Tambah 1 telur ajitama', tambah: 7000 }] };
const ONSEN = { id: 'onsen', label: 'Telur onsen', pilihan: [{ id: 'tanpa', label: 'Tanpa telur', diam: true }, { id: 'satu', label: 'Tambah telur onsen', tambah: 7000 }] };
const TOPPING = {
  id: 'topping', label: 'Topping tambahan', multi: true,
  pilihan: [
    { id: 'nori', label: 'Nori', tambah: 5000 },
    { id: 'menma', label: 'Menma', tambah: 6000 },
    { id: 'jagung', label: 'Jagung manis', tambah: 5000 },
    { id: 'bokchoy', label: 'Bok choy', tambah: 5000 },
    { id: 'chashu', label: 'Chashu ayam ekstra', tambah: 15000 },
  ],
};
const WASABI = { id: 'wasabi', label: 'Wasabi', pilihan: [{ id: 'ada', label: 'Dengan wasabi', diam: true }, { id: 'tanpa', label: 'Tanpa wasabi' }] };
const SAUS_GORENG = { id: 'saus', label: 'Saus', pilihan: [{ id: 'lemon', label: 'Mayo lemon', diam: true }, { id: 'spicy', label: 'Spicy mayo' }, { id: 'ponzu', label: 'Ponzu' }] };
const SUHU = { id: 'suhu', label: 'Suhu', pilihan: [{ id: 'panas', label: 'Panas', diam: true }, { id: 'dingin', label: 'Dingin' }] };
const MANIS = { id: 'manis', label: 'Tingkat manis', pilihan: [{ id: 'normal', label: 'Manis normal', diam: true }, { id: 'kurang', label: 'Kurang manis' }] };

// `jp` = label hiasan berbahasa Jepang (aria-hidden). `ikon` = ikon kategori di bilah bawah.
export const kategori = [
  { id: 'teishoku', nama: 'Teishoku', ringkas: 'Teishoku', jp: '定食', ikon: 'teishoku', catatan: 'Set lengkap: lauk utama, nasi, sup miso, acar, dan ocha hangat. Nasi bisa ditambah.' },
  { id: 'mie', nama: 'Ramen & Udon', ringkas: 'Mie', jp: '麺', ikon: 'ramen', catatan: 'Kaldu ayam direbus 8 jam. Mie ramen dibuat pagi hari; udon tebal dari tepung gandum.' },
  { id: 'donburi', nama: 'Donburi', ringkas: 'Donburi', jp: '丼', ikon: 'donburi', catatan: 'Semangkuk nasi hangat dengan lauk di atasnya. Datang bersama sup miso kecil.' },
  { id: 'sushi', nama: 'Sushi Roll & Sashimi', ringkas: 'Sushi', jp: '寿司', ikon: 'sushi', catatan: 'Salmon segar datang tiap pagi. Kecap asin kami tamari, tanpa gandum.' },
  { id: 'agemono', nama: 'Agemono & Side', ringkas: 'Gorengan', jp: '揚物', ikon: 'agemono', catatan: 'Digoreng saat dipesan. Satu penggorengan untuk semua gorengan.' },
  { id: 'minuman', nama: 'Minuman & Dessert', ringkas: 'Minum', jp: '飲物', ikon: 'ocha', catatan: 'Ocha isi ulang gratis untuk yang makan di tempat.' },
];

/**
 * Item menu. alergen: gandum | telur | kedelai | ikan | susu. tag: favorit | baru | vegetarian | pedas.
 * ilustrasi: jenis gambar SVG (+ warna aksen). `habis` = tidak bisa dipesan hari ini.
 */
export const menu = [
  // Teishoku
  { id: 'katsu-teishoku', kategori: 'teishoku', nama: 'Chicken Katsu Teishoku', deskripsi: 'Dada ayam berbalut panko, digoreng renyah, saus tonkatsu buatan sendiri, kol iris halus.', harga: 58000, alergen: ['gandum', 'telur', 'kedelai'], tag: ['favorit'], ilustrasi: { jenis: 'teishoku', utama: 'katsu' }, opsi: [NASI] },
  { id: 'saba-teishoku', kategori: 'teishoku', nama: 'Saba Shioyaki Teishoku', deskripsi: 'Ikan saba dipanggang dengan garam laut, parutan lobak, perasan jeruk sudachi.', harga: 62000, alergen: ['ikan', 'kedelai'], ilustrasi: { jenis: 'teishoku', utama: 'saba' }, opsi: [NASI] },
  { id: 'karaage-teishoku', kategori: 'teishoku', nama: 'Tori Karaage Teishoku', deskripsi: 'Paha ayam marinasi jahe dan tamari, digoreng dua kali. Enam potong.', harga: 55000, alergen: ['gandum', 'kedelai'], ilustrasi: { jenis: 'teishoku', utama: 'karaage' }, opsi: [NASI] },
  { id: 'tempura-teishoku', kategori: 'teishoku', nama: 'Yasai Tempura Teishoku', deskripsi: 'Tempura sayur musiman: ubi, labu, terong, buncis, jamur shiitake. Saus tentsuyu kombu.', harga: 52000, alergen: ['gandum', 'telur', 'kedelai'], tag: ['vegetarian'], ilustrasi: { jenis: 'teishoku', utama: 'tempura' }, opsi: [NASI] },

  // Ramen & Udon
  { id: 'shoyu-ramen', kategori: 'mie', nama: 'Shoyu Ramen Ayam', deskripsi: 'Kaldu ayam bening, tamari, chashu ayam, menma, daun bawang, nori.', harga: 48000, alergen: ['gandum', 'telur', 'kedelai'], tag: ['favorit'], ilustrasi: { jenis: 'ramen', warna: '#8a5a36' }, opsi: [PEDAS, MIE, AJITAMA, TOPPING] },
  { id: 'miso-ramen', kategori: 'mie', nama: 'Miso Ramen', deskripsi: 'Kaldu ayam dengan miso putih dan merah, jagung manis, tauge, mentega sedikit.', harga: 52000, alergen: ['gandum', 'telur', 'kedelai', 'susu'], ilustrasi: { jenis: 'ramen', warna: '#b98a4a' }, opsi: [PEDAS, MIE, AJITAMA, TOPPING] },
  { id: 'tantanmen', kategori: 'mie', nama: 'Spicy Tantanmen', deskripsi: 'Kaldu wijen kental, ayam cincang berbumbu, bok choy, minyak cabai rumahan.', harga: 55000, alergen: ['gandum', 'telur', 'kedelai'], tag: ['pedas', 'baru'], ilustrasi: { jenis: 'ramen', warna: '#a8422f' }, opsi: [PEDAS_TANTAN, MIE, AJITAMA, TOPPING] },
  { id: 'niku-udon', kategori: 'mie', nama: 'Niku Udon', deskripsi: 'Udon tebal, irisan daging sapi manis gurih, bawang bombai, kaldu dashi ringan.', harga: 50000, alergen: ['gandum', 'kedelai', 'ikan'], ilustrasi: { jenis: 'udon', warna: '#7a4a2e' }, opsi: [PEDAS, MIE] },
  { id: 'kitsune-udon', kategori: 'mie', nama: 'Kitsune Udon', deskripsi: 'Udon dalam kaldu kombu-shiitake, tahu goreng manis, daun bawang.', harga: 42000, alergen: ['gandum', 'kedelai'], tag: ['vegetarian'], ilustrasi: { jenis: 'udon', warna: '#c89a4e' }, opsi: [PEDAS, MIE] },

  // Donburi
  { id: 'gyudon', kategori: 'donburi', nama: 'Gyudon', deskripsi: 'Irisan sapi tipis dan bawang bombai dimasak tamari dan gula aren, di atas nasi.', harga: 48000, alergen: ['kedelai'], tag: ['favorit'], ilustrasi: { jenis: 'donburi', warna: '#7a4a2e' }, opsi: [NASI, ONSEN] },
  { id: 'oyakodon', kategori: 'donburi', nama: 'Oyakodon', deskripsi: 'Ayam dan telur setengah matang dalam kuah dashi manis, daun bawang.', harga: 42000, alergen: ['telur', 'kedelai', 'ikan'], ilustrasi: { jenis: 'donburi', warna: '#e2b64a' }, opsi: [NASI] },
  { id: 'katsudon', kategori: 'donburi', nama: 'Katsudon', deskripsi: 'Chicken katsu dimasak sebentar dengan telur dan kuah, lalu ditumpahkan ke nasi.', harga: 50000, alergen: ['gandum', 'telur', 'kedelai', 'ikan'], ilustrasi: { jenis: 'donburi', warna: '#d49a4a' }, opsi: [NASI] },
  { id: 'salmon-don', kategori: 'donburi', nama: 'Salmon Don', deskripsi: 'Irisan salmon mentah, nasi sushi, ikura sedikit, wasabi, nori.', harga: 65000, alergen: ['ikan', 'kedelai'], tag: ['baru'], ilustrasi: { jenis: 'donburi', warna: '#e2764a' }, opsi: [NASI, WASABI] },
  { id: 'tendon', kategori: 'donburi', nama: 'Tendon', deskripsi: 'Tempura udang dan sayur di atas nasi, disiram saus tentsuyu manis.', harga: 45000, alergen: ['gandum', 'telur', 'kedelai', 'ikan'], ilustrasi: { jenis: 'donburi', warna: '#d9a052' }, opsi: [NASI] },

  // Sushi Roll & Sashimi
  { id: 'salmon-roll', kategori: 'sushi', nama: 'Salmon Roll', deskripsi: 'Delapan potong. Salmon, alpukat, timun, nasi sushi, nori.', harga: 45000, alergen: ['ikan', 'kedelai'], tag: ['favorit'], ilustrasi: { jenis: 'roll', warna: '#e2764a' }, opsi: [WASABI] },
  { id: 'ebi-roll', kategori: 'sushi', nama: 'Ebi Tempura Roll', deskripsi: 'Delapan potong. Udang tempura, timun, saus unagi tanpa mirin, tobiko.', harga: 48000, alergen: ['gandum', 'telur', 'kedelai', 'ikan'], ilustrasi: { jenis: 'roll', warna: '#d9a052' }, opsi: [WASABI] },
  { id: 'veg-roll', kategori: 'sushi', nama: 'Vegetarian Roll', deskripsi: 'Delapan potong. Alpukat, timun, wortel, kampyo, wijen.', harga: 35000, alergen: [], tag: ['vegetarian'], ilustrasi: { jenis: 'roll', warna: '#7d9a5a' }, opsi: [WASABI] },
  { id: 'salmon-sashimi', kategori: 'sushi', nama: 'Salmon Sashimi', deskripsi: 'Lima potong tebal, parutan lobak, daun shiso, tamari.', harga: 55000, alergen: ['ikan', 'kedelai'], ilustrasi: { jenis: 'sashimi' }, opsi: [WASABI] },

  // Agemono & Side
  { id: 'karaage', kategori: 'agemono', nama: 'Tori Karaage', deskripsi: 'Lima potong ayam goreng marinasi jahe. Renyah di luar, berair di dalam.', harga: 32000, alergen: ['gandum', 'kedelai'], tag: ['favorit'], ilustrasi: { jenis: 'agemono', warna: '#c9873e' }, opsi: [SAUS_GORENG] },
  { id: 'ebi-furai', kategori: 'agemono', nama: 'Ebi Furai', deskripsi: 'Tiga udang besar berbalut panko, saus tartar rumahan.', harga: 38000, alergen: ['gandum', 'telur', 'ikan'], ilustrasi: { jenis: 'agemono', warna: '#d9a052' }, opsi: [SAUS_GORENG] },
  { id: 'gyoza', kategori: 'agemono', nama: 'Gyoza Ayam', deskripsi: 'Enam buah, isi ayam dan kol, dipanggang lalu dikukus. Saus ponzu-rayu.', harga: 28000, alergen: ['gandum', 'kedelai'], ilustrasi: { jenis: 'gyoza' }, opsi: [] },
  { id: 'edamame', kategori: 'agemono', nama: 'Edamame', deskripsi: 'Direbus dengan garam laut. Hangat.', harga: 18000, alergen: ['kedelai'], tag: ['vegetarian'], ilustrasi: { jenis: 'edamame' }, opsi: [] },
  { id: 'miso-soup', kategori: 'agemono', nama: 'Miso Soup', deskripsi: 'Kaldu kombu, miso putih, tahu, wakame, daun bawang.', harga: 12000, alergen: ['kedelai'], tag: ['vegetarian'], ilustrasi: { jenis: 'miso' }, opsi: [] },
  { id: 'nasi', kategori: 'agemono', nama: 'Nasi Putih', deskripsi: 'Beras Jepang koshihikari lokal, dimasak di rice cooker tanah liat.', harga: 8000, alergen: [], tag: ['vegetarian'], ilustrasi: { jenis: 'nasi' }, opsi: [] },

  // Minuman & Dessert
  { id: 'ocha-hangat', kategori: 'minuman', nama: 'Ocha Hangat', deskripsi: 'Teh hijau sencha, diseduh 70 °C. Isi ulang gratis di tempat.', harga: 10000, alergen: [], tag: ['vegetarian'], ilustrasi: { jenis: 'ocha', dingin: false }, opsi: [] },
  { id: 'ocha-dingin', kategori: 'minuman', nama: 'Ocha Dingin', deskripsi: 'Sencha diseduh dingin semalaman, tanpa gula.', harga: 12000, alergen: [], tag: ['vegetarian'], ilustrasi: { jenis: 'ocha', dingin: true }, opsi: [] },
  { id: 'matcha-latte', kategori: 'minuman', nama: 'Matcha Latte', deskripsi: 'Matcha Uji, susu segar, sedikit gula. Bisa panas atau dingin.', harga: 28000, alergen: ['susu'], tag: ['vegetarian'], ilustrasi: { jenis: 'matcha' }, opsi: [SUHU, MANIS] },
  { id: 'ramune', kategori: 'minuman', nama: 'Ramune', deskripsi: 'Soda Jepang dalam botol kelereng. Rasa original.', harga: 20000, alergen: [], tag: ['vegetarian'], ilustrasi: { jenis: 'ramune' }, opsi: [] },
  { id: 'mochi', kategori: 'minuman', nama: 'Mochi Es Krim', deskripsi: 'Tiga buah: matcha, stroberi, wijen hitam.', harga: 22000, alergen: ['susu'], tag: ['vegetarian'], habis: true, ilustrasi: { jenis: 'mochi' }, opsi: [] },
  { id: 'dorayaki', kategori: 'minuman', nama: 'Dorayaki', deskripsi: 'Dua panekuk lembut dengan selai kacang merah buatan sendiri.', harga: 18000, alergen: ['gandum', 'telur'], tag: ['vegetarian'], ilustrasi: { jenis: 'dorayaki' }, opsi: [] },
];

export const faq = [
  { q: 'Bagaimana cara memesan dari menu ini?', a: 'Tambah item ke nampan, lalu tekan "Pesan via WhatsApp". Pesanan tersusun otomatis bersama nomor mejamu dan terkirim ke WhatsApp warung. Di demo ini WhatsApp terbuka tanpa nomor tujuan.' },
  { q: 'Apakah semua menu halal?', a: 'Seluruh menu tanpa babi, tanpa mirin, dan tanpa sake. Rasa manis-gurih khas Jepang kami dapat dari gula aren, kombu, dan tamari. Sertifikasi halal sedang dalam proses.' },
  { q: 'Ada menu untuk vegetarian atau yang menghindari gandum?', a: 'Ada. Pakai saringan "Vegetarian" atau "Tanpa gandum" di atas daftar menu. Kecap asin kami tamari tanpa gandum, tetapi gorengan memakai satu penggorengan yang sama.' },
  { q: 'Bisa pesan untuk dibawa pulang?', a: 'Bisa. Pilih "Bungkus" di nampan. Ramen dan udon dibungkus terpisah antara mie dan kuah supaya tidak lembek.' },
];

export const catatanDapur = [
  'Tanpa babi. Tanpa mirin dan sake; rasa manis dari gula aren dan kombu.',
  'Kecap asin kami tamari tanpa gandum. Gandum hanya ada di mie, udon, panko, tepung tempura, kulit gyoza, dan dorayaki.',
  'Kaldu ramen dari ayam. Sup miso dan kitsune udon memakai kaldu kombu-shiitake, cocok untuk vegetarian.',
  'Satu penggorengan dipakai untuk semua gorengan, termasuk udang.',
  'Ikan mentah (sashimi, salmon roll, salmon don) datang segar tiap pagi dan tidak dibungkus untuk dibawa jauh.',
];

export const ALERGEN = [
  { id: 'gandum', label: 'Gandum' },
  { id: 'telur', label: 'Telur' },
  { id: 'kedelai', label: 'Kedelai' },
  { id: 'ikan', label: 'Ikan & udang' },
  { id: 'susu', label: 'Susu' },
];

export const cariItem = (id) => menu.find((m) => m.id === id);
export const itemKategori = (id) => menu.filter((m) => m.kategori === id);
