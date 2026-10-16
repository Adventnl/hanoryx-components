import { useCell } from '../../stage/chartKit';
import c from './bento.module.css';
import { Tile } from './shared';

const HEAT = Array.from({ length: 35 }, (_, i) => ((i * 37 + 11) % 10) / 10);

export function HeatTile() {
  const [at, bind] = useCell(5, 7, null);
  const k = at[0] >= 0 ? at[0] * 7 + at[1] : -1;
  return (
    <div className={c.fig}>
      <Tile k={k >= 0 ? `Day ${k + 1} · ${Math.round(HEAT[k] * 100)}` : 'Activity'}>
        <div {...bind} className={c.heat} aria-label="A heat map; move over it to read a day">
          {HEAT.map((v, i) => <i key={i} data-on={i === k} style={{ '--v': v }} />)}
        </div>
      </Tile>
    </div>
  );
}
