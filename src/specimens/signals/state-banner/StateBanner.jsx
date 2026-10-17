import { useState } from 'react';
import c from "../signals.module.css";

/* 15 */ export function StateBanner() {
  const [k, setK] = useState(1);
  const msgs = ['All systems normal', 'Elevated error rate', 'Major outage'];
  return (
    <div className={c.bannerSig}>
      <div role="status" data-t={['ok', 'warn', 'bad'][k]}><i />{msgs[k]}</div>
      <div role="group" aria-label="Pick a state">{['ok', 'warn', 'bad'].map((t, i) => <button key={t} type="button" aria-pressed={i === k} aria-label={msgs[i]} data-t={t} onClick={() => setK(i)} />)}</div>
    </div>
  );
}
