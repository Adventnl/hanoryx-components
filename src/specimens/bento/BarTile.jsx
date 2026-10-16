import { useScan } from '../../stage/chartKit';
import c from './bento.module.css';
import { Tile } from './shared';

const BARS = [38, 62, 48, 86, 58, 72, 44];

export function BarTile() {
  const [i, bind] = useScan(BARS.length, { axis: 'x', label: (k) => `Day ${k + 1}: ${BARS[k]}` });
  return (
    <div className={c.fig}>
      <Tile k="This week">
        <div {...bind} className={c.barBox} aria-label="Bars; move along them to read a day">
          {BARS.map((h, k) => <i key={k} data-on={i === k} style={{ '--h': `${h}%` }}>{i === k ? <b>{h}</b> : null}</i>)}
        </div>
      </Tile>
    </div>
  );
}
