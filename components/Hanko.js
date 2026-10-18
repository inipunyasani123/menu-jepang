/**
 * Hanko: cap stempel merah persegi. Dipakai sebagai logo warung dan sebagai "stempel" di sudut kartu favorit.
 * Aksara Jepang hanya hiasan (aria-hidden); maknanya diberikan lewat `label` untuk pembaca layar.
 */
export default function Hanko({ teks = '赤', label, className = '', tegak = false, miring = false }) {
  return (
    <span className={`hanko ${miring ? 'hanko-miring' : ''} ${className}`} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : 'true'}>
      <span aria-hidden="true" className={`jp ${tegak ? 'jp-tegak' : ''}`}>{teks}</span>
    </span>
  );
}
