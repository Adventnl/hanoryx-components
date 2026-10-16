import { useState } from 'react';
import { pad2 } from '../../stage/hooks';
import c from './passes.module.css';

/* 17 */
export function NumberDispenser() {
  const [taken, setTaken] = useState(41);
  const [serving, setServing] = useState(38);
  return (
    <div className={c.fig}>
      <div className={c.nd}>
        <span className={c.ndBox}>
          <span className={c.kd}>Take a number</span>
          <span className={c.ndSlot}><span className={c.ndTicket} key={taken}><b>{pad2(taken)}</b></span></span>
        </span>
        <span className={c.ndBoard}>
          <span className={c.kd}>Now serving</span>
          <b>{pad2(serving)}</b>
          <span className={c.kd}>{taken - serving} waiting</span>
        </span>
      </div>
      <p className={c.row}>
        <button type="button" className={c.btn} onClick={() => setTaken((n) => n + 1)}>Take</button>
        <button type="button" className={c.btn} disabled={serving >= taken} onClick={() => setServing((n) => n + 1)}>Call next</button>
      </p>
    </div>
  );
}
