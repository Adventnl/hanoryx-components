import { useDrag } from '../../stage/hooks';
import c from './studio.module.css';

/* 36 */ export function GainStaging() {
  const [g, bind] = useDrag({ init: 0.5 });
  return (
    <div className={c.stage}>
      {[['IN', 0.5], ['PRE', g], ['OUT', Math.min(1, g * 0.9 + 0.1)]].map(([n, v]) => <span key={n}><i style={{ height: `${v * 100}%`, background: v > 0.85 ? '#ff4747' : v > 0.7 ? '#ffb347' : '#3dd68c' }} /><small>{n}</small></span>)}
      <div className={c.stageGain} {...bind} aria-label="Preamp gain" aria-valuetext={`${Math.round(g * 60)} dB`} style={{ ...bind.style, '--v': g }}><i /></div>
    </div>
  );
}
