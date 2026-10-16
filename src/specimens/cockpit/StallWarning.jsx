import { useDrag } from '../../stage/hooks';
import { arc } from '../../stage/chartKit';
import c from './cockpit.module.css';

/* 42 */ export function StallWarning() {
  const [v, bind] = useDrag({ init: 0.45 });
  const warn = v > 0.78;
  return (
    <div className={c.stall} {...bind} aria-label="Angle of attack" aria-valuetext={warn ? 'stall warning' : 'normal'} data-warn={warn} style={{ ...bind.style, '--v': v }}>
      <svg viewBox="0 0 100 60" aria-hidden="true"><path d={arc(50, 54, 40, -80, 80)} className={c.aoaBase} /><path d={arc(50, 54, 40, 50, 80)} className={c.aoaRed} /><g className={c.aoaNeedle}><path d="M50 54l-2-34h4z" /></g></svg>
      <b>{warn ? 'STALL' : 'AOA'}</b>
    </div>
  );
}
