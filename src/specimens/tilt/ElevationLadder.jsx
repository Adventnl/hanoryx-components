import { useScan } from '../../stage/chartKit';
import c from './tilt.module.css';

export function ElevationLadder() {
  const [i, bind] = useScan(5, { axis: 'x', label: (k) => `Elevation ${k + 1}` });
  return (
    <div className={c.fig}>
      <div {...bind} className={c.ladder} aria-label="Five cards at five heights; move along them">
        {[0, 1, 2, 3, 4].map((k) => <i key={k} data-on={i === k} style={{ '--n': k + 1 }} />)}
      </div>
    </div>
  );
}
