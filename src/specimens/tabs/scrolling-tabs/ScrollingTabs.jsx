import { useRef, useState } from 'react';
import c from "../tabs.module.css";

/* 9 */ export function ScrollingTabs() {
  const names = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel'];
  const [cur, setCur] = useState(2);
  const box = useRef(null);
  const nudge = (d) => box.current?.scrollBy({ left: d * 120, behavior: 'smooth' });
  return (
    <div className={c.scrolling}>
      <button type="button" aria-label="Scroll tabs left" onClick={() => nudge(-1)}>‹</button>
      <div ref={box} role="tablist" aria-label="Scrolling tabs">{names.map((t, k) => <button key={t} type="button" role="tab" aria-selected={k === cur} data-on={k === cur} onClick={() => setCur(k)}>{t}</button>)}</div>
      <button type="button" aria-label="Scroll tabs right" onClick={() => nudge(1)}>›</button>
    </div>
  );
}
