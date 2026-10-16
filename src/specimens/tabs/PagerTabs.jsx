import { useState } from 'react';
import c from './tabs.module.css';

/* 36 */ export function PagerTabs() {
  const [k, setK] = useState(3);
  const pages = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className={c.pager} role="tablist" aria-label="Pages">
      {pages.map((p, i) => <button key={p} type="button" role="tab" aria-selected={i === k} aria-label={`Page ${p}`} onClick={() => setK(i)}>{p}</button>)}
    </div>
  );
}
