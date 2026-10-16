import { useState } from 'react';
import c from './studio.module.css';

/* 37 */ export function PatchBay() {
  const [from, setFrom] = useState(-1);
  const [links, setLinks] = useState([[0, 1], [2, 3]]);
  const click = (side, k) => {
    if (side === 0) { setFrom(from === k ? -1 : k); return; }
    if (from < 0) return;
    setLinks((l) => (l.some(([a, b]) => a === from && b === k) ? l.filter(([a, b]) => !(a === from && b === k)) : [...l, [from, k]]));
    setFrom(-1);
  };
  return (
    <div className={c.patch} role="group" aria-label="Patch bay: choose an output, then an input">
      <svg viewBox="0 0 100 60" aria-hidden="true">{links.map(([a, b], i) => <path key={i} d={`M12 ${10 + a * 13}C45 ${10 + a * 13} 55 ${10 + b * 13} 88 ${10 + b * 13}`} className={c.cable} />)}</svg>
      {[0, 1].map((side) => <div key={side}>{[0, 1, 2, 3].map((k) => <button key={k} type="button" aria-label={`${side ? 'Input' : 'Output'} ${k + 1}`} aria-pressed={side === 0 && from === k} onClick={() => click(side, k)} />)}</div>)}
    </div>
  );
}
