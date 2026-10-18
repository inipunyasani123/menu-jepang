'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/data';
import { statusBuka, labelHari } from '@/lib/format';
import { Jam } from './Ikon';

/**
 * Status buka dihitung di perangkat tamu dalam WIB, diperbarui tiap menit. Sebelum terpasang: jadwal statis.
 * `gelap` = dipakai di atas latar sumi (warna teks disesuaikan).
 */
export default function StatusBuka({ className = '', gelap = false }) {
  const [st, setSt] = useState(null);
  useEffect(() => {
    const tick = () => setSt(statusBuka(site.jam));
    tick();
    const t = setInterval(tick, 60000);
    return () => clearInterval(t);
  }, []);

  let teks = `${labelHari(site.jam[0].hari)} ${site.jam[0].buka}–${site.jam[0].tutup}`;
  let warna = gelap ? 'text-abu' : 'text-tinta-2';
  if (st) {
    if (st.buka) {
      teks = `Buka · tutup ${st.sampai}`;
      warna = gelap ? 'text-lumut-muda' : 'text-lumut';
    } else {
      const kapan = st.hariIni ? '' : st.hariBerikut ? ` ${st.hariBerikut}` : '';
      teks = st.mulai ? `Tutup · buka ${st.mulai}${kapan}` : 'Tutup';
      warna = gelap ? 'text-tembaga-muda' : 'text-hanko';
    }
  }
  return (
    <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${warna} ${className}`}>
      <Jam className="h-4 w-4 shrink-0" />
      <span>{teks} <span className={gelap ? 'text-abu-2' : 'text-tinta-3'}>WIB</span></span>
    </span>
  );
}
