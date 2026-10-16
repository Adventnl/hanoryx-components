import { useState } from 'react';
import c from './heroes.module.css';
import { Sc } from './shared';

/* 19 */ export function BrowserOpening() {
  const [t, setT] = useState(0);
  return <Sc label="Browser frame" className={c.browser}><span className={c.chrome}><i /><i /><i />{['Home', 'Docs'].map((x, k) => <button key={x} type="button" aria-pressed={t === k} onClick={() => setT(k)}>{x}</button>)}</span><h3>{t ? 'Read the docs' : 'Welcome home'}</h3><p /></Sc>;
}
