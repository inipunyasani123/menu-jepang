import { site } from '@/lib/data';
import { labelHari } from '@/lib/format';
import Hanko from './Hanko';

export default function Footer() {
  return (
    <footer className="gelap mt-20 bg-sumi text-abu">
      <div className="wadah grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Hanko teks="赤" className="h-10 w-10 text-[1.35rem]" />
            <p className="font-display text-2xl font-bold text-kertas">{site.nama}</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-abu-2">{site.tagline} Warung makan Jepang kecil di {site.kota}: menu rumahan, porsi pas, tanpa babi, tanpa mirin dan sake.</p>
        </div>
        <div className="text-sm">
          <p className="label-fuda text-tembaga-muda">Jam buka</p>
          <ul className="mt-3 space-y-1.5">
            {site.jam.map((j) => (
              <li key={j.buka + j.hari.join()} className="flex justify-between gap-4 border-b border-sumi-3 pb-1.5">
                <span>{labelHari(j.hari)}</span>
                <span className="text-kertas">{j.buka}–{j.tutup} WIB</span>
              </li>
            ))}
            <li className="flex justify-between gap-4 border-b border-sumi-3 pb-1.5">
              <span>{site.hariTutup}</span>
              <span className="text-kertas">Tutup</span>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="label-fuda text-tembaga-muda">Alamat</p>
          <p className="mt-3 leading-relaxed">{site.alamat}</p>
          <p className="mt-3 text-abu-2">Menu edisi {site.edisi}. {site.pajak}</p>
        </div>
      </div>
      <div className="border-t border-sumi-3">
        <p className="wadah py-4 text-xs text-abu-2">© 2026 {site.nama}. Usaha fiktif untuk demo menu digital.</p>
      </div>
    </footer>
  );
}
