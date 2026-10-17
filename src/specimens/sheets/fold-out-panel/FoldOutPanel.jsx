import { useToggle } from "../../../stage/hooks";
import c from "../sheets.module.css";
import { Stage } from "../shared";

/* 26 */ export function FoldOutPanel() {
  const [on, set] = useToggle();
  return <Stage label="Fold-out panel"><div className={c.hinge} data-on={on}><button type="button" aria-expanded={on} onClick={set}>Fold</button><div inert={!on || undefined}><b>Tucked away</b></div></div></Stage>;
}
