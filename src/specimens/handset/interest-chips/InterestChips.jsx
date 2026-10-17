import { useState } from 'react';
import c from "../handset.module.css";
import { Phone } from "../shared";

const INT = ['Design', 'Code', 'Music', 'Film', 'Food', 'Travel'];

/* 09 */ export function InterestChips() {
  const [on, setOn] = useState(['Code', 'Music']);
  const flip = (t) => setOn((a) => (a.includes(t) ? a.filter((x) => x !== t) : [...a, t]));
  return (
    <Phone label="Interest chips">
      <b className={c.h}>Your topics</b>
      <div className={c.chips}>{INT.map((t) => <button key={t} type="button" className={c.chip} aria-pressed={on.includes(t)} onClick={() => flip(t)}>{t}</button>)}</div>
      <span className={c.p}>{on.length} picked</span>
    </Phone>
  );
}
