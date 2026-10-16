import { useHot } from '../../stage/chartKit';
import c from './bento.module.css';
import { Tile } from './shared';

export function WeatherTile() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="Weather; hover to switch units" {...bind}>
      <Tile k="Weather">
        <span className={c.sun}><i /><u /></span>
        <b className={c.v}>{hot ? '64°F' : '18°C'}</b>
      </Tile>
    </button>
  );
}
