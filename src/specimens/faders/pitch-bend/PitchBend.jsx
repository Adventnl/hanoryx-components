import { useDrag } from "../../../stage/hooks";
import c from "../faders.module.css";

/* 26 */ export function PitchBend() {
  const [v, bind, set] = useDrag({ mode: 'y', init: 0.5 });
  return (
    <div className={c.pitch} {...bind} onPointerUp={() => set(0.5)} aria-label="Pitch bend, springs back" style={{ ...bind.style, '--v': v }}>
      <i /><span>{v > 0.52 ? 'UP' : v < 0.48 ? 'DOWN' : 'FLAT'}</span>
    </div>
  );
}
