import { useState } from 'react';
import c from "../handset.module.css";
import { Av, Phone } from "../shared";

/* 08 */ export function AvatarPick() {
  const [s, setS] = useState(1);
  return (
    <Phone label="Avatar picker" className={c.center}>
      <b className={c.h}>Pick a face</b>
      <div className={c.avGrid} role="radiogroup" aria-label="Avatar">
        {[0, 70, 140, 210].map((h, k) => <button key={h} type="button" role="radio" aria-checked={s === k} aria-label={`Avatar ${k + 1}`} onClick={() => setS(k)}><Av h={h} s={'ABCD'[k]} /></button>)}
      </div>
    </Phone>
  );
}
