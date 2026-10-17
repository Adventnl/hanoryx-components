import { useState } from 'react';
import c from "../editorial.module.css";

export function ShareRow() {
  const [done, setDone] = useState(false);
  const [sent, setSent] = useState(false);
  return (
    <div className={c.fig}>
      <div className={c.share}>
        <button type="button" className={c.mini} data-ok={done} onClick={() => setDone(true)}>{done ? 'Link copied' : 'Copy link'}</button>
        <button type="button" className={c.mini} data-ok={sent} onClick={() => setSent((s) => !s)}>{sent ? 'Emailed' : 'Email'}</button>
        <button type="button" className={c.mini} onClick={() => { setDone(false); setSent(false); }}>Reset</button>
      </div>
    </div>
  );
}
