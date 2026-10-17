import { useState } from 'react';
import c from "../kinetic.module.css";

/* 16 */ const SCATTER = [[-34, -22, -8], [26, -30, 6], [-18, 26, 10], [36, 20, -5], [-4, -4, 12]];

export function ScatterWords() {
  const [apart, setApart] = useState(true);
  return (
    <div className={c.fig}>
      <button type="button" className={c.scatter} aria-pressed={apart} aria-label="Scatter words, click to scatter or gather them" onClick={() => setApart(!apart)}>
        {['Words', 'drift', 'apart', 'and', 'return'].map((w, i) => <span key={w} style={{ '--x': `${SCATTER[i][0]}px`, '--y': `${SCATTER[i][1]}px`, '--r': `${SCATTER[i][2]}deg`, '--i': i }} data-apart={apart}>{w}</span>)}
      </button>
    </div>
  );
}
