import { useState } from 'react';
import c from './archive.module.css';

/* 21 */ export function AlbumCorners() {
  const [on, setOn] = useState(true);
  return (
    <button type="button" className={c.album} aria-pressed={on} onClick={() => setOn((v) => !v)} aria-label="Photo in corner mounts. Click to take it out">
      <span className={c.photo} data-on={on}><i /></span>
      <b /><b /><b /><b />
    </button>
  );
}
