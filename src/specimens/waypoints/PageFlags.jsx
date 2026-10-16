import { useState } from 'react';
import c from './waypoints.module.css';

/* 30 */ export function PageFlags() {
  const [k, setK] = useState(1);
  return (
    <div className={c.flags}>
      <div className={c.flagPage}><b>{['Maps', 'Signs', 'Trails'][k]}</b><span>Page {k * 4 + 3}</span></div>
      <div role="tablist" aria-label="Page flags" aria-orientation="vertical">{['#ff3333', '#ffb347', '#6ee7b7'].map((h, i) => <button key={h} type="button" role="tab" aria-selected={i === k} aria-label={['Maps', 'Signs', 'Trails'][i]} style={{ '--h': h, '--i': i }} onClick={() => setK(i)} />)}</div>
    </div>
  );
}
