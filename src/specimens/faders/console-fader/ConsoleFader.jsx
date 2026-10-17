import { useDrag } from "../../../stage/hooks";
import c from "../faders.module.css";

/* 1 */ export function ConsoleFader() {
  const [v, bind] = useDrag({ mode: 'y', init: 0.7 });
  return (
    <div className={c.console} style={{ '--v': v }}>
      <ol>{['+10', '0', '−10', '−20', '−40', '−∞'].map((t) => <li key={t}>{t}</li>)}</ol>
      <div className={c.slot} {...bind} aria-label="Channel fader" style={{ ...bind.style, '--v': v }}><i /></div>
      <output>{v > 0.01 ? `${((v - 0.7) * 33).toFixed(1)} dB` : '−∞'}</output>
    </div>
  );
}
