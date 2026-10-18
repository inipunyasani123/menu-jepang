import Link from 'next/link';
import Hanko from '@/components/Hanko';

export const metadata = { title: 'Halaman tidak ditemukan', robots: { index: false, follow: true }, alternates: { canonical: null } };

export default function TidakDitemukan() {
  return (
    <main id="isi" className="wadah flex min-h-[80vh] flex-col items-center justify-center py-16 text-center">
      <Hanko teks="無" label="Tidak ada" miring className="h-20 w-20 text-[2.4rem]" />
      <p className="label-fuda mt-8 text-tembaga-tua">404 · tidak ada di nampan</p>
      <h1 className="mt-3 text-5xl sm:text-6xl">Hidangan ini tidak ada di dapur kami</h1>
      <p className="mt-4 max-w-md text-tinta-2">Alamat yang kamu buka tidak ada di menu. Menu lengkap ada di halaman utama, lengkap dengan nomor mejamu.</p>
      <Link href="/" className="tombol tombol-sumi mt-8">Kembali ke menu</Link>
    </main>
  );
}
