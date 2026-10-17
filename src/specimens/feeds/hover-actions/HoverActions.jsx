import { useState } from 'react';
import c from "../feeds.module.css";
import { Fd } from "../shared";

/* 03 */ export function HoverActions() {
  const [a, setA] = useState('');
  return (
    <Fd label="Row actions" className={c.list}>
      {['Invoice 204', 'Invoice 205'].map((t) => (
        <div key={t} className={c.actRow}><span>{t}</span><span className={c.acts}>{['Open', 'Pay', 'Void'].map((x) => <button key={x} type="button" aria-label={`${x} ${t}`} onClick={() => setA(`${x} ${t.split(' ')[1]}`)}>{x}</button>)}</span></div>
      ))}
      <small className={c.m}>{a || 'Hover or focus a row'}</small>
    </Fd>
  );
}
