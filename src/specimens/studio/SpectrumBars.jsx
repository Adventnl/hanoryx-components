import c from './studio.module.css';
import { useLevels } from './shared';

/* 14 */ export function SpectrumBars() {
  const v = useLevels(16, 110);
  return <div className={c.spec} role="img" aria-label="Spectrum analyser">{v.map((h, k) => <i key={k} style={{ height: `${h * 100}%`, '--k': k }} />)}</div>;
}
