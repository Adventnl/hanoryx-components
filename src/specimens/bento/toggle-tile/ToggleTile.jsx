import { useToggle } from "../../../stage/hooks";
import c from "../bento.module.css";
import { Tile } from "../shared";

/* ---------- 02 switches and lists ---------- */

export function ToggleTile() {
  const [on, flip] = useToggle(true);
  return (
    <button type="button" role="switch" aria-checked={on} className={`${c.fig} ${c.reset}`} onClick={flip}>
      <Tile k="Alerts">
        <span className={c.sw} data-on={on}><i /></span>
        <b className={c.v}>{on ? 'On' : 'Off'}</b>
      </Tile>
    </button>
  );
}
