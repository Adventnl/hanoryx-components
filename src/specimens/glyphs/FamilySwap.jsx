import { useState } from 'react';
import c from './glyphs.module.css';

const FAMILIES = [['serif', 'Cormorant Garamond'], ['sans', 'Inter'], ['mono', 'JetBrains Mono']];

export function FamilySwap() {
  const [k, setK] = useState(0);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-label={`Typeface ${FAMILIES[k][1]}. Try the next`} onClick={() => setK((x) => (x + 1) % FAMILIES.length)}>
      <span key={k} className={`${c.swapCh} ${c[FAMILIES[k][0]]}`}>Rg</span>
      <span className={c.note}>{FAMILIES[k][1]}</span>
    </button>
  );
}
