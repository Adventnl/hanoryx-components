import { useDrag } from "../../../stage/hooks";
import c from "../switchboard.module.css";

/* 4 */ export function SlideLock() {
  const [v, bind] = useDrag({ init: 0 });
  return (
    <div className={c.slide} {...bind} aria-label="Slide to unlock" style={{ ...bind.style, '--v': v }} data-done={v > 0.9}>
      <span>{v > 0.9 ? 'UNLOCKED' : 'SLIDE TO UNLOCK'}</span><i />
    </div>
  );
}
