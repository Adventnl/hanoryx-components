import { useToggle } from "../../../stage/hooks";
import { Ico } from "../../../stage/components/icons/icons";
import c from "../docks.module.css";

/* 12 */ export function SpeedDial() {
  const [open, flip] = useToggle();
  return (
    <div className={c.dial} data-open={open}>
      {['camera', 'image', 'pen'].map((n, k) => <button key={n} type="button" aria-label={n} tabIndex={open ? 0 : -1} style={{ '--k': k + 1 }}><Ico n={n} /></button>)}
      <button type="button" aria-expanded={open} aria-label="Speed dial" onClick={flip}><Ico n="plus" /></button>
    </div>
  );
}
