import { useState } from 'react';
import c from './archive.module.css';

/* 42 */ export function FolderLift() {
  const [h, setH] = useState(-1);
  return (
    <div className={c.lift} onMouseLeave={() => setH(-1)}>
      {['#c9a86a', '#d8b87a', '#c9a86a', '#d8b87a', '#c9a86a'].map((col, i) => <button key={i} type="button" aria-label={`Folder ${i + 1}`} data-n={h < 0 ? 0 : i === h ? 2 : i === h - 1 || i === h + 1 ? 1 : 0} style={{ '--col': col, '--i': i }} onMouseEnter={() => setH(i)} onFocus={() => setH(i)} onBlur={() => setH(-1)} />)}
    </div>
  );
}
