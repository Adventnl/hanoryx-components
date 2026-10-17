import { useState } from 'react';
import c from "../cockpit.module.css";

/* 34 */ export function AutopilotModes() {
  const [on, setOn] = useState({ HDG: true, ALT: true });
  const modes = ['HDG', 'NAV', 'APR', 'ALT', 'VS'];
  return (
    <div className={c.ap} role="group" aria-label="Autopilot modes">
      {modes.map((m) => <button key={m} type="button" aria-pressed={!!on[m]} onClick={() => setOn((o) => ({ ...o, [m]: !o[m] }))}><i />{m}</button>)}
    </div>
  );
}
