import { useState } from 'react';
import c from './keypads.module.css';

/* 21 */ export function RippleKey() {
  const [r, setR] = useState([]);
  const add = (e) => {
    const b = e.currentTarget.getBoundingClientRect();
    const id = e.timeStamp;
    setR((x) => [...x, { id, x: e.clientX - b.left, y: e.clientY - b.top }]);
    window.setTimeout(() => setR((x) => x.filter((q) => q.id !== id)), 700);
  };
  return <button type="button" className={c.ripple} onClick={add}>Ripple{r.map((q) => <s key={q.id} style={{ left: q.x, top: q.y }} />)}</button>;
}
