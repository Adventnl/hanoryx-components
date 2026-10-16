import { useState } from 'react';
import c from './sheets.module.css';
import { Stage } from './shared';

/* 22 */ export function AccordionDrawer() {
  const [k, setK] = useState(0);
  return <Stage label="Accordion drawer"><div className={c.acc}>{['Basics', 'Colour', 'Type'].map((t, i) => <section key={t} data-on={i === k}><button type="button" aria-expanded={i === k} onClick={() => setK(i)}>{t}</button><p>{i === k ? 'Settings for ' + t.toLowerCase() + '.' : ''}</p></section>)}</div></Stage>;
}
