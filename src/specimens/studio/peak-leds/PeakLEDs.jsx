import c from "../studio.module.css";
import { useLevels } from "../shared";

/* 2 */ export function PeakLEDs() {
  const [l, r] = useLevels(2, 120);
  return (
    <div className={c.led} role="img" aria-label="Stereo level">
      {[l, r].map((v, ch) => <div key={ch}>{Array.from({ length: 14 }, (_, k) => <i key={k} data-on={k / 14 < v} style={{ '--k': k }} />)}</div>)}
    </div>
  );
}
