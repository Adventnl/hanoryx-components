import { useToggle } from "../../../stage/hooks";
import c from "../fold.module.css";
import { Pleat } from "../shared";

/* ---------- 02 folds ---------- */

export function AccordionFold() {
  const [on, flip] = useToggle(true);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="A leaflet; fold or open it" onClick={flip}>
      <span className={c.leafSmall} style={{ '--fold': on ? 0 : 150, '--o': on ? 1 : 0 }}>
        <Pleat k={0} />
      </span>
    </button>
  );
}
