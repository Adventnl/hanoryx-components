import { useState } from 'react';
import c from "../boards.module.css";
import { Bd, cx } from "../shared";

/* 09 */ export function DueBadges() {
  const [done, setDone] = useState([2]);
  const D = [['Invoices', 'Yesterday', true], ['Hiring plan', 'Today', false], ['Offsite', 'Fri', false]];
  return (
    <Bd label="Due dates" className={c.one}>
      {D.map(([t, d, late], k) => <button key={t} type="button" className={cx(c.cd, c.due)} aria-pressed={done.includes(k)} onClick={() => setDone((a) => (a.includes(k) ? a.filter((x) => x !== k) : [...a, k]))}><span>{t}</span><em data-late={late && !done.includes(k)}>{done.includes(k) ? 'Done' : d}</em></button>)}
    </Bd>
  );
}
