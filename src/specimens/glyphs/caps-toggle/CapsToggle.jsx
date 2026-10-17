import { useState } from 'react';
import c from "../glyphs.module.css";

const CAPS = [['normal', 'none'], ['small-caps', 'none'], ['all-small-caps', 'none'], ['titling-caps', 'none'], ['normal', 'uppercase']];

export function CapsToggle() {
  const [k, setK] = useState(1);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-label={`Capitals style ${CAPS[k][0]}. Try the next`} onClick={() => setK((x) => (x + 1) % CAPS.length)}>
      <span className={c.caps} style={{ fontVariantCaps: CAPS[k][0], textTransform: CAPS[k][1] }}>Small Capitals Look Calm</span>
      <span className={c.note}>{CAPS[k][1] === 'uppercase' ? 'uppercase' : CAPS[k][0]}</span>
    </button>
  );
}
