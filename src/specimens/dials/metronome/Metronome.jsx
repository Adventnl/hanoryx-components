import { useDrag } from "../../../stage/hooks";
import c from "../dials.module.css";

/* 34 */ export function Metronome() {
  const [v, bind] = useDrag({ init: 0.35 });
  const bpm = Math.round(40 + v * 160);
  return (
    <div className={c.metro}>
      <div className={c.pend} style={{ '--d': `${(120 / bpm).toFixed(2)}s` }}><i /></div>
      <div className={c.track} {...bind} aria-label="Tempo" style={{ ...bind.style, '--v': v }}><u /></div>
      <output>{bpm} BPM</output>
    </div>
  );
}
