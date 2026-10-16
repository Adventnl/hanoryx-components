import { useTick } from '../../stage/hooks';
import c from './bento.module.css';
import { Tile, pad } from './shared';

export function CountdownTile() {
  const t = useTick(1000);
  const left = 3 * 86400 + 14 * 3600 + 22 * 60 + 40 - t;
  return (
    <div className={c.fig} role="img" aria-label="A countdown to launch">
      <Tile k="Launch in">
        <b className={c.v}>{pad(Math.floor(left / 86400))}<small>d</small> {pad(Math.floor((left % 86400) / 3600))}<small>h</small> {pad(Math.floor((left % 3600) / 60))}<small>m</small> {pad(left % 60)}<small>s</small></b>
      </Tile>
    </div>
  );
}
