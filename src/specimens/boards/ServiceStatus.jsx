import { useState } from 'react';
import c from './boards.module.css';
import { Bd, cx } from './shared';

/* 39 */ export function ServiceStatus() {
  const [s, setS] = useState([0, 1, 0, 2]);
  const C = [['up', '#4ade80'], ['slow', '#febc2e'], ['down', '#ff6b6b']];
  return (
    <Bd label="Service status" className={c.one}>
      {['API', 'Web', 'Queue', 'Search'].map((t, k) => <button key={t} type="button" className={cx(c.cd, c.stat)} aria-label={`${t}: ${C[s[k]][0]}. Change`} onClick={() => setS((a) => a.map((x, i) => (i === k ? (x + 1) % 3 : x)))}><span>{t}</span><i style={{ background: C[s[k]][1], boxShadow: `0 0 6px ${C[s[k]][1]}` }} /></button>)}
    </Bd>
  );
}
