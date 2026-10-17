import { useState } from 'react';
import c from "../stamps.module.css";

/* 23 */ export function TicketStub() {
  const [torn, setTorn] = useState(false);
  return (
    <button type="button" className={c.stub} aria-pressed={torn} onClick={() => setTorn((v) => !v)} aria-label="Tear off the ticket stub">
      <span className={c.main}><b>ADMIT ONE</b><small>ROW C · 14</small></span>
      <span className={c.cut}><b>No. 0417</b></span>
    </button>
  );
}
