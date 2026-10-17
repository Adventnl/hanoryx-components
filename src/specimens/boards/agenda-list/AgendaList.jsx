import { useState } from 'react';
import c from "../boards.module.css";
import { Bd } from "../shared";

/* 19 */ export function AgendaList() {
  const [done, setDone] = useState([0]);
  const G = [['Today', ['Standup', 'Review PRs']], ['Tomorrow', ['Demo prep', 'Dentist']]];
  let k = -1;
  return (
    <Bd label="Agenda list" className={c.one}>
      {G.map(([g, items]) => <div key={g}><b className={c.lh}>{g}</b>{items.map((t) => { k += 1; const id = k; return <button key={t} type="button" role="checkbox" aria-checked={done.includes(id)} className={c.todo} onClick={() => setDone((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]))}><i>{done.includes(id) ? '✓' : ''}</i><span>{t}</span></button>; })}</div>)}
    </Bd>
  );
}
