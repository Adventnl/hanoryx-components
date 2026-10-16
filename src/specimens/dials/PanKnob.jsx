import { useDrag } from '../../stage/hooks';
import c from './dials.module.css';

/* 15 */ export function PanKnob() {
  const [v, bind] = useDrag({ mode: 'r', steps: 20, init: 0.5 });
  const n = Math.round((v - 0.5) * 200);
  return (
    <div className={c.pan} style={{ '--v': v }}>
      <span>L</span><div className={c.knob} {...bind} aria-label="Pan"><b /></div><span>R</span>
      <output>{n === 0 ? 'CENTRE' : n < 0 ? `L ${-n}` : `R ${n}`}</output>
    </div>
  );
}
