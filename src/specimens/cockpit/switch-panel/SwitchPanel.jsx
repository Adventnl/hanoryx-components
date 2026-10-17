import { useState } from 'react';
import c from "../cockpit.module.css";

/* 31 */ export function SwitchPanel() {
  const names = ['BCN', 'NAV', 'LDG', 'STR', 'PIT', 'FUEL'];
  const [on, setOn] = useState([true, true, false, false, true, true]);
  return (
    <div className={c.switches} role="group" aria-label="Switch panel">
      {names.map((n, k) => <button key={n} type="button" aria-pressed={on[k]} aria-label={n} onClick={() => setOn((a) => a.map((x, j) => (j === k ? !x : x)))}><i /><span>{n}</span></button>)}
    </div>
  );
}
