import { useState } from 'react';
import c from "../handset.module.css";
import { Phone } from "../shared";

/* 42 */ export function DoneCheck() {
  const [n, setN] = useState(1);
  return (
    <Phone label="Success" className={c.center}>
      <button type="button" className={c.okring} aria-label="Replay" onClick={() => setN((v) => v + 1)}>
        <svg key={n} viewBox="0 0 52 52"><circle cx="26" cy="26" r="22" pathLength="1" /><path d="M15 27l8 8 14-16" pathLength="1" /></svg>
      </button>
      <b className={c.h}>All done</b>
      <span className={c.p}>Tap to replay</span>
    </Phone>
  );
}
