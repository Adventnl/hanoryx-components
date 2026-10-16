import { useState } from 'react';
import c from './heroes.module.css';
import { Sc } from './shared';

/* 09 */ export function LogoStrip() {
  const [h, setH] = useState(-1);
  return <Sc label="Logo strip" className={c.cen}><h3>Trusted by teams</h3><div className={c.logos} onMouseLeave={() => setH(-1)}>{['◆', '●', '▲', '■', '✦'].map((g, k) => <button key={k} type="button" aria-label={`Customer ${k + 1}`} data-on={h === k} onMouseEnter={() => setH(k)} onFocus={() => setH(k)} onBlur={() => setH(-1)}>{g}</button>)}</div></Sc>;
}
