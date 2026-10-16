import { useTick } from '../../stage/hooks';
import c from './editorial.module.css';

export function PullStat() {
  const t = useTick(40);
  const n = Math.min(42, Math.round(((t % 150) / 40) * 42));
  return (
    <div className={c.fig} role="img" aria-label="42 items on the belt">
      <p className={c.stat}><b>{n}</b><span>items on the belt</span></p>
    </div>
  );
}
