import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../heroes.module.css";
import { Sc } from "../shared";

/* 39 */ export function ReturnToTop() {
  const [p, setP] = useState(60);
  return <Sc label="Back to top" className={c.cen}><button type="button" className={c.ring} aria-label={`${p} percent down the page. Click to go to the top`} style={{ '--p': p }} onClick={() => setP((v) => (v >= 100 ? 0 : Math.min(100, v + 25)))}><Ico n="up" /></button><small>{p}% down</small></Sc>;
}
