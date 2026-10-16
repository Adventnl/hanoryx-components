import { useState } from 'react';
import c from './waypoints.module.css';

/* 17 */ export function NextAndPrevious() {
  const [k, setK] = useState(1);
  const posts = ['Maps', 'Signs', 'Trails', 'Charts'];
  return (
    <nav className={c.np} aria-label="Next and previous">
      <button type="button" disabled={k === 0} onClick={() => setK(k - 1)}><small>Previous</small><b>{posts[k - 1] || '—'}</b></button>
      <button type="button" disabled={k === 3} onClick={() => setK(k + 1)}><small>Next</small><b>{posts[k + 1] || '—'}</b></button>
    </nav>
  );
}
