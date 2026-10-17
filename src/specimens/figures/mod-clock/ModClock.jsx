import { useState } from 'react';
import c from "../figures.module.css";

/* 30 */ export function ModClock() {
  const [t, setT] = useState(3);
  const step = (by) => setT((v) => v + by);
  const h = t % 12;
  return (
    <div className={c.fig}>
      <div className={c.mod} style={{ '--t': t }} role="img" aria-label={`A twelve hour clock pointing at ${h || 12}`}>
        {Array.from({ length: 12 }, (_, i) => <em key={i} style={{ '--i': i }}>{i || 12}</em>)}
        <i />
        <u />
      </div>
      <p className={c.sub}>{`${t}`} mod 12 = <b>{h}</b></p>
      <div className={c.pair}>
        <button type="button" onClick={() => step(5)}>+5</button>
        <button type="button" onClick={() => step(7)}>+7</button>
      </div>
    </div>
  );
}
