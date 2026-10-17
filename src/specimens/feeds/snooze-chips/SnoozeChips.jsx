import { useState } from 'react';
import c from "../feeds.module.css";
import { Fd } from "../shared";

/* 32 */ export function SnoozeChips() {
  const [s, setS] = useState(-1);
  const T = ['1 hour', 'Tonight', 'Tomorrow', 'Next week'];
  return (
    <Fd label="Snooze" className={c.center}>
      <span className={c.plain}>Weekly report is ready</span>
      <div className={c.chips} role="group" aria-label="Snooze until">{T.map((t, k) => <button key={t} type="button" className={c.chip} aria-pressed={s === k} onClick={() => setS(k)}>{t}</button>)}</div>
      <small className={c.m}>{s < 0 ? 'Not snoozed' : `Back ${T[s].toLowerCase()}`}</small>
    </Fd>
  );
}
