import { useState } from 'react';
import c from "../markup.module.css";

const SECRET = [['The', 0], ['meeting', 1], ['is', 0], ['at', 0], ['the', 0], ['old', 1], ['mill', 1], ['tonight', 1]];

export function BarRedaction() {
  const [held, setHeld] = useState(false);
  const isKey = (e) => e.key === ' ' || e.key === 'Enter';
  return (
    <div className={c.fig}>
      <button
        type="button"
        className={`${c.hold} ${c.reset}`}
        data-held={held}
        aria-pressed={held}
        aria-label="Hold to read the redacted line"
        onPointerDown={() => setHeld(true)}
        onPointerUp={() => setHeld(false)}
        onPointerLeave={() => setHeld(false)}
        onPointerCancel={() => setHeld(false)}
        onBlur={() => setHeld(false)}
        onKeyDown={(e) => { if (isKey(e) && !e.repeat) { e.preventDefault(); setHeld(true); } }}
        onKeyUp={(e) => { if (isKey(e)) setHeld(false); }}
        onContextMenu={(e) => e.preventDefault()}
      >
        <span className={c.para}>{SECRET.map(([w, r], i) => <span key={i} className={c.bar} data-r={r}>{w} </span>)}</span>
        <span className={c.holdTag}>{held ? 'READING' : 'HOLD TO READ'}</span>
      </button>
    </div>
  );
}
