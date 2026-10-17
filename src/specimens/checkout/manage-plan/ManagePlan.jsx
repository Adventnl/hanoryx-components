import { useState } from 'react';
import c from "../checkout.module.css";
import { Co } from "../shared";

/* 41 */ export function ManagePlan() {
  const [s, setS] = useState('active');
  const L = { active: 'Active · renews Nov 14', paused: 'Paused until Dec 14', cancelled: 'Ends Nov 14' };
  return (
    <Co label="Manage subscription" className={c.list}>
      <b className={c.status2} data-s={s}>{L[s]}</b>
      <div className={c.chips}><button type="button" className={c.chip} onClick={() => setS(s === 'paused' ? 'active' : 'paused')}>{s === 'paused' ? 'Resume' : 'Pause'}</button><button type="button" className={c.chip} onClick={() => setS(s === 'cancelled' ? 'active' : 'cancelled')}>{s === 'cancelled' ? 'Keep' : 'Cancel'}</button></div>
    </Co>
  );
}
