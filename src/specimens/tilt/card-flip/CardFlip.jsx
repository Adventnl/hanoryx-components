import { useToggle } from "../../../stage/hooks";
import c from "../tilt.module.css";

/* ---------- 02 flips, hinges and stacks ---------- */

export function CardFlip() {
  const [on, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="Card; flip it over" onClick={flip}>
      <span className={c.stage}>
        <span className={c.flipper} data-on={on}>
          <span className={`${c.card} ${c.face}`}><b>Front</b></span>
          <span className={`${c.card} ${c.face} ${c.backFace}`}><b>Back</b></span>
        </span>
      </span>
    </button>
  );
}
