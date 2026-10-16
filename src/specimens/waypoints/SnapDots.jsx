import { useRef, useState } from 'react';
import c from './waypoints.module.css';

/* 35 */ export function SnapDots() {
  const box = useRef(null);
  const [k, setK] = useState(0);
  const go = (i) => { box.current?.scrollTo({ left: i * box.current.clientWidth, behavior: 'smooth' }); setK(i); };
  return (
    <div className={c.snap}>
      <div ref={box} className={c.snapRow} tabIndex={0} aria-label="Cards, scroll sideways" onScroll={(e) => setK(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}>{['One', 'Two', 'Three'].map((t) => <section key={t}>{t}</section>)}</div>
      <div role="tablist" aria-label="Card position">{[0, 1, 2].map((i) => <button key={i} type="button" role="tab" aria-selected={i === k} aria-label={`Card ${i + 1}`} onClick={() => go(i)} />)}</div>
    </div>
  );
}
