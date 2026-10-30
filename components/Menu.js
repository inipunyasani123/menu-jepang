'use client';

import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { kategori, menu, cariItem } from '@/lib/data';
import { rupiah } from '@/lib/format';
import { useNampan } from '@/lib/nampan';
import { Plus, Minus, Cari, Tutup, Centang } from './Ikon';
import Ilustrasi from './Ilustrasi';
import FotoMenu from './FotoMenu';
import Alergen from './Alergen';
import Hanko from './Hanko';
import JudulBagian from './JudulBagian';

const SARING = [
  { id: 'favorit', label: 'Favorit', uji: (m) => m.tag?.includes('favorit') },
  { id: 'tanpa-gandum', label: 'Tanpa gandum', uji: (m) => !m.alergen?.includes('gandum') },
  { id: 'vegetarian', label: 'Vegetarian', uji: (m) => m.tag?.includes('vegetarian') },
  { id: 'pedas', label: 'Pedas', uji: (m) => m.tag?.includes('pedas') || m.opsi?.some((o) => o.id === 'pedas') },
];

const LABEL_TAG = { baru: ['Baru', 'text-tembaga-muda'], pedas: ['Pedas', 'text-[#e8a39f]'], vegetarian: ['Vegetarian', 'text-lumut-muda'] };

/** Nilai pilihan yang terpilih untuk satu opsi: tunggal → [id], multi → [id, ...]. */
const terpilih = (pilihan, o) => (o.multi ? pilihan[o.id] || [] : [pilihan[o.id]]);

/** Kartu item bergaya nampan lacquer: kartu sumi bergaris dalam tembaga, harga di label fuda, stempel hanko untuk favorit. */
function Kartu({ m, onPilih }) {
  const favorit = m.tag?.includes('favorit');
  const label = (m.tag || []).filter((t) => LABEL_TAG[t]);
  return (
    <li className={`nampan-lacquer ${m.habis ? 'nampan-habis' : ''}`}>
      <article className="relative flex gap-3.5 p-3.5 sm:p-4" aria-labelledby={`item-${m.id}`}>
        <FotoMenu id={m.id} sizes="(min-width: 640px) 112px, 96px" className={`h-24 w-24 shrink-0 rounded-[4px] ring-1 ring-tembaga/50 sm:h-28 sm:w-28 ${m.habis ? 'opacity-45 grayscale' : ''}`}>
          <div className={`h-[4.75rem] w-[4.75rem] shrink-0 sm:h-20 sm:w-20 ${m.habis ? 'opacity-45' : ''}`}>
            <Ilustrasi data={m.ilustrasi} className="h-full w-full" />
          </div>
        </FotoMenu>
        <div className="min-w-0 flex-1">
          <h3 id={`item-${m.id}`} className={`font-display text-[1.08rem] font-bold leading-snug ${m.habis ? 'text-pudar' : 'text-kertas'} ${favorit ? 'pe-7' : ''}`}>{m.nama}</h3>
          {label.length > 0 && (
            <p className="mt-0.5 flex flex-wrap gap-x-2 text-[12px] font-semibold uppercase tracking-[0.12em]">
              {label.map((t) => <span key={t} className={m.habis ? 'text-pudar' : LABEL_TAG[t][1]}>{LABEL_TAG[t][0]}</span>)}
            </p>
          )}
          <p className={`mt-1 text-[0.86rem] leading-snug ${m.habis ? 'text-pudar' : 'text-abu-2'}`}>{m.deskripsi}</p>
          <div className="mt-2.5 flex items-center gap-2.5">
            <span className={`fuda ${m.habis ? 'fuda-habis' : ''}`}>{rupiah(m.harga)}</span>
            <Alergen daftar={m.alergen} className={m.habis ? 'text-pudar' : 'text-abu-2'} />
            <button
              type="button"
              onClick={() => onPilih(m)}
              disabled={m.habis}
              aria-label={m.habis ? `${m.nama} habis hari ini` : `Tambah ${m.nama}${m.opsi?.length ? ', pilih opsi' : ''}`}
              className="tombol-tambah ms-auto"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </div>
        {favorit && !m.habis && <Hanko teks="推" label="Favorit" miring className="absolute -top-2 end-2 h-9 w-9 text-[1.15rem]" />}
        {m.habis && <span className="stempel-habis">Habis hari ini</span>}
      </article>
    </li>
  );
}

