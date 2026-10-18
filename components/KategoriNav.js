'use client';

import { useEffect, useState } from 'react';
import { kategori } from '@/lib/data';
import { IKON_KATEGORI } from './Ikon';

function useAktif() {
  const [aktif, setAktif] = useState(kategori[0].id);
  useEffect(() => {
    const bagian = kategori.map((k) => document.getElementById(`k-${k.id}`)).filter(Boolean);
    if (!bagian.length) return;
    const terlihat = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) terlihat.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
        const pertama = bagian.find((b) => (terlihat.get(b.id) || 0) > 0);
        if (pertama) setAktif(pertama.id.slice(2));
      },
      { rootMargin: '-100px 0px -55% 0px', threshold: [0, 0.1, 0.5] },
    );
    bagian.forEach((b) => io.observe(b));
    return () => io.disconnect();
  }, []);
  return aktif;
}

/**
 * Navigasi kategori dengan scrollspy. `bawah`: bilah lengket di dasar layar ponsel dengan ikon kecil
 * (bilah nampan muncul di atasnya). Tanpa `bawah`: tautan teks untuk header di layar lebar.
 */
export default function KategoriNav({ bawah = false }) {
  const aktif = useAktif();

  if (bawah) {
    return (
      <nav aria-label="Kategori menu" className="nav-bawah lg:hidden">
        <ul className="grid grid-cols-6">
          {kategori.map((k) => {
            const Ikon = IKON_KATEGORI[k.ikon];
            const on = k.id === aktif;
            return (
              <li key={k.id}>
                <a href={`#k-${k.id}`} aria-current={on ? 'true' : undefined} className="nav-bawah-item">
                  <Ikon className="h-[22px] w-[22px]" strokeWidth={on ? 2.1 : 1.7} />
                  <span>{k.ringkas}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  return (
    <nav aria-label="Kategori menu" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {kategori.map((k) => {
          const on = k.id === aktif;
          return (
            <li key={k.id}>
              <a
                href={`#k-${k.id}`}
                aria-current={on ? 'true' : undefined}
                className={`inline-flex min-h-9 items-center rounded-[3px] px-2.5 text-[0.9rem] transition ${on ? 'bg-kertas/10 font-semibold text-kertas' : 'text-abu hover:text-kertas'}`}
              >
                {k.ringkas}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
