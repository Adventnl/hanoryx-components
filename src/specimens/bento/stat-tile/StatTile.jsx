import { useHot } from "../../../stage/chartKit";
import c from "../bento.module.css";
import { SPARK, Tile } from "../shared";

export function StatTile() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} {...bind}>
      <Tile k="Revenue">
        <b className={c.v}>$12.4k</b>
        <em className={c.delta}>8.2% this week</em>
        <svg className={c.spark} viewBox="0 0 100 24" aria-hidden="true"><path d={SPARK} /></svg>
      </Tile>
    </button>
  );
}