/** Lembar pilihan: opsi tunggal (radio) dan multi (topping), catatan, jumlah, lalu tambah ke nampan. */
function LembarPilihan({ item, onTutup, onTambah }) {
  const ref = useRef(null);
  const [pilihan, setPilihan] = useState({});
  const [qty, setQty] = useState(1);
  const [catatan, setCatatan] = useState('');

  useEffect(() => {
    if (!item) return;
    const awal = {};
    for (const o of item.opsi || []) awal[o.id] = o.multi ? [] : o.pilihan[0].id;
    setPilihan(awal);
    setQty(1);
    setCatatan('');
    const d = ref.current;
    if (d && !d.open) d.showModal();
  }, [item]);

  if (!item) return null;
  const tambahan = (item.opsi || []).reduce((n, o) => {
    const ids = terpilih(pilihan, o);
    return n + o.pilihan.reduce((s, p) => s + (ids.includes(p.id) ? p.tambah || 0 : 0), 0);
  }, 0);
  const harga = (item.harga + tambahan) * qty;

  const pilih = (o, p) =>
    setPilihan((s) => {
      if (!o.multi) return { ...s, [o.id]: p.id };
      const ada = s[o.id] || [];
      return { ...s, [o.id]: ada.includes(p.id) ? ada.filter((x) => x !== p.id) : [...ada, p.id] };
    });

  return (
    <dialog ref={ref} className="lembar" onClose={onTutup} aria-labelledby="judul-pilihan">
      <form
        method="dialog"
        className="flex max-h-[92dvh] flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          onTambah(item, pilihan, qty, catatan.trim());
          ref.current?.close();
        }}
      >
        <div className="flex items-start gap-4 border-b border-abu-3 px-5 pb-4 pt-5">
          <FotoMenu id={item.id} sizes="80px" className="h-20 w-20 shrink-0 rounded-[4px]">
            <div className="h-16 w-16 shrink-0 rounded-[4px] bg-sumi p-1.5">
              <Ilustrasi data={item.ilustrasi} className="h-full w-full" />
            </div>
          </FotoMenu>
          <div className="min-w-0 flex-1">
            <p className="label-fuda text-tembaga-tua">{kategori.find((k) => k.id === item.kategori)?.nama}</p>
            <h2 id="judul-pilihan" className="mt-0.5 text-[1.45rem] font-bold">{item.nama}</h2>
            <p className="mt-1 text-sm text-tinta-2">{item.deskripsi}</p>
          </div>
          <button type="button" onClick={() => ref.current?.close()} className="tombol-ikon shrink-0" aria-label="Tutup">
            <Tutup className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {(item.opsi || []).map((o) => {
            const ids = terpilih(pilihan, o);
            return (
              <fieldset key={o.id} className="mb-5">
                <legend className="label-fuda mb-2 text-tinta-3">{o.label}{o.multi ? ' · boleh lebih dari satu' : ''}</legend>
                <div className="grid gap-2" role={o.multi ? 'group' : 'radiogroup'} aria-label={o.label}>
                  {o.pilihan.map((p) => {
                    const on = ids.includes(p.id);
                    return (
                      <button key={p.id} type="button" role={o.multi ? 'checkbox' : 'radio'} aria-checked={on} onClick={() => pilih(o, p)} className="pil-opsi">
                        <span className="flex items-center gap-2.5">
                          <span className={`grid h-5 w-5 place-items-center border-[1.5px] ${o.multi ? 'rounded-[3px]' : 'rounded-full'} ${on ? 'border-sumi bg-sumi text-kertas' : 'border-tinta-3'}`} aria-hidden="true">
                            {on && <Centang className="h-3.5 w-3.5" strokeWidth={2.5} />}
                          </span>
                          {p.label}
                        </span>
                        {p.tambah ? <span className="text-sm text-tinta-2">+{rupiah(p.tambah)}</span> : null}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            );
          })}
          <label className="block">
            <span className="label-fuda mb-2 block text-tinta-3">Catatan untuk dapur</span>
            <input value={catatan} onChange={(e) => setCatatan(e.target.value)} maxLength={80} placeholder="Mis. tanpa daun bawang, kuah terpisah" className="isian" />
          </label>
        </div>

        <div className="flex items-center gap-3 border-t border-abu-3 bg-washi px-5 py-4">
          <div className="inline-flex items-center rounded-[3px] border border-tinta-3 bg-kertas" role="group" aria-label="Jumlah">
            <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-11 w-11 place-items-center" aria-label="Kurangi"><Minus className="h-4 w-4" /></button>
            <span className="w-6 text-center font-semibold" aria-live="polite">{qty}</span>
            <button type="button" onClick={() => setQty((q) => Math.min(20, q + 1))} className="grid h-11 w-11 place-items-center" aria-label="Tambah"><Plus className="h-4 w-4" /></button>
          </div>
          <button type="submit" className="tombol tombol-sumi min-h-11 flex-1 justify-between px-4">
            <span>Tambah ke nampan</span>
            <span className="fuda">{rupiah(harga)}</span>
          </button>
        </div>
      </form>
    </dialog>
  );
}

/** Daftar menu: cari + saring, kategori bergaya nampan lacquer, lembar pilihan, toast. `selingan` disisipkan setelah kategori ketiga. */
export default function Menu({ selingan = null }) {
  const [cari, setCari] = useState('');
  const [saring, setSaring] = useState(null);
  const [dipilih, setDipilih] = useState(null);
  const [toast, setToast] = useState('');
  const { tambah } = useNampan();

  const q = cari.trim().toLowerCase();
  const lolos = useMemo(() => {
    const uji = saring ? SARING.find((s) => s.id === saring).uji : () => true;
    return menu.filter((m) => uji(m) && (!q || `${m.nama} ${m.deskripsi}`.toLowerCase().includes(q)));
  }, [q, saring]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(''), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  // Tombol di luar daftar (kartu teishoku hari ini) membuka lembar pilihan lewat event.
  useEffect(() => {
    const buka = (e) => {
      const m = cariItem(e.detail);
      if (!m || m.habis) return;
      if (m.opsi?.length) setDipilih(m);
      else {
        tambah(m.id, {}, 1, '');
        setToast(`${m.nama} masuk nampan`);
      }
    };
    window.addEventListener('akagane:pilih', buka);
    return () => window.removeEventListener('akagane:pilih', buka);
  }, [tambah]);

  const pilih = (m) => {
    if (m.opsi?.length) setDipilih(m);
    else {
      tambah(m.id, {}, 1, '');
      setToast(`${m.nama} masuk nampan`);
    }
  };
  const tambahDariLembar = (item, pilihan, qty, catatan) => {
    tambah(item.id, pilihan, qty, catatan);
    setToast(`${qty}× ${item.nama} masuk nampan`);
  };

  const adaSaring = q || saring;

  return (
    <section id="isi" aria-labelledby="judul-menu" className="wadah min-w-0 scroll-mt-16">
      <h2 id="judul-menu" className="sr-only">Daftar menu</h2>

      {/* Cari & saring: lengket di bawah header pada ponsel */}
      <div className="sticky top-12 z-20 -mx-4 bg-washi/95 px-4 pb-3 pt-3 backdrop-blur sm:-mx-6 sm:px-6 lg:static lg:mx-0 lg:mt-12 lg:bg-transparent lg:px-0 lg:pt-0">
        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
          <label className="relative block flex-1">
            <span className="sr-only">Cari menu</span>
            <Cari className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-tinta-3" />
            <input type="search" value={cari} onChange={(e) => setCari(e.target.value)} placeholder="Cari: ramen, salmon, vegetarian…" className="isian pl-10" />
          </label>
          <div className="sembunyi-gulir flex gap-2 overflow-x-auto" role="group" aria-label="Saring">
            {SARING.map((s) => (
              <button key={s.id} type="button" aria-pressed={saring === s.id} onClick={() => setSaring(saring === s.id ? null : s.id)} className="chip">
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {adaSaring && (
        <p className="mt-3 text-sm text-tinta-2" role="status">
          {lolos.length ? `${lolos.length} item cocok` : 'Tidak ada yang cocok.'}{' '}
          <button type="button" onClick={() => { setCari(''); setSaring(null); }} className="font-semibold text-tembaga-tua underline underline-offset-4">Tampilkan semua</button>
        </p>
      )}

      {kategori.map((k, i) => {
        const daftar = lolos.filter((m) => m.kategori === k.id);
        if (adaSaring && !daftar.length) return null;
        return (
          <Fragment key={k.id}>
            <section id={`k-${k.id}`} className="bagian scroll-mt-[7.5rem] lg:scroll-mt-20" aria-labelledby={`judul-${k.id}`}>
              <JudulBagian id={`judul-${k.id}`} jp={k.jp}>{k.nama}</JudulBagian>
              <div className="bagian-isi">
                <p className="max-w-2xl text-[0.95rem] leading-relaxed text-tinta-2">{k.catatan}</p>
                <ul className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {daftar.map((m) => <Kartu key={m.id} m={m} onPilih={pilih} />)}
                </ul>
              </div>
            </section>
            {i === 2 && !adaSaring && selingan}
          </Fragment>
        );
      })}

      <LembarPilihan item={dipilih} onTutup={() => setDipilih(null)} onTambah={tambahDariLembar} />

      <div aria-live="polite" className="toast-wadah">
        {toast && <p className="muncul rounded-[3px] bg-sumi px-4 py-2 text-sm font-medium text-kertas shadow-lg ring-1 ring-tembaga/60">{toast}</p>}
      </div>
    </section>
  );
}
