import { useState } from 'react';
import { clamp } from '../../stage/hooks';
import c from './figures.module.css';

/* 42 */ const factor = (num) => {
  const out = [];
  let n = num;
  for (let p = 2; p * p <= n; p += p === 2 ? 1 : 2) {
    let e = 0;
    while (n % p === 0) { n /= p; e += 1; }
    if (e) out.push([p, e]);
  }
  if (n > 1) out.push([n, 1]);
  return out;
};

export function PrimeFactors() {
  const [text, setText] = useState('360');
  const n = clamp(Number(text) || 0, 0, 999999999);
  const f = n > 1 ? factor(n) : [];
  return (
    <div className={c.fig}>
      <input className={c.input} inputMode="numeric" value={text} maxLength={9} aria-label="A whole number to factor" onChange={(e) => setText(e.target.value.replace(/\D/g, ''))} />
      <p className={c.words}>
        {n < 2 ? 'Try a number above one' : f.length === 1 && f[0][1] === 1 ? <>{n} is prime</> : <>{n} = {f.map(([p, e], i) => <span key={p}>{i ? ' × ' : ''}{p}{e > 1 && <sup>{e}</sup>}</span>)}</>}
      </p>
    </div>
  );
}
