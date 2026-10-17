import { useTick } from "../../../stage/hooks";
import c from "../signals.module.css";

/* 29 */ export function MorseLamp() {
  const t = useTick(380);
  // ··· --- ··· as on and off steps
  const seq = [1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0];
  return <span className={c.morse} data-on={seq[t % seq.length] === 1} role="img" aria-label="Morse blinker sending S O S"><i /></span>;
}
