/**
 * Kepala bagian: label Jepang kecil (hiasan) + judul. Di layar lebar, judul ditulis vertikal (writing-mode)
 * di kolom kiri dan menempel saat digulir; di ponsel mendatar.
 */
export default function JudulBagian({ id, jp, children, gelap = false }) {
  return (
    <div className={`kepala-bagian ${gelap ? 'kepala-gelap' : ''}`}>
      <span aria-hidden="true" className="kepala-jp jp">{jp}</span>
      <h2 id={id} className="kepala-judul">{children}</h2>
    </div>
  );
}
