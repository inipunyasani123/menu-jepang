import { site, faq, catatanDapur, menu, cariItem, ALERGEN } from '@/lib/data';
import { labelHari, rupiah } from '@/lib/format';
import Hanko from '@/components/Hanko';
import Noren from '@/components/Noren';
import Meja from '@/components/Meja';
import StatusBuka from '@/components/StatusBuka';
import KategoriNav from '@/components/KategoriNav';
import Menu from '@/components/Menu';
import Nampan from '@/components/Nampan';
import SelinganQR from '@/components/SelinganQR';
import Teishoku from '@/components/Teishoku';
import FotoMenu from '@/components/FotoMenu';
import TombolPilih from '@/components/TombolPilih';
import JudulBagian from '@/components/JudulBagian';
import Footer from '@/components/Footer';
import { IkonAlergen } from '@/components/Alergen';

export const metadata = { alternates: { canonical: '/' } };

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const ANGKA_JP = ['一', '二', '三', '四', '五'];

export default function Halaman() {
  const hariIni = cariItem(site.teishokuHariIni);
  const jumlahMenu = menu.length;
  const vegetarian = menu.filter((m) => m.tag?.includes('vegetarian')).length;

  return (
    <>
      {/* Header = bilah kayu tempat noren menggantung */}
      <header className="sticky top-0 z-40 border-b border-tembaga/70 bg-sumi text-kertas">
        <div className="wadah flex h-12 items-center gap-3">
          <a href="#top" className="flex items-center gap-2.5">
            <Hanko teks="赤" className="h-7 w-7 text-[0.95rem]" />
            <span className="whitespace-nowrap font-display text-[1.05rem] font-bold leading-none">{site.nama}<span className="sr-only">, ke atas</span></span>
          </a>
          <div className="ms-6"><KategoriNav /></div>
          <div className="ms-auto flex items-center gap-3 sm:gap-4">
            <span className="hidden sm:block"><StatusBuka gelap /></span>
            <Meja />
          </div>
        </div>
      </header>

      <main id="top" className="pb-24">
        {/* Hero: noren + judul + teishoku hari ini */}
        <section className="relative" aria-labelledby="judul-utama">
          <div className="wadah"><Noren /></div>
          <div className="wadah grid gap-8 pb-12 pt-8 sm:pt-10 lg:grid-cols-12 lg:items-start lg:gap-10 lg:pb-16">
            <div className="lg:col-span-6 lg:pt-4">
              <p className="label-fuda text-tembaga-tua">Warung makan Jepang rumahan · {site.kota}</p>
              <h1 id="judul-utama" className="mt-3 text-[3rem] font-bold leading-[0.98] sm:text-[4rem] lg:text-[4.75rem]">
                Akagane<span className="block">Shokudō</span>
              </h1>
              <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-tinta-2">
                {jumlahMenu} hidangan rumahan: teishoku, ramen, donburi, sushi roll, dan gorengan. Tanpa babi, tanpa mirin dan sake; {vegetarian} di antaranya vegetarian. Susun nampanmu, lalu kirim pesanan dari meja.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#isi" className="tombol tombol-sumi">Lihat menu</a>
                <a href="#sebelum" className="tombol tombol-garis">Sebelum memesan</a>
              </div>
              <p className="mt-5 sm:hidden"><StatusBuka /></p>
              <p className="mt-6 flex items-center gap-2 text-sm text-tinta-3">
                <span aria-hidden="true" className="jp text-tembaga-tua">休</span> {site.hariTutup} tutup · {labelHari(site.jam[0].hari)} {site.jam[0].buka}–{site.jam[0].tutup} WIB
              </p>
            </div>

            {/* Kartu teishoku hari ini dengan diagram komposisi */}
            <aside className="nampan-lacquer p-5 sm:p-6 lg:col-span-6" aria-labelledby="judul-teishoku">
              <div className="flex items-center justify-between gap-4">
                <p id="judul-teishoku" className="label-fuda text-tembaga-muda">Teishoku hari ini</p>
                <span aria-hidden="true" className="jp text-sm text-tembaga-muda">本日の定食</span>
              </div>
              <p className="mt-2 font-display text-[1.6rem] font-bold leading-tight text-kertas">{hariIni.nama}</p>
              <p className="mt-1 text-sm leading-snug text-abu-2">{hariIni.deskripsi}</p>
              <FotoMenu id={hariIni.id} alt={`${hariIni.nama} disajikan di nampan`} priority sizes="(min-width: 1024px) 420px, 90vw" className="mt-4 aspect-[4/3] w-full rounded-[4px] ring-1 ring-tembaga/40">
                <Teishoku utama={hariIni.ilustrasi.utama} className="mt-4 w-full" />
              </FotoMenu>
              <ol className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 text-[0.85rem] text-abu sm:grid-cols-3">
                {['Nasi koshihikari', 'Sup miso kombu', 'Lauk utama: saba shioyaki', 'Acar takuan & shibazuke', 'Ocha hangat'].map((t, i) => (
                  <li key={t} className="flex gap-2"><span className="w-4 shrink-0 font-semibold text-tembaga-muda">{i + 1}</span>{t}</li>
                ))}
              </ol>
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-sumi-3 pt-4">
                <span className="fuda text-[0.95rem]">{rupiah(hariIni.harga)}</span>
                <TombolPilih id={hariIni.id} className="tombol tombol-kertas" aria-label={`Pilih set ini: ${hariIni.nama}, pilih opsi`}>Pilih set ini</TombolPilih>
              </div>
            </aside>
          </div>
        </section>

        {/* Sebelum memesan: catatan dapur, alergen, jam buka */}
        <section id="sebelum" className="bagian wadah scroll-mt-16" aria-labelledby="judul-sebelum">
          <JudulBagian id="judul-sebelum" jp="注意">Sebelum memesan</JudulBagian>
          <div className="bagian-isi grid gap-4 md:grid-cols-12">
            <div className="kartu-washi p-5 md:col-span-7">
              <p className="label-fuda text-tembaga-tua">Catatan dapur</p>
              <ul className="mt-3 space-y-2.5 text-[0.95rem] leading-relaxed text-tinta-2">
                {catatanDapur.map((c, i) => (
                  <li key={c} className="flex gap-3">
                    <span aria-hidden="true" className="jp mt-0.5 w-5 shrink-0 text-center text-sm text-tembaga-tua">{ANGKA_JP[i]}</span>
                    <span className="sr-only">Catatan {i + 1}:</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="kartu-washi p-5 md:col-span-5">
              <p className="label-fuda text-tembaga-tua">Tanda alergen di tiap kartu</p>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5 text-[0.95rem] text-tinta-2">
                {ALERGEN.map((a) => (
                  <li key={a.id} className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[3px] bg-sumi text-abu"><IkonAlergen id={a.id} className="h-[18px] w-[18px]" /></span>
                    {a.label}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-tinta-3">Kartu tanpa ikon berarti bebas lima alergen umum. Pakai saringan “Tanpa gandum” untuk menyaring cepat.</p>
            </div>
            <div className="kartu-washi p-5 md:col-span-5">
              <p className="label-fuda text-tembaga-tua">Jam buka</p>
              <dl className="mt-3 divide-y divide-abu-3 text-[0.95rem]">
                {site.jam.map((j) => (
                  <div key={j.buka} className="flex justify-between py-2"><dt className="text-tinta-2">{labelHari(j.hari)}</dt><dd className="font-semibold">{j.buka}–{j.tutup} WIB</dd></div>
                ))}
                <div className="flex justify-between py-2"><dt className="text-tinta-2">{site.hariTutup}</dt><dd className="font-semibold text-hanko">Tutup</dd></div>
                <div className="flex justify-between gap-6 py-2"><dt className="text-tinta-2">Sekarang</dt><dd><StatusBuka /></dd></div>
              </dl>
              <p className="mt-3 text-sm text-tinta-3">{site.alamat}</p>
            </div>
            <div className="kartu-washi p-5 md:col-span-7">
              <p className="label-fuda text-tembaga-tua">Porsi & pembayaran</p>
              <ul className="mt-3 space-y-2.5 text-[0.95rem] leading-relaxed text-tinta-2">
                <li className="flex gap-3"><span aria-hidden="true" className="jp mt-0.5 w-5 shrink-0 text-center text-sm text-tembaga-tua">大</span>Porsi nasi (+{rupiah(5000)}) dan mie (+{rupiah(8000)}) bisa ditambah dari lembar pilihan tiap item.</li>
                <li className="flex gap-3"><span aria-hidden="true" className="jp mt-0.5 w-5 shrink-0 text-center text-sm text-tembaga-tua">辛</span>Tingkat pedas ichimi 0 sampai 3 untuk ramen dan udon. Tantanmen mulai dari tingkat 1.</li>
                <li className="flex gap-3"><span aria-hidden="true" className="jp mt-0.5 w-5 shrink-0 text-center text-sm text-tembaga-tua">払</span>Bayar di kasir atau QRIS saat makanan diantar. {site.pajak}</li>
              </ul>
            </div>
          </div>
        </section>

        <Menu selingan={<SelinganQR />} />

        {/* FAQ */}
        <section id="faq" className="bagian wadah scroll-mt-16" aria-labelledby="judul-faq">
          <JudulBagian id="judul-faq" jp="質問">Yang sering ditanya</JudulBagian>
          <div className="bagian-isi">
            <div className="divide-y divide-abu-3 border-y border-abu-3">
              {faq.map((f, i) => (
                <details key={f.q} name="faq" open={i === 0} className="group">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center gap-4 py-3.5 font-display text-[1.12rem] font-bold leading-snug [&::-webkit-details-marker]:hidden">
                    <span aria-hidden="true" className="jp w-6 shrink-0 text-center text-base font-medium text-tembaga-tua">{ANGKA_JP[i]}</span>
                    <span className="flex-1">{f.q}</span>
                    <span aria-hidden="true" className="grid h-8 w-8 shrink-0 place-items-center rounded-[3px] border border-tinta-3 text-lg leading-none transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="pb-4 ps-10 text-[0.95rem] leading-relaxed text-tinta-2">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </main>

      <Footer />
      <Nampan />
      <KategoriNav bawah />
    </>
  );
}
