import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../checkout.module.css";
import { Co } from "../shared";

/* 14 */ export function PricingQuestions() {
  const [o, setO] = useState(0);
  const Q = [['Can I cancel?', 'Any time, in one click.'], ['Do you bill tax?', 'Added at checkout.']];
  return <Co label="Pricing questions" className={c.list}>{Q.map(([q, a], k) => <div key={q}><button type="button" className={c.line} aria-expanded={o === k} onClick={() => setO(o === k ? -1 : k)}><span>{q}</span><Ico n="down" /></button>{o === k && <p className={c.ans}>{a}</p>}</div>)}</Co>;
}
