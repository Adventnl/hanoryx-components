import { useDrag } from '../../stage/hooks';
import c from './dials.module.css';

/* 6 */ export function LEDRing() {
  const [v, bind] = useDrag({ mode: 'r', init: 0.5 });
  return (
    <div className={c.ledRing} style={{ '--v': v }}>
      {Array.from({ length: 16 }, (_, i) => <i key={i} style={{ '--i': i }} data-on={i / 15 <= v + 0.001} />)}
      <div className={c.knob} {...bind} aria-label="Encoder with LED ring"><b /></div>
    </div>
  );
}
