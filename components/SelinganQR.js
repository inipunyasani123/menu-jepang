import { site } from '@/lib/data';
import QR from './QR';
import JudulBagian from './JudulBagian';
import { Pindai } from './Ikon';

export const CONTOH_MEJA = '4';

/** Bagian "Pindai di meja": disisipkan di tengah daftar menu (setelah Donburi). QR sungguhan untuk meja contoh. */
export default function SelinganQR() {
  return (
    <section id="pindai" className="bagian" aria-labelledby="judul-pindai">
      <JudulBagian id="judul-pindai" jp="卓番">Pindai di meja</JudulBagian>
      <div className="bagian-isi kartu-washi grid gap-6 p-5 sm:p-7 md:grid-cols-12 md:items-center">
        <div className="flex justify-center md:col-span-4">
          <div className="inline-block rounded-[3px] border border-abu-3 bg-kertas p-4 text-center shadow-[0_1px_0_#e6e1d6,0_10px_30px_rgba(27,26,25,0.08)]">
            <div className="flex items-center justify-between gap-6">
              <p className="label-fuda text-tembaga-tua">Meja {CONTOH_MEJA}</p>
              <Pindai className="h-4 w-4 text-tembaga-tua" />
            </div>
            <QR url={`${site.url}/?meja=${CONTOH_MEJA}`} className="mt-3 h-40 w-40 text-sumi" label={`Kode QR contoh untuk meja ${CONTOH_MEJA}`} />
            <p className="mt-3 font-display text-base font-bold">{site.nama}</p>
            <p className="text-[12px] text-tinta-3">menu-jepang.pintuweb.id/?meja={CONTOH_MEJA}</p>
          </div>
        </div>
        <div className="md:col-span-8">
          <h3 className="text-2xl font-bold sm:text-3xl">Pindai, pilih, kirim. Tidak perlu melambai ke dapur.</h3>
          <ol className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              ['Pindai QR di meja', 'Tautannya membawa nomor mejamu, jadi dapur tahu nampan ini milik siapa.'],
              ['Susun nampan', 'Pilih tingkat pedas, porsi nasi atau mie, telur, dan topping. Tulis catatan kalau perlu.'],
              ['Kirim lewat WhatsApp', 'Pesanan tersusun rapi sebagai pesan. Bayar di kasir atau lewat QRIS saat makanan diantar.'],
            ].map(([j, d], i) => (
              <li key={j} className="border-t-2 border-sumi pt-3">
                <p className="font-display text-[1.05rem] font-bold"><span className="text-hanko">{i + 1}.</span> {j}</p>
                <p className="mt-1 text-sm leading-relaxed text-tinta-2">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
