import { useState } from 'react';
import c from "../heroes.module.css";
import { Sc } from "../shared";

/* 06 */ export function CardStackHero() {
  const [f, setF] = useState(0);
  return <Sc label="Stacked cards" className={c.stack}><h3>Everything, together</h3><div>{[0, 1, 2].map((k) => <button key={k} type="button" aria-label={`Card ${k + 1}`} style={{ '--d': (k - f + 3) % 3, '--h': k * 90 }} onClick={() => setF(k)} />)}</div></Sc>;
}
