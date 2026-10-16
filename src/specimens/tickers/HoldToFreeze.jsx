import { useState } from 'react';
import c from './tickers.module.css';
import { Belt } from './shared';

export function HoldToFreeze() {
  const [held, setHeld] = useState(false);
  const on = () => setHeld(true);
  const off = () => setHeld(false);
  const isKey = (e) => e.key === ' ' || e.key === 'Enter';
  return (
    <div className={c.fig}>
      <button
        type="button"
        className={`${c.freeze} ${c.reset}`}
        data-held={held}
        aria-pressed={held}
        aria-label="Hold to freeze the tape"
        onPointerDown={on}
        onPointerUp={off}
        onPointerLeave={off}
        onPointerCancel={off}
        onBlur={off}
        onKeyDown={(e) => { if (isKey(e) && !e.repeat) { e.preventDefault(); on(); } }}
        onKeyUp={(e) => { if (isKey(e)) off(); }}
        onContextMenu={(e) => e.preventDefault()}
      >
        <Belt dur={6} className={c.freezeBelt}><span>HOLD  ·  TO FREEZE  ·  HOLD  ·  TO FREEZE  ·  </span></Belt>
        <span className={c.freezeTag}>{held ? 'FROZEN' : 'RUNNING'}</span>
      </button>
    </div>
  );
}
