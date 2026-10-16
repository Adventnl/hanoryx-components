import { useState } from 'react';
import c from './fold.module.css';

export function SpiralPad() {
  const [n, setN] = useState(0);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-label="A spiral pad; flip the top sheet" onClick={() => setN((v) => v + 1)}>
      <span className={c.stage}>
        <span className={c.pad}>
          <i className={c.sheetUnder}><b>{n + 2}</b></i>
          <i key={n} className={`${c.sheetTop} ${n ? c.flipUp : ''}`}><b>{n + 1}</b></i>
          <u>{Array.from({ length: 9 }, (_, k) => <s key={k} />)}</u>
        </span>
      </span>
    </button>
  );
}
