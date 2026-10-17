import { useState } from 'react';
import { pad2 } from "../../../stage/hooks";
import c from "../terminal.module.css";

const CRON = [['min', ['0', '15', '30', '45', '*']], ['hour', ['9', '12', '18', '*']], ['day', ['*', '1', '15']], ['mon', ['*', '1', '6']], ['dow', ['*', '1', '5']]];

/* 42 */ export function CronFields() {
  const [ix, setIx] = useState([0, 0, 0, 0, 1]);
  const bump = (i) => setIx((a) => a.map((v, k) => (k === i ? (v + 1) % CRON[i][1].length : v)));
  const v = ix.map((x, i) => CRON[i][1][x]);
  const dow = { '*': 'every day', 1: 'on Mondays', 5: 'on Fridays' }[v[4]];
  return (
    <div className={c.win}>
      <div className={c.cronf} role="group" aria-label="Cron fields">
        {CRON.map(([n], i) => <button key={n} type="button" className={c.field} onClick={() => bump(i)} aria-label={`${n}: ${v[i]}. Click to change`}><b>{v[i]}</b><small>{n}</small></button>)}
      </div>
      <p className={c.ln}><span className={c.dim}>→</span> at {v[1] === '*' ? 'every hour' : `${pad2(+v[1])}:${v[0] === '*' ? 'xx' : pad2(+v[0])}`}, {dow}</p>
    </div>
  );
}
