// Diagram komposisi teishoku, tampak atas: nasi, sup miso, lauk utama, acar, ocha di atas nampan lacquer.
// Parametrik lewat `utama` (katsu | saba | karaage | tempura). `mini` = tanpa nomor penunjuk, untuk kartu item.

const KERTAS = '#efe9dd';
const NASI = '#f7f4ec';

function Lauk({ utama }) {
  if (utama === 'saba') {
    return (
      <g>
        <path d="M138 44c20-14 70-16 112-6 6 2 6 8 0 11-42 10-92 8-112-6Z" fill="#8fa0a8" stroke="#5d6b74" strokeWidth="1.5" />
        <path d="M150 48c10 5 24 8 40 8M170 42c10 6 26 9 46 8M196 40c8 5 20 8 36 8" stroke="#5d6b74" strokeWidth="1.2" fill="none" />
        <path d="M138 44c-6 3-8 10-4 18" fill="none" stroke="#5d6b74" strokeWidth="1.5" />
        <circle cx="258" cy="80" r="11" fill={NASI} stroke="#cfc7b8" />
        <circle cx="140" cy="84" r="7" fill="#d9c84a" stroke="#a8963a" />
        <path d="M133 84h14" stroke="#a8963a" strokeWidth="0.8" />
      </g>
    );
  }
  if (utama === 'karaage') {
    const b = [[150, 56], [176, 46], [206, 54], [232, 46], [258, 58], [190, 74]];
    return (
      <g>
        <path d="M128 44c14-8 24-10 40-8" stroke="#8fa863" strokeWidth="1.3" fill="none" />
        <path d="M126 52c14-8 26-10 42-6" stroke="#8fa863" strokeWidth="1.3" fill="none" />
        {b.map(([x, y], i) => (
          <path key={i} d={`M${x - 12} ${y}c-2-9 6-14 14-12 8 2 14 6 10 14-3 7-10 10-16 7-4-2-7-5-8-9Z`} fill="#c9873e" stroke="#8a5a28" strokeWidth="1.2" />
        ))}
        <circle cx="262" cy="86" r="7" fill="#d9c84a" stroke="#a8963a" />
      </g>
    );
  }
  if (utama === 'tempura') {
    return (
      <g>
        <path d="M150 80c6-30 18-44 34-56 2 6 0 16-8 28-6 10-14 20-26 28Z" fill="#e2b56a" stroke="#9a6a2a" strokeWidth="1.2" />
        <path d="M176 82c8-20 22-30 42-32-2 10-8 20-16 26-8 5-16 8-26 6Z" fill="#dcae5e" stroke="#9a6a2a" strokeWidth="1.2" />
        <rect x="222" y="44" width="34" height="18" rx="7" transform="rotate(-18 239 53)" fill="#c9a0c2" stroke="#7b5a7b" strokeWidth="1.2" />
        <rect x="226" y="68" width="38" height="16" rx="6" transform="rotate(8 245 76)" fill="#e5a35a" stroke="#9a6a2a" strokeWidth="1.2" />
        <circle cx="140" cy="84" r="7" fill="#f3f0e8" stroke="#bdb5a5" />
      </g>
    );
  }
  // katsu
  return (
    <g>
      <path d="M128 40c16-8 28-10 44-8M126 48c16-8 30-10 46-6M128 56c14-6 26-8 42-6" stroke="#8fa863" strokeWidth="1.3" fill="none" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={176 + i * 19} y="30" width="15" height="46" rx="4" transform="skewX(-8)" fill="#d9a052" stroke="#8a5a28" strokeWidth="1.2" />
      ))}
      <path d="M176 76h92" stroke="#6a3a22" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <circle cx="262" cy="90" r="7" fill="#d9c84a" stroke="#a8963a" />
    </g>
  );
}

function Nomor({ x, y, n }) {
  return (
    <g>
      <circle cx={x} cy={y} r="9" fill="#1b1a19" stroke="#d6986a" strokeWidth="1.2" />
      <text x={x} y={y + 3.6} textAnchor="middle" fontSize="10" fontWeight="700" fill="#faf7f1" fontFamily="var(--font-sans)">{n}</text>
    </g>
  );
}

export default function Teishoku({ utama = 'saba', mini = false, className = '' }) {
  return (
    <svg viewBox="0 0 320 200" className={className} aria-hidden="true" focusable="false">
      {/* nampan */}
      <rect x="6" y="6" width="308" height="188" rx="8" fill="#2a2725" stroke="#b1683a" strokeWidth="1.5" />
      <rect x="12" y="12" width="296" height="176" rx="5" fill="none" stroke="#b1683a" strokeWidth="0.8" opacity="0.6" />
      {/* piring lauk utama */}
      <rect x="120" y="22" width="156" height="78" rx="8" fill={KERTAS} stroke="#cfc7b8" />
      <Lauk utama={utama} />
      {/* nasi */}
      <circle cx="64" cy="128" r="40" fill="#3a2a22" stroke="#b1683a" strokeWidth="1.2" />
      <circle cx="64" cy="128" r="32" fill={NASI} />
      {[[-14, -8], [-4, -16], [8, -10], [14, 2], [4, 10], [-10, 8], [0, -2], [-16, 4], [12, -18]].map(([dx, dy], i) => (
        <ellipse key={i} cx={64 + dx} cy={128 + dy} rx="3.6" ry="2" transform={`rotate(${(i * 37) % 180} ${64 + dx} ${128 + dy})`} fill="none" stroke="#cfc7b8" strokeWidth="0.9" />
      ))}
      {/* sup miso */}
      <circle cx="150" cy="140" r="34" fill="#3a2a22" stroke="#b1683a" strokeWidth="1.2" />
      <circle cx="150" cy="140" r="27" fill="#8a5a36" />
      <rect x="136" y="128" width="11" height="11" rx="1.5" fill="#f3efe4" />
      <rect x="154" y="142" width="10" height="10" rx="1.5" fill="#f3efe4" />
      <path d="M142 152c6-4 12 2 18-2M158 126c4 4 10 4 14 10" stroke="#4e6b3a" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="166" cy="134" r="1.6" fill="#8fa863" /><circle cx="140" cy="146" r="1.6" fill="#8fa863" />
      {/* acar */}
      <circle cx="230" cy="150" r="24" fill={KERTAS} stroke="#cfc7b8" />
      <circle cx="222" cy="146" r="7" fill="#e6cf5a" stroke="#b09a30" strokeWidth="0.8" />
      <circle cx="236" cy="152" r="6" fill="#e6cf5a" stroke="#b09a30" strokeWidth="0.8" />
      <path d="M226 158c4-3 8-3 12 0 2 2 2 5 0 6-5 2-10 2-14 0-2-2-1-5 2-6Z" fill="#8a4a7a" />
      {/* ocha */}
      <circle cx="284" cy="160" r="18" fill="#5c5753" stroke="#cfc7b8" strokeWidth="1.2" />
      <circle cx="284" cy="160" r="13" fill="#9ab06e" />
      <circle cx="284" cy="160" r="9" fill="#8ea06b" />
      {/* sumpit */}
      <path d="M30 184 L186 178" stroke="#c9873e" strokeWidth="3" strokeLinecap="round" />
      <path d="M30 189 L186 184" stroke="#c9873e" strokeWidth="3" strokeLinecap="round" />
      {!mini && (
        <g>
          <Nomor x="30" y="104" n="1" />
          <Nomor x="186" y="118" n="2" />
          <Nomor x="118" y="28" n="3" />
          <Nomor x="256" y="130" n="4" />
          <Nomor x="298" y="140" n="5" />
        </g>
      )}
    </svg>
  );
}
