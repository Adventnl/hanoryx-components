import c from './skeletons.module.css';
import { Shell } from './shared';

/* 6 */ export function ChartPlaceholder() {
  return <Shell className={c.chart} label="Loading chart">{[40, 70, 52, 86, 34, 64, 48].map((h, k) => <i key={k} className={c.sk} style={{ height: `${h}%`, animationDelay: `${k * 0.12}s` }} />)}</Shell>;
}
