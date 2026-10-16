import { useState } from 'react';
import c from './morphs.module.css';

/* 35 */ export function StackToGrid() {
  const [on, setOn] = useState(false);
  return (
    <div className={c.stage}>
      <button type="button" className={c.stack} data-on={on} aria-pressed={on} aria-label="Tiles. Click to spread them into a grid" onClick={() => setOn((v) => !v)}>
        {Array.from({ length: 6 }, (_, k) => <i key={k} style={{ '--k': k }} />)}
      </button>
    </div>
  );
}
