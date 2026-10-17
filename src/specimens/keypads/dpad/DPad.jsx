import { useState } from 'react';
import c from "../keypads.module.css";

/* 39 */ export function DPad() {
  const [k, setK] = useState('');
  const set = (t) => ({ onPointerDown: () => setK(t), onPointerUp: () => setK(''), onPointerLeave: () => setK(''), onKeyDown: () => setK(t), onKeyUp: () => setK('') });
  return (
    <div className={c.dpad} data-k={k}>
      <div>{['up', 'left', 'right', 'down'].map((d) => <button type="button" key={d} aria-label={`D-pad ${d}`} data-d={d} {...set(d)} />)}</div>
      <p>{['A', 'B', 'X', 'Y'].map((t) => <button type="button" key={t} aria-label={`Button ${t}`} data-b={t} {...set(t)}>{t}</button>)}</p>
    </div>
  );
}
