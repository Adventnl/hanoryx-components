import c from './bento.module.css';
import { SPARK, Tile } from './shared';

export function SparkTile() {
  return (
    <div className={c.fig} role="img" aria-label="A trend line drawing itself">
      <Tile k="Visits">
        <svg className={`${c.spark} ${c.draw}`} viewBox="0 0 100 24" aria-hidden="true"><path pathLength="1" d={SPARK} /><circle cx="100" cy="5" r="2" /></svg>
        <b className={c.v}>4,218</b>
      </Tile>
    </div>
  );
}
