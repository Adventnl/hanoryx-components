import { useState } from 'react';
import c from "../glyphs.module.css";

const MODES = [['horizontal-tb', 'upright'], ['vertical-rl', 'mixed'], ['vertical-rl', 'upright'], ['vertical-lr', 'mixed']];

export function VerticalText() {
  const [k, setK] = useState(1);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-label={`Writing mode ${MODES[k][0]}. Try the next`} onClick={() => setK((x) => (x + 1) % MODES.length)}>
      <span className={c.vert}><span style={{ writingMode: MODES[k][0], textOrientation: MODES[k][1] }}>Vertical type</span></span>
      <span className={c.note}>{MODES[k][0]} · {MODES[k][1]}</span>
    </button>
  );
}
