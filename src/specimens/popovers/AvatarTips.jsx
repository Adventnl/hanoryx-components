import { useState } from 'react';
import c from './popovers.module.css';

/* 26 */ export function AvatarTips() {
  const [k, setK] = useState(-1);
  const names = ['Ada', 'Lin', 'Mo', 'Ivo'];
  return (
    <div className={c.avs} onPointerLeave={() => setK(-1)}>
      {names.map((n, i) => <button key={n} type="button" aria-label={n} style={{ '--h': i * 70 }} onPointerEnter={() => setK(i)} onFocus={() => setK(i)} onBlur={() => setK(-1)}>{n[0]}{k === i && <em>{n}</em>}</button>)}
    </div>
  );
}
