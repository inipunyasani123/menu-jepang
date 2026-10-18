import Teishoku from './Teishoku';

/**
 * Ilustrasi SVG sederhana per item, parametrik lewat `jenis` dan `warna` (aksen topping/kuah).
 * Semuanya hiasan (aria-hidden); nama item ada di teks kartu.
 */
const RIM = '#cfc7b8';
const PUTIH = '#f7f4ec';
const NORI = '#1f2a1f';
const BENING = '#8ea06b';

function Ramen({ warna, udon }) {
  return (
    <>
      <circle cx="50" cy="50" r="44" fill="#3a2a22" stroke="#b1683a" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="36" fill={warna} />
      {udon ? (
        <path d="M24 46c10-8 18 6 28-2s16 8 26 0M22 56c10-8 18 6 28-2s18 8 28 0M28 66c8-6 16 4 24-2s14 6 22 0" stroke="#f3eee2" strokeWidth="4" fill="none" strokeLinecap="round" />
      ) : (
        <path d="M22 44c8-6 14 4 22-2s14 6 22 0 10 4 16 0M20 52c8-6 14 4 22-2s14 6 22 0 10 4 16 0M22 60c8-6 14 4 22-2s14 6 22 0 10 4 16 0M26 68c8-6 14 4 22-2s12 6 20 0" stroke="#efe2b8" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      )}
      <circle cx="36" cy="38" r="10" fill={udon ? '#8a5a36' : '#c9873e'} stroke="#6a3a22" strokeWidth="1" />
      {!udon && <circle cx="36" cy="38" r="4" fill="#e9c58d" />}
      {!udon && (<><ellipse cx="62" cy="34" rx="9" ry="7" fill={PUTIH} /><circle cx="62" cy="34" r="4" fill="#e6a640" /></>)}
      <rect x="66" y="48" width="14" height="20" rx="1" fill={NORI} transform="rotate(-12 73 58)" />
      {[[44, 70], [52, 72], [58, 66], [30, 60]].map(([x, y], i) => (<circle key={i} cx={x} cy={y} r="2" fill="#6f9a4e" />))}
    </>
  );
}

function Donburi({ warna }) {
  return (
    <>
      <path d="M12 50h76c0 18-10 34-38 34S12 68 12 50Z" fill="#3a2a22" stroke="#b1683a" strokeWidth="1.5" />
      <path d="M36 82h28l-2 6H38Z" fill="#2a2725" stroke="#b1683a" />
      <path d="M16 50c6-16 20-24 34-24s28 8 34 24Z" fill={PUTIH} />
      <path d="M22 44c8-12 18-16 28-16s20 4 28 16c-6 3-14 5-28 5s-22-2-28-5Z" fill={warna} stroke="#4a2e1c" strokeWidth="0.8" />
      <path d="M12 50h76" stroke="#b1683a" strokeWidth="1.5" />
      {[[36, 36], [50, 32], [64, 36]].map(([x, y], i) => (<circle key={i} cx={x} cy={y} r="2" fill="#6f9a4e" />))}
    </>
  );
}

function Roll({ warna }) {
  const p = [[26, 48], [50, 40], [74, 48], [38, 66], [62, 66]];
  return (
    <>
      <rect x="6" y="26" width="88" height="56" rx="6" fill="#2a2725" stroke="#b1683a" strokeWidth="1.5" />
      {p.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="11" fill={NORI} />
          <circle cx={x} cy={y} r="8.5" fill={PUTIH} />
          <circle cx={x} cy={y} r="4" fill={warna} />
        </g>
      ))}
      <path d="M78 70c4 0 8 2 10 6" stroke="#6f9a4e" strokeWidth="2" fill="none" />
    </>
  );
}

