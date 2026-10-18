import Hanko from './Hanko';

// Tepi bawah kain bergelombang: satu gelombang tiap 20 satuan, diregangkan selebar panel.
const GELOMBANG = 'M0 0H120V6C117 6 117 12 115 12S113 6 110 6 108 12 105 12 103 6 100 6 98 12 95 12 93 6 90 6 88 12 85 12 83 6 80 6 78 12 75 12 73 6 70 6 68 12 65 12 63 6 60 6 58 12 55 12 53 6 50 6 48 12 45 12 43 6 40 6 38 12 35 12 33 6 30 6 28 12 25 12 23 6 20 6 18 12 15 12 13 6 10 6 8 12 5 12 3 6 0 6Z';

function Panel({ tinggi, children }) {
  return (
    <div className={`noren-panel ${tinggi}`}>
      <div className="relative z-10 flex h-full flex-col items-center justify-between py-4">{children}</div>
      <svg className="noren-tepi" viewBox="0 0 120 12" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d={GELOMBANG} fill="currentColor" />
      </svg>
    </div>
  );
}

/** Noren: tirai kain tiga panel di bagian atas, menggantung dari bilah header. Semua teks di sini hiasan. */
export default function Noren() {
  return (
    <div className="noren" aria-hidden="true">
      <Panel tinggi="h-[8.25rem] sm:h-[11rem]">
        <span className="noren-latin">Akagane</span>
        <span className="jp jp-tegak noren-kanji">赤銅</span>
      </Panel>
      <Panel tinggi="h-[9rem] sm:h-[12rem]">
        <span className="noren-latin">Est. 2019</span>
        <Hanko teks="赤" className="h-12 w-12 text-[1.6rem] sm:h-16 sm:w-16 sm:text-[2.1rem]" />
        <span className="noren-latin">Jakarta</span>
      </Panel>
      <Panel tinggi="h-[8.5rem] sm:h-[11.5rem]">
        <span className="noren-latin">Shokudō</span>
        <span className="jp jp-tegak noren-kanji">食堂</span>
      </Panel>
    </div>
  );
}
