import { useCycle } from "../../../stage/hooks";
import c from "../glyphs.module.css";

const AMPS = ['serif', 'sans', 'mono', 'outline'];

export function Ampersand() {
  const k = useCycle(AMPS.length, 1700);
  return (
    <div className={c.fig} role="img" aria-label="An ampersand in four different styles">
      <span key={k} className={`${c.amp} ${c[`amp_${AMPS[k]}`]}`}>&amp;</span>
      <span className={c.note}>{AMPS[k]}</span>
    </div>
  );
}
