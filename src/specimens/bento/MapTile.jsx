import { usePoint } from '../../stage/chartKit';
import c from './bento.module.css';
import { Tile } from './shared';

export function MapTile() {
  const [p, bind] = usePoint();
  return (
    <div className={c.fig}>
      <Tile k={p ? `${(40 + p.y * 0.1).toFixed(3)}° N · ${(p.x * 0.1).toFixed(3)}° E` : 'Map'}>
        <div {...bind} className={c.map} aria-label="A small map; move over it to place the pin">
          <i className={c.pin} style={{ left: `${p ? p.x : 62}%`, top: `${p ? p.y : 42}%` }} />
        </div>
      </Tile>
    </div>
  );
}
