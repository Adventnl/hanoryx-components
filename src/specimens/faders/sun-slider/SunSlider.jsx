import c from "../faders.module.css";
import { Track } from "../shared";

/* 28 */ export function SunSlider() {
  return (
    <Track cls={c.sun} label="Brightness" init={0.5}>
      {(v) => <><svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r={5 + v * 5} />{Array.from({ length: 8 }, (_, i) => <path key={i} d="M20 3v5" style={{ transform: `rotate(${i * 45}deg) scaleY(${0.5 + v})`, transformOrigin: '20px 20px' }} />)}</svg><i /></>}
    </Track>
  );
}
