import { ALERGEN } from '@/lib/data';

const dasar = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' };
const Svg = ({ children, className = '' }) => (
  <svg viewBox="0 0 20 20" className={className} aria-hidden="true" focusable="false" {...dasar}>{children}</svg>
);

/* Lima ikon alergen kecil: gandum (bulir), telur, kedelai (polong), ikan, susu (botol). */
const IKON = {
  gandum: (c) => <Svg className={c}><path d="M10 18V7M10 7c-3 0-4-2-4-4 2 0 4 1 4 4ZM10 7c3 0 4-2 4-4-2 0-4 1-4 4ZM10 11c-3 0-4-2-4-4 2 0 4 1 4 4ZM10 11c3 0 4-2 4-4-2 0-4 1-4 4ZM10 15c-3 0-4-2-4-4 2 0 4 1 4 4ZM10 15c3 0 4-2 4-4-2 0-4 1-4 4Z" /></Svg>,
  telur: (c) => <Svg className={c}><path d="M10 2.5c3 0 6 4.5 6 9a6 6 0 0 1-12 0c0-4.5 3-9 6-9Z" /></Svg>,
  kedelai: (c) => <Svg className={c}><path d="M5 15c-2-3 0-9 4-11 4-2 8 0 7 3-1 4-7 10-11 8Z" /><circle cx="8" cy="11" r="1.1" fill="currentColor" stroke="none" /><circle cx="11.5" cy="8" r="1.1" fill="currentColor" stroke="none" /></Svg>,
  ikan: (c) => <Svg className={c}><path d="M2.5 10c2.5-3.5 6-5 9-5 2.5 0 4.5 2 6 5-1.5 3-3.5 5-6 5-3 0-6.5-1.5-9-5Z" /><path d="M14 10l3.5-3.5M14 10l3.5 3.5" /><circle cx="6.5" cy="9.5" r="0.9" fill="currentColor" stroke="none" /></Svg>,
  susu: (c) => <Svg className={c}><path d="M7 2.5h6v3l2 4V17a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9.5l2-4v-3Z" /><path d="M5 12h10" /></Svg>,
};

export function IkonAlergen({ id, className = 'h-4 w-4' }) {
  return IKON[id]?.(className) ?? null;
}

/** Deretan ikon alergen suatu item, dengan nama alergen untuk pembaca layar. */
export default function Alergen({ daftar = [], className = '' }) {
  if (!daftar.length) return <span className={`whitespace-nowrap text-[0.7rem] font-medium ${className}`}>Bebas 5 alergen</span>;
  const nama = ALERGEN.filter((a) => daftar.includes(a.id)).map((a) => a.label);
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`} title={`Mengandung: ${nama.join(', ')}`}>
      <span className="sr-only">Mengandung {nama.join(', ')}</span>
      {ALERGEN.filter((a) => daftar.includes(a.id)).map((a) => (
        <IkonAlergen key={a.id} id={a.id} />
      ))}
    </span>
  );
}
