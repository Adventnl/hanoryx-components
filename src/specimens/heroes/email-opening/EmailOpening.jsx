import { useState } from 'react';
import c from "../heroes.module.css";
import { Cta, Sc } from "../shared";

/* 07 */ export function EmailOpening() {
  const [v, setV] = useState('');
  const ok = /.+@.+\..+/.test(v);
  return <Sc label="Email capture" className={c.cen}><h3>Stay in the loop</h3><form className={c.form} onSubmit={(e) => e.preventDefault()}><input value={v} onChange={(e) => setV(e.target.value)} placeholder="you@work.com" aria-label="Email" /><Cta disabled={!ok}>Join</Cta></form><small>{ok ? 'Looks good' : 'We send one a month'}</small></Sc>;
}
