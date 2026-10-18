'use client';

/** Tombol di luar daftar menu (mis. kartu teishoku hari ini) yang membuka lembar pilihan item tertentu. */
export default function TombolPilih({ id, className = '', children, ...p }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new CustomEvent('akagane:pilih', { detail: id }))} {...p}>
      {children}
    </button>
  );
}
