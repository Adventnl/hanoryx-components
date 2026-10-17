import { useState } from 'react';
import c from "../heroes.module.css";
import { Sc } from "../shared";

/* 32 */ export function QuoteBand() {
  const [i, setI] = useState(0);
  const Q = [['“It just stays out of the way.”', 'Ana, Ops'], ['“We shipped a week early.”', 'Kofi, Eng'], ['“Our calmest quarter.”', 'Mara, Design']];
  return <Sc label="Testimonial band" className={c.cen}><p className={c.quote}>{Q[i][0]}</p><small>{Q[i][1]}</small><button type="button" className={c.ghost} onClick={() => setI((v) => (v + 1) % 3)}>Next</button></Sc>;
}
