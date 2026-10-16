import { useState } from 'react';
import c from './keypads.module.css';

/* 40 */ export function PINPad() {
  const [s, setS] = useState('');
  const [res, setRes] = useState('');
  const tap = (k) => {
    const next = (s + k).slice(0, 4);
    setS(next);
    if (next.length === 4) {
      setRes(next === '1234' ? 'ok' : 'no');
      window.setTimeout(() => { setS(''); setRes(''); }, 900);
    }
  };
  return (
    <div className={c.pin} data-res={res}>
      <p>{Array.from({ length: 4 }, (_, i) => <i key={i} data-on={i < s.length} />)}</p>
      <div>{['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((k) => <button type="button" key={k} aria-label={`PIN digit ${k}`} onClick={() => tap(k)}>{k}</button>)}</div>
      <output>{res === 'ok' ? 'OPEN' : res === 'no' ? 'WRONG' : 'TRY 1234'}</output>
    </div>
  );
}
