import { useState } from 'react';
import c from './keypads.module.css';

/* 1 */ export function MechanicalKey() {
  const [n, setN] = useState(0);
  return <button type="button" className={c.mech} aria-label="Mechanical key" onClick={() => setN(n + 1)}><i /><span>{n}</span></button>;
}
