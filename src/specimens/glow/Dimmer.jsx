import { useDrag } from '../../stage/hooks';
import c from './glow.module.css';

export function Dimmer() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.6 });
  return (
    <div className={c.fig}>
      <div className={`${c.card} ${c.dimmed}`} style={{ '--v': v }}><b>Dimmer</b><span>{Math.round(v * 100)}%</span></div>
      <div {...bind} className={c.track} aria-label="Brightness" aria-valuetext={`${Math.round(v * 100)} percent`} style={{ ...bind.style, '--v': v }}><i /></div>
    </div>
  );
}
