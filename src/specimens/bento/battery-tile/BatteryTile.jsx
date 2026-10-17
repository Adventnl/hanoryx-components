import { useToggle } from "../../../stage/hooks";
import c from "../bento.module.css";
import { Tile } from "../shared";

export function BatteryTile() {
  const [full, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={full} aria-label="Battery; plug in or unplug" onClick={flip}>
      <Tile k="Battery">
        <span className={c.batt} data-full={full}><i /><b /></span>
        <b className={c.v}>{full ? '92%' : '21%'}</b>
      </Tile>
    </button>
  );
}
