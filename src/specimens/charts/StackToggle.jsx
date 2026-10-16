import { useState } from 'react';
import c from './charts.module.css';
import { series } from './shared';

/* 4 */ const STACK = [31, 32, 33, 34].map((s, k) => series(6, s, 0.08 + 0.02 * k, 0.34 - 0.04 * k));

const STACK_NAMES = ['Alpha', 'Beta', 'Gamma', 'Delta'];

export function StackToggle() {
  const [off, setOff] = useState([false, false, false, false]);
  const flip = (k) => setOff((o) => o.map((x, j) => (j === k ? !x : x)));
  return (
    <div className={c.stackBox}>
      <div className={c.sb}>
        {Array.from({ length: 6 }, (_, j) => (
          <span key={j}>
            {STACK.map((s, k) => (
              <i key={k} style={{ '--k': k, '--h': off[k] ? 0 : s[j], '--b': STACK.slice(0, k).reduce((a, t, m) => a + (off[m] ? 0 : t[j]), 0) }} />
            ))}
          </span>
        ))}
      </div>
      <ul className={c.legend}>
        {STACK_NAMES.map((n, k) => (
          <li key={n}><button type="button" aria-pressed={!off[k]} onClick={() => flip(k)}><b style={{ '--k': k }} />{n}</button></li>
        ))}
      </ul>
    </div>
  );
}
