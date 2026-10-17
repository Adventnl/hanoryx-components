import { useState } from 'react';
import c from "../feeds.module.css";
import { Av, Fd, NAMES } from "../shared";

/* 37 */ export function PresenceList() {
  const [on, setOn] = useState([0, 2]);
  return (
    <Fd label="Presence" className={c.list}>
      {NAMES.slice(0, 4).map((n, k) => <button key={n} type="button" className={c.row} aria-pressed={on.includes(k)} aria-label={`${n}, ${on.includes(k) ? 'online' : 'away'}`} onClick={() => setOn((a) => (a.includes(k) ? a.filter((x) => x !== k) : [...a, k]))}><span className={c.pres}><Av h={k * 70} s={n[0]} /><i data-on={on.includes(k)} /></span><span>{n}</span></button>)}
    </Fd>
  );
}