function Sashimi() {
  return (
    <>
      <rect x="8" y="24" width="84" height="56" rx="4" fill="#2a2725" stroke="#b1683a" strokeWidth="1.5" />
      <path d="M14 62c6-14 16-20 30-20-4 10-12 20-30 20Z" fill="#6f9a4e" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(${30 + i * 11} ${34 + i * 3}) rotate(20)`}>
          <rect x="0" y="0" width="12" height="30" rx="3" fill="#e2764a" stroke="#b5522c" strokeWidth="0.8" />
          <path d="M2 6c4 2 6 6 8 10M2 16c4 2 6 6 8 10" stroke="#f6c7ad" strokeWidth="1.2" />
        </g>
      ))}
      <path d="M72 68c6-2 10-2 14 2" stroke={PUTIH} strokeWidth="3" strokeLinecap="round" />
    </>
  );
}

function Agemono({ warna }) {
  return (
    <>
      <path d="M8 40h84l-8 38H16Z" fill="#8a5a36" stroke="#5a3a20" strokeWidth="1.5" />
      {[16, 26, 36, 46, 56, 66, 76].map((x) => (<path key={x} d={`M${x} 40 l-3 38`} stroke="#5a3a20" strokeWidth="1" />))}
      <path d="M8 48h84M10 58h80M12 68h76" stroke="#5a3a20" strokeWidth="1" />
      <path d="M22 40c-2-10 6-16 14-14 8 2 12 8 8 14Z" fill={warna} stroke="#6a3a18" strokeWidth="1" />
      <path d="M46 40c0-12 10-18 18-14 8 4 10 10 6 14Z" fill={warna} stroke="#6a3a18" strokeWidth="1" />
      <path d="M68 40c-2-8 6-14 12-12 6 2 10 6 8 12Z" fill={warna} stroke="#6a3a18" strokeWidth="1" />
      <circle cx="80" cy="34" r="6" fill="#e6cf5a" stroke="#b09a30" />
    </>
  );
}

function Gyoza() {
  return (
    <>
      <rect x="6" y="28" width="88" height="50" rx="5" fill="#2a2725" stroke="#b1683a" strokeWidth="1.5" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${12 + i * 26} 44)`}>
          <path d="M0 14c2-10 10-16 20-16s18 6 20 16Z" fill="#efdfb8" stroke="#b07a3a" strokeWidth="1.2" />
          <path d="M4 14c0-8 6-10 10-8M14 6c4-2 10 0 12 4M26 4c6 0 10 4 10 10" stroke="#b07a3a" strokeWidth="1" fill="none" />
          <path d="M2 14h36" stroke="#c9873e" strokeWidth="2.5" />
        </g>
      ))}
      <circle cx="84" cy="68" r="6" fill="#4a2e1c" stroke="#b1683a" />
    </>
  );
}

function Edamame() {
  return (
    <>
      <path d="M14 46h72c0 16-10 30-36 30S14 62 14 46Z" fill="#3a2a22" stroke="#b1683a" strokeWidth="1.5" />
      {[[22, 40, -20], [42, 30, 10], [60, 36, -30], [74, 42, 20]].map(([x, y, r], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
          <path d="M0 6c6-8 20-8 26 0-6 8-20 8-26 0Z" fill="#7fa552" stroke="#4e6b3a" strokeWidth="1" />
          <circle cx="7" cy="6" r="2.2" fill="#5f8a3a" /><circle cx="13" cy="6" r="2.2" fill="#5f8a3a" /><circle cx="19" cy="6" r="2.2" fill="#5f8a3a" />
        </g>
      ))}
    </>
  );
}

function Miso() {
  return (
    <>
      <circle cx="50" cy="50" r="42" fill="#3a2a22" stroke="#b1683a" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="33" fill="#8a5a36" />
      <rect x="32" y="38" width="14" height="14" rx="2" fill="#f3efe4" />
      <rect x="54" y="54" width="12" height="12" rx="2" fill="#f3efe4" />
      <path d="M36 62c8-6 14 2 22-4M58 36c4 6 10 6 14 14" stroke="#4e6b3a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {[[48, 34], [66, 46], [40, 68]].map(([x, y], i) => (<circle key={i} cx={x} cy={y} r="2" fill="#8fa863" />))}
    </>
  );
}

function Nasi() {
  return (
    <>
      <path d="M14 52h72c0 16-10 30-36 30S14 68 14 52Z" fill="#3a2a22" stroke="#b1683a" strokeWidth="1.5" />
      <path d="M18 52c6-16 18-24 32-24s26 8 32 24Z" fill={PUTIH} />
      {[[30, 44], [42, 36], [56, 36], [68, 44], [50, 46]].map(([x, y], i) => (<ellipse key={i} cx={x} cy={y} rx="4" ry="2.2" fill="none" stroke={RIM} strokeWidth="0.9" />))}
      <path d="M44 86h12" stroke="#b1683a" strokeWidth="1.5" />
    </>
  );
}

