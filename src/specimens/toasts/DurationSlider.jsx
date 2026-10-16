import { useState } from 'react';
import { useDrag } from '../../stage/hooks';
import c from './toasts.module.css';
import { Fire } from './shared';

/* 28 */ export function DurationSlider() {
  const [v, bind] = useDrag({ init: 0.4, steps: 8 });
  const sec = 2 + Math.round(v * 8);
  const [k, setK] = useState(0);
  return (
    <div className={c.dur}>
      <div className={c.durRange} {...bind} aria-label="Toast duration" aria-valuetext={`${sec} seconds`} style={{ ...bind.style, '--v': v }}><i /></div>
      <Fire onClick={() => setK(k + 1)}>{sec}s toast</Fire>
      {k > 0 && <u key={`${k}-${sec}`} className={c.durBar} style={{ '--ms': `${sec}s` }} aria-hidden="true" />}
    </div>
  );
}
