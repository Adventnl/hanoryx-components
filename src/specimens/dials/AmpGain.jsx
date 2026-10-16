import { useDrag } from '../../stage/hooks';
import c from './dials.module.css';

/* 10 */ export function AmpGain() {
  const [v, bind] = useDrag({ mode: 'r', steps: 11, init: 0.9 });
  return (
    <div className={c.marshall} style={{ '--v': v }}>
      {Array.from({ length: 12 }, (_, i) => <em key={i} style={{ '--i': i }}>{i}</em>)}
      <div className={c.skirt} {...bind} aria-label="Gain, zero to eleven"><b /></div>
    </div>
  );
}
