import { useDrag } from "../../../stage/hooks";
import c from "../faders.module.css";

const WAVE = Array.from({ length: 44 }, (_, i) => 0.2 + 0.8 * Math.abs(Math.sin(i * 0.66) * Math.cos(i * 0.21)));

/* 23 */ export function WaveformScrub() {
  const [v, bind] = useDrag({ init: 0.4 });
  return (
    <div className={c.wave} {...bind} aria-label="Waveform scrubber" style={{ ...bind.style, '--v': v }}>
      {WAVE.map((h, i) => <i key={i} style={{ height: `${h * 100}%` }} data-on={i / WAVE.length <= v} />)}
    </div>
  );
}
