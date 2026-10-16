import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './handset.module.css';
import { Phone } from './shared';

/* 24 */ export function MapPin() {
  const [p, setP] = useState(4);
  return (
    <Phone label="Map with a pin">
      <span className={c.mapG} role="group" aria-label="Map">
        {Array.from({ length: 9 }, (_, k) => <button key={k} type="button" aria-label={`Spot ${k + 1}`} aria-pressed={p === k} onClick={() => setP(k)}>{p === k ? <Ico n="pin" /> : null}</button>)}
      </span>
      <b className={c.h}>Spot {p + 1}</b><span className={c.p}>{p * 120 + 80} m away</span>
    </Phone>
  );
}
