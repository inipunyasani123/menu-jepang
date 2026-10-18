const dasar = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
const Svg = ({ children, className = '', ...p }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" {...dasar} {...p}>{children}</svg>
);

export const Plus = (p) => <Svg {...p}><path d="M12 5v14M5 12h14" /></Svg>;
export const Minus = (p) => <Svg {...p}><path d="M5 12h14" /></Svg>;
export const Tutup = (p) => <Svg {...p}><path d="M6 6l12 12M18 6L6 18" /></Svg>;
export const Cari = (p) => <Svg {...p}><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2" /></Svg>;
export const Centang = (p) => <Svg {...p}><path d="m5 12.5 4.5 4.5L19 7.5" /></Svg>;
export const Panah = (p) => <Svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>;
export const Nampan = (p) => <Svg {...p}><rect x="3" y="9" width="18" height="10" rx="1.5" /><path d="M3 13h18M8 9V6h8v3" /></Svg>;
export const Sampah = (p) => <Svg {...p}><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" /></Svg>;
export const Salin = (p) => <Svg {...p}><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a1 1 0 0 1 1-1h10" /></Svg>;
export const Pindai = (p) => <Svg {...p}><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M4 12h16" /></Svg>;
export const Meja = (p) => <Svg {...p}><path d="M3 8h18M6 8v10M18 8v10M6 13h12" /></Svg>;
export const Jam = (p) => <Svg {...p}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></Svg>;

/* Ikon kategori untuk bilah bawah */
export const Teishoku = (p) => <Svg {...p}><rect x="2.5" y="6" width="19" height="12" rx="1.5" /><circle cx="8" cy="12" r="2.5" /><circle cx="15.5" cy="12" r="2.5" /></Svg>;
export const Ramen = (p) => <Svg {...p}><path d="M3 11h18a9 9 0 0 1-18 0Z" /><path d="M6 11c0-3 2-5 4-5M12 11c0-4 2-6 5-6M18 4l-4 7" /></Svg>;
export const Donburi = (p) => <Svg {...p}><path d="M4 12h16a8 8 0 0 1-16 0Z" /><path d="M6 12c1-3 3.5-5 6-5s5 2 6 5" /></Svg>;
export const Sushi = (p) => <Svg {...p}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><path d="M12 8v8M8 12h8" /></Svg>;
export const Agemono = (p) => <Svg {...p}><path d="M3 10h18l-2 9H5l-2-9Z" /><path d="M7 10V8a5 5 0 0 1 10 0v2M7 14h10" /></Svg>;
export const Ocha = (p) => <Svg {...p}><path d="M5 9h12v6a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V9Z" /><path d="M9 4c0 1-1 1.5-1 2.5M13 4c0 1-1 1.5-1 2.5" /></Svg>;

export const IKON_KATEGORI = { teishoku: Teishoku, ramen: Ramen, donburi: Donburi, sushi: Sushi, agemono: Agemono, ocha: Ocha };
