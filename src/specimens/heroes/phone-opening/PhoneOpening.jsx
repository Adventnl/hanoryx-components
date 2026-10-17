import { useState } from 'react';
import c from "../heroes.module.css";
import { Cta, Sc } from "../shared";

/* 18 */ export function PhoneOpening() {
  const [t, setT] = useState(0);
  return <Sc label="Phone hero" className={c.phoneH}><div><h3>In your pocket</h3><Cta onClick={() => setT((v) => (v + 1) % 3)}>Next screen</Cta></div><span className={c.phoneBody}><i style={{ '--h': t * 120 }} /></span></Sc>;
}
