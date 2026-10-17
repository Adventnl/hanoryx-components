import { useMemo } from 'react';
import { useTick } from "../../../stage/hooks";
import c from "../studio.module.css";

/* 15 */ export function Spectrogram() {
  const t = useTick(120);
  const cells = useMemo(() => Array.from({ length: 12 * 8 }, (_, i) => (i * 37 + 11) % 100), []);
  return <div className={c.gram} role="img" aria-label="Spectrogram">{cells.map((v, i) => <i key={i} style={{ '--h': ((Math.floor(i / 8) + t) % 12) * 28 + (v % 30), '--l': 22 + (((Math.floor(i / 8) * 7 + (i % 8) * 13 + t * 5) % 100) / 100) * 40 }} />)}</div>;
}
