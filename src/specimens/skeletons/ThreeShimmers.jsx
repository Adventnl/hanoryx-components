import { useState } from 'react';
import c from './skeletons.module.css';
import { Shell, sk } from './shared';

/* 5 */ export function ThreeShimmers() {
  const [k, setK] = useState(0);
  const names = ['Shimmer', 'Pulse', 'Wave'];
  return (
    <div className={c.flav}>
      <div role="radiogroup" aria-label="Skeleton animation">{names.map((n, i) => <button key={n} type="button" role="radio" aria-checked={i === k} onClick={() => setK(i)}>{n}</button>)}</div>
      <Shell className={c.flavBox} label="Loading"><div data-k={k}>{sk('100%', '0.8rem')}{sk('76%', '0.8rem')}{sk('88%', '0.8rem')}</div></Shell>
    </div>
  );
}
