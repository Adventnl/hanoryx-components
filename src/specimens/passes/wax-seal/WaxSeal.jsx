import { useToggle } from "../../../stage/hooks";
import c from "../passes.module.css";

/* 16 */
export function WaxSeal() {
  const [open, flip] = useToggle(false);
  return (
    <div className={c.fig}>
      <button type="button" className={c.we} data-open={open} aria-pressed={open} aria-label="Wax-sealed envelope: press to break the seal" onClick={flip}>
        <span className={c.weBack} />
        <span className={c.weCard}><span className={c.kp}>You are invited</span><b>Admit one</b></span>
        <span className={c.weFront} />
        <span className={c.weFlap} />
        <span className={c.weSeal}><i /><i /></span>
      </button>
    </div>
  );
}
