import { useDrag } from "../../../stage/hooks";
import c from "../faders.module.css";

/* 4 */ export function VUFader() {
  const [v, bind] = useDrag({ mode: 'y', init: 0.55 });
  return (
    <div className={c.vu}>
      <div className={c.slotV} {...bind} aria-label="Fader with meter" style={{ ...bind.style, '--v': v }}><i /></div>
      <ol>{Array.from({ length: 14 }, (_, i) => <li key={i} data-on={i / 13 <= v} data-hot={i > 10} />)}</ol>
    </div>
  );
}
