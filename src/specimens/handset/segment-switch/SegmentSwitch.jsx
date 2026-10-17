import { useState } from 'react';
import c from "../handset.module.css";
import { Phone } from "../shared";

/* 18 */ export function SegmentSwitch() {
  const [s, setS] = useState(0);
  const L = [['Day', ['9:00 Standup', '11:30 Review']], ['Week', ['Mon Plan', 'Thu Demo']], ['Month', ['3 Launch']]];
  return (
    <Phone label="Segment switch">
      <div className={c.seg} role="group" aria-label="Range">{L.map(([t], k) => <button key={t} type="button" aria-pressed={s === k} onClick={() => setS(k)}>{t}</button>)}</div>
      {L[s][1].map((x) => <span key={x} className={c.item}>{x}</span>)}
    </Phone>
  );
}
