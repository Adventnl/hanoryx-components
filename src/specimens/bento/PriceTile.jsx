import { useTick } from '../../stage/hooks';
import c from './bento.module.css';
import { Tile } from './shared';

const PRICES = Array.from({ length: 20 }, (_, i) => +(184 + 3 * Math.sin(i * 1.1) + 2 * Math.cos(i * 2.3)).toFixed(2));

export function PriceTile() {
  const t = useTick(1200);
  const now = PRICES[t % 20];
  const was = PRICES[(t + 19) % 20];
  return (
    <div className={c.fig} role="img" aria-label={`Price ${now.toFixed(2)}`}>
      <Tile k="HNRX">
        <b key={t} className={`${c.v} ${c.flash}`} data-dn={now < was}>{now.toFixed(2)}</b>
        <span className={c.miniBars}>{Array.from({ length: 12 }, (_, i) => <i key={i} style={{ '--h': `${30 + ((PRICES[(t + i) % 20] - 180) / 8) * 70}%` }} />)}</span>
      </Tile>
    </div>
  );
}
