import { useState } from 'react';
import c from "../feeds.module.css";
import { Fd } from "../shared";

/* 11 */ export function UnreadBadges() {
  const [u, setU] = useState([3, 0, 12, 1]);
  const L = ['General', 'Design', 'Eng', 'Random'];
  return (
    <Fd label="Unread badges" className={c.list}>
      {L.map((t, k) => <button key={t} type="button" className={c.row} data-unread={u[k] > 0} onClick={() => setU((a) => a.map((x, i) => (i === k ? 0 : x)))}><span># {t}</span>{u[k] > 0 && <em className={c.badge}>{u[k]}</em>}</button>)}
      <small className={c.m}>{u.reduce((a, b) => a + b, 0)} unread</small>
    </Fd>
  );
}
