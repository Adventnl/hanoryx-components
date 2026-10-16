import { useState } from 'react';
import c from './menus.module.css';

/* 33 */ export function RegionMap() {
  const [k, setK] = useState(4);
  return (
    <div className={c.miniMap} role="radiogroup" aria-label="Pick a region">
      {Array.from({ length: 9 }, (_, i) => <button key={i} type="button" role="radio" aria-checked={i === k} aria-label={`Region ${i + 1}`} onClick={() => setK(i)} />)}
    </div>
  );
}
