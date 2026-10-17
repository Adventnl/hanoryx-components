import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../menus.module.css";

/* 27 */ export function RingMenu() {
  const [r, setR] = useState(0);
  return (
    <div className={c.ring} style={{ '--r': r }}>
      <div aria-hidden="true">{['home', 'star', 'bell', 'user', 'gear', 'mail'].map((n, k) => <span key={n} style={{ '--a': k * 60 }}><Ico n={n} /></span>)}</div>
      <button type="button" aria-label="Turn the ring left" onClick={() => setR(r - 1)}><Ico n="left" /></button>
      <button type="button" aria-label="Turn the ring right" onClick={() => setR(r + 1)}><Ico n="right" /></button>
    </div>
  );
}