function Ocha({ dingin }) {
  return (
    <>
      <path d="M26 34h40v30a10 10 0 0 1-10 10H36a10 10 0 0 1-10-10V34Z" fill={dingin ? '#dfe7e4' : '#5c5753'} stroke={RIM} strokeWidth="1.5" />
      <path d="M28 44h36v18a8 8 0 0 1-8 8H36a8 8 0 0 1-8-8V44Z" fill={BENING} />
      {dingin ? (
        <>
          <rect x="34" y="46" width="10" height="10" rx="2" fill="#f3f7f5" opacity="0.9" transform="rotate(-10 39 51)" />
          <rect x="48" y="50" width="9" height="9" rx="2" fill="#f3f7f5" opacity="0.9" transform="rotate(15 52 54)" />
          <path d="M66 28l6 18" stroke="#f3f7f5" strokeWidth="3" strokeLinecap="round" />
        </>
      ) : (
        <path d="M40 26c0-4-4-6-2-10M50 26c0-4-4-6-2-10M60 26c0-4-4-6-2-10" stroke="#b1683a" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      )}
      <path d="M34 74h24" stroke={RIM} strokeWidth="1.5" />
    </>
  );
}

function Matcha() {
  return (
    <>
      <path d="M22 36h46v26a12 12 0 0 1-12 12H34a12 12 0 0 1-12-12V36Z" fill="#faf7f1" stroke={RIM} strokeWidth="1.5" />
      <path d="M68 42h6a7 7 0 0 1 0 14h-6" fill="none" stroke={RIM} strokeWidth="1.5" />
      <path d="M24 44h42v6c-6 4-12 4-21 4s-15 0-21-4Z" fill="#8fb27a" />
      <path d="M30 40c8-4 14 2 22-2s8 2 12 2" stroke="#d9e6c8" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="46" cy="46" r="3" fill="#5f8a3a" />
    </>
  );
}

function Ramune() {
  return (
    <>
      <path d="M40 14h20v10l6 10v8l-6 6v30a6 6 0 0 1-6 6H46a6 6 0 0 1-6-6V48l-6-6v-8l6-10Z" fill="#bfdbe6" stroke="#5f8aa0" strokeWidth="1.5" />
      <rect x="42" y="10" width="16" height="6" rx="2" fill="#5f8aa0" />
      <circle cx="50" cy="40" r="5" fill="#eaf5f8" stroke="#5f8aa0" strokeWidth="1.2" />
      <rect x="38" y="56" width="24" height="16" rx="2" fill="#2e5fa0" />
      <path d="M44 62h12M44 66h8" stroke="#eaf5f8" strokeWidth="1.5" />
    </>
  );
}

function Mochi() {
  return (
    <>
      <rect x="6" y="40" width="88" height="40" rx="5" fill="#2a2725" stroke="#b1683a" strokeWidth="1.5" />
      {[[26, '#9fbf78'], [50, '#e8a3b1'], [74, '#7a7267']].map(([x, c], i) => (
        <g key={i}>
          <ellipse cx={x} cy="48" rx="13" ry="11" fill={c} />
          <path d={`M${x - 6} 42c2-2 8-2 10 2`} stroke="#faf7f1" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8" />
        </g>
      ))}
    </>
  );
}

function Dorayaki() {
  return (
    <>
      <ellipse cx="50" cy="40" rx="34" ry="12" fill="#c9873e" stroke="#8a5a28" strokeWidth="1.2" />
      <path d="M16 40v8c0 6 15 10 34 10s34-4 34-10v-8" fill="#8a4a3a" />
      <ellipse cx="50" cy="56" rx="34" ry="12" fill="#c9873e" stroke="#8a5a28" strokeWidth="1.2" />
      <path d="M34 36c6-2 10-2 16 0" stroke="#e2b56a" strokeWidth="2" fill="none" strokeLinecap="round" />
    </>
  );
}

export default function Ilustrasi({ data = {}, className = '' }) {
  const { jenis, warna = '#8a5a36', utama, dingin } = data;
  if (jenis === 'teishoku') return <Teishoku utama={utama} mini className={className} />;
  const isi = {
    ramen: <Ramen warna={warna} />,
    udon: <Ramen warna={warna} udon />,
    donburi: <Donburi warna={warna} />,
    roll: <Roll warna={warna} />,
    sashimi: <Sashimi />,
    agemono: <Agemono warna={warna} />,
    gyoza: <Gyoza />,
    edamame: <Edamame />,
    miso: <Miso />,
    nasi: <Nasi />,
    ocha: <Ocha dingin={dingin} />,
    matcha: <Matcha />,
    ramune: <Ramune />,
    mochi: <Mochi />,
    dorayaki: <Dorayaki />,
  }[jenis];
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      {isi}
    </svg>
  );
}
