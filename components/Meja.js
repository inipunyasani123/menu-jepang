'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useMeja, useTerpasang } from '@/lib/nampan';
import { Meja as IkonMeja } from './Ikon';

/** Membaca ?meja= dari tautan QR dan menyimpannya; dibungkus Suspense karena useSearchParams. */
function BacaTautan() {
  const params = useSearchParams();
  const [, setMeja] = useMeja();
  useEffect(() => {
    const m = params.get('meja');
    if (m && /^[0-9A-Za-z-]{1,6}$/.test(m)) setMeja(m.toUpperCase());
  }, [params, setMeja]);
  return null;
}

export const bukaNampan = () => window.dispatchEvent(new CustomEvent('akagane:nampan'));

/** Lencana nomor meja di header (bilah gelap). Menekannya membuka nampan, tempat nomor meja bisa diubah. */
export default function Meja({ className = '' }) {
  const [meja] = useMeja();
  const terpasang = useTerpasang();
  const ada = terpasang && meja;
  return (
    <>
      <Suspense fallback={null}>
        <BacaTautan />
      </Suspense>
      <button
        type="button"
        onClick={bukaNampan}
        className={`inline-flex min-h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-[3px] border px-3 text-sm font-medium transition ${ada ? 'border-kertas bg-kertas text-sumi' : 'border-tembaga-muda/60 text-kertas hover:border-kertas'} ${className}`}
        aria-label={ada ? `Meja ${meja}, buka nampan untuk mengubah` : 'Isi nomor meja'}
      >
        <IkonMeja className="h-4 w-4" />
        {ada ? `Meja ${meja}` : 'Nomor meja'}
      </button>
    </>
  );
}
