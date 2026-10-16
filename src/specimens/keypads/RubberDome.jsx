import { useState } from 'react';
import c from './keypads.module.css';

/* 12 */ export function RubberDome() {
  const [n, setN] = useState(0);
  return <button type="button" className={c.dome} aria-label="Rubber dome" onClick={() => setN(n + 1)}><s key={n} /><i /></button>;
}
