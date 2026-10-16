import { useState } from 'react';
import c from './signals.module.css';

/* 41 */ export function FaultCode() {
  const [n, setN] = useState(404);
  const seg = { 0: 'abcdef', 1: 'bc', 2: 'abdeg', 3: 'abcdg', 4: 'bcfg', 5: 'acdfg', 6: 'acdefg', 7: 'abc', 8: 'abcdefg', 9: 'abcdfg' };
  return (
    <button type="button" className={c.seven} aria-label={`Fault code ${n}. Press for another`} onClick={() => setN((v) => [404, 500, 503, 200][([404, 500, 503, 200].indexOf(v) + 1) % 4])}>
      {String(n).split('').map((d, i) => <span key={i}>{'abcdefg'.split('').map((s) => <i key={s} data-s={s} data-on={seg[d].includes(s)} />)}</span>)}
    </button>
  );
}
