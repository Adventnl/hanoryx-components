import { useTick } from '../../stage/hooks';
import c from './tickers.module.css';

const CONTENDERS = [['Atlas', 62, 0.31, 0], ['Beacon', 58, 0.43, 1.7], ['Cobalt', 55, 0.37, 3.1], ['Drift', 51, 0.5, 4.4], ['Ember', 47, 0.27, 5.9]];

export function Leaderboard() {
  const t = useTick(1800);
  const scored = CONTENDERS.map(([name, base, w, ph]) => ({ name, v: Math.round(base + 14 * Math.sin(t * w + ph)) }));
  const order = [...scored].sort((a, b) => b.v - a.v || a.name.localeCompare(b.name)).map((x) => x.name);
  return (
    <div className={c.fig} role="img" aria-label={`Leaderboard, ${order[0]} in front`}>
      <ol className={c.lead}>
        {scored.map((s) => {
          const rank = order.indexOf(s.name);
          return (
            <li key={s.name} style={{ '--r': rank, '--w': s.v }} data-top={rank === 0}>
              <b>{rank + 1}</b><span>{s.name}</span><em>{s.v}</em><i />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
