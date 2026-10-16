import { useState } from 'react';
import c from './heroes.module.css';
import { Sc } from './shared';

/* 21 */ export function TabbedOpening() {
  const [t, setT] = useState(0);
  const T = [['Teams', 'Plan together'], ['Makers', 'Ship alone'], ['Studios', 'Bill clients']];
  return <Sc label="Tabbed hero" className={c.tabsH} style={{ '--h': t * 110 }}><div role="tablist" aria-label="Audience">{T.map(([n], k) => <button key={n} type="button" role="tab" aria-selected={t === k} onClick={() => setT(k)}>{n}</button>)}</div><h3>{T[t][1]}</h3><span /></Sc>;
}
