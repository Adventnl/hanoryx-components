import { useEffect, useState } from 'react';
import c from "../progress.module.css";

/* 38 */ export function DownloadButton() {
  const [s, setS] = useState(0);
  useEffect(() => {
    if (s <= 0 || s >= 100) return undefined;
    const id = setTimeout(() => setS((v) => Math.min(100, v + 6)), 90);
    return () => clearTimeout(id);
  }, [s]);
  return (
    <button type="button" className={c.dl} style={{ '--prog-v': s / 100 }} data-done={s >= 100} aria-busy={s > 0 && s < 100} onClick={() => setS(s === 0 || s >= 100 ? 1 : s)}>
      <i aria-hidden="true" /><span>{s === 0 ? 'Download' : s >= 100 ? 'Done · open' : `${s}%`}</span>
    </button>
  );
}
