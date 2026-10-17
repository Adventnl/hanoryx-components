import { useState } from 'react';
import c from "../handset.module.css";
import { Phone } from "../shared";

/* 27 */ export function DayAgenda() {
  const [o, setO] = useState(1);
  const E = [['9:00', 'Standup', 'Room 2'], ['11:30', 'Review', 'Video'], ['15:00', 'Demo', 'Hall']];
  return (
    <Phone label="Day agenda">
      <b className={c.h}>Today</b>
      {E.map(([t, n, w], k) => <button key={t} type="button" className={c.ev} aria-expanded={o === k} onClick={() => setO(o === k ? -1 : k)}><small>{t}</small><span><em>{n}</em>{o === k ? <small>{w}</small> : null}</span></button>)}
    </Phone>
  );
}
