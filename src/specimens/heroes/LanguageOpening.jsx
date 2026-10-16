import { useState } from 'react';
import c from './heroes.module.css';
import { Sc } from './shared';

/* 42 */ export function LanguageOpening() {
  const [i, setI] = useState(0);
  const L = [['EN', 'Build calm systems'], ['NO', 'Bygg rolige systemer'], ['JA', '落ち着いたシステムを']];
  return <Sc label="Language hero" className={c.cen}><div className={c.chips} role="group" aria-label="Language">{L.map(([k], j) => <button key={k} type="button" aria-pressed={i === j} onClick={() => setI(j)}>{k}</button>)}</div><h3 lang={['en', 'no', 'ja'][i]}>{L[i][1]}</h3></Sc>;
}
