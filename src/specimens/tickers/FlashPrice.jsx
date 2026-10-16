import { useTick } from '../../stage/hooks';
import c from './tickers.module.css';

const PRICES = Array.from({ length: 24 }, (_, i) => +(1284.5 + 12 * Math.sin(i * 1.3) + 6 * Math.cos(i * 2.9)).toFixed(2));

const money = (n) => n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function FlashPrice() {
  const t = useTick(1100);
  const now = PRICES[t % PRICES.length];
  const was = PRICES[(t + PRICES.length - 1) % PRICES.length];
  const up = now >= was;
  return (
    <div className={c.fig} role="img" aria-label={`Price ${money(now)}, ${up ? 'up' : 'down'} ${money(Math.abs(now - was))}`}>
      <div key={t} className={c.flash} data-dn={!up}>
        <small>INDEX</small>
        <b>{money(now)}</b>
        <em>{money(Math.abs(now - was))}</em>
      </div>
    </div>
  );
}
