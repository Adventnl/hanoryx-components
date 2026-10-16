import c from './bento.module.css';
import { Tile } from './shared';

export function DonutTile() {
  return (
    <div className={c.fig} role="img" aria-label="A donut chart turning slowly: forty percent, thirty, thirty">
      <Tile k="Split">
        <span className={c.donut}><i /><b>3</b></span>
      </Tile>
    </div>
  );
}
