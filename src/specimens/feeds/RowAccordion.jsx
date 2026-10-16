import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './feeds.module.css';
import { Fd } from './shared';

/* 06 */ export function RowAccordion() {
  const [o, setO] = useState(0);
  const Q = [['Shipping', '3–5 days, tracked.'], ['Returns', '30 days, free.'], ['Warranty', 'Two years.']];
  return <Fd label="Expandable rows" className={c.list}>{Q.map(([q, a], k) => <div key={q}><button type="button" className={c.row} aria-expanded={o === k} onClick={() => setO(o === k ? -1 : k)}><span>{q}</span><Ico n="down" /></button>{o === k && <p className={c.ans}>{a}</p>}</div>)}</Fd>;
}
