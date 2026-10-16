import { useState } from 'react';
import c from './graphs.module.css';

/* 19 */ export function StackAndQueue() {
  const [n, setN] = useState(3);
  const items = Array.from({ length: n }, (_, i) => i + 1);
  return (
    <div className={c.fig}>
      <div className={c.sq}>
        <div><em>stack</em><span>{items.map((v, i) => <b key={v} data-top={i === n - 1}>{v}</b>)}</span></div>
        <div><em>queue</em><p>{items.map((v, i) => <b key={v} data-top={i === 0}>{v}</b>)}</p></div>
      </div>
      <div className={c.pair}>
        <button type="button" disabled={n >= 5} onClick={() => setN(n + 1)}>Add</button>
        <button type="button" disabled={n <= 0} onClick={() => setN(n - 1)}>Remove</button>
      </div>
    </div>
  );
}
