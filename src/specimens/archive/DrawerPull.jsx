import { useState } from 'react';
import c from './archive.module.css';

/* 41 */ export function DrawerPull() {
  const [out, setOut] = useState(false);
  return (
    <button type="button" className={c.pull} aria-pressed={out} onClick={() => setOut((v) => !v)} aria-label="Drawer. Click to pull it out">
      <span className={c.inner} data-out={out}>{[0, 1, 2, 3].map((k) => <i key={k} style={{ '--k': k }} />)}</span>
      <span className={c.faceP}><em>Q–S</em><b /></span>
    </button>
  );
}
