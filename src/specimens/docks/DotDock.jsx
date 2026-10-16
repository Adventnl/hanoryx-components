import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './docks.module.css';

/* 6 */ export function DotDock() {
  const [dots, setDots] = useState([3, 0, 1, 0]);
  const icons = ['mail', 'chat', 'bell', 'heart'];
  return (
    <div className={c.dots} role="toolbar" aria-label="Dock with notification dots">
      {icons.map((n, k) => (
        <button key={n} type="button" aria-label={`${n}${dots[k] ? `, ${dots[k]} new` : ''}`} onClick={() => setDots((d) => d.map((v, j) => (j === k ? (v ? 0 : k + 1) : v)))}>
          <Ico n={n} />{dots[k] > 0 && <b aria-hidden="true">{dots[k]}</b>}
        </button>
      ))}
    </div>
  );
}
