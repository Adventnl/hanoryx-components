import c from './studio.module.css';
import { useLevels } from './shared';

/* 21 */ export function LimiterMeter() {
  const [l] = useLevels(1, 130);
  const gr = Math.max(0, l - 0.62);
  return <div className={c.lim} role="img" aria-label="Limiter gain reduction"><i style={{ height: `${gr * 220}%` }} /><span>GR</span></div>;
}
