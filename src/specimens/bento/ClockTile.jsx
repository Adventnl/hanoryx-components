import { useTick } from '../../stage/hooks';
import c from './bento.module.css';
import { Tile } from './shared';

const hands = (n) => {
  const s = (10 * 3600 + 8 * 60 + n) % 43200;
  return [(s / 43200) * 360, ((s % 3600) / 3600) * 360, (n % 60) * 6];
};

export function ClockTile() {
  const t = useTick(1000);
  const [h, m, s] = hands(t);
  return (
    <div className={c.fig} role="img" aria-label={`Analog clock, ten past ten, ${t % 60} seconds`}>
      <Tile k="Local">
        <span className={c.clock}>
          {[0, 1, 2, 3].map((i) => <i key={i} style={{ '--r': `${i * 90}deg` }} />)}
          <b style={{ transform: `rotate(${h}deg)` }} /><b className={c.min} style={{ transform: `rotate(${m}deg)` }} /><b className={c.sec} style={{ transform: `rotate(${s}deg)` }} />
        </span>
      </Tile>
    </div>
  );
}
