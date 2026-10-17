import { useState } from 'react';
import c from "../sheets.module.css";
import { Stage } from "../shared";

/* 37 */ export function RaiseALayer() {
  const [k, setK] = useState(1);
  return <Stage label="Raise a layer"><div className={c.raise}>{[0, 1, 2].map((i) => <button key={i} type="button" aria-pressed={i === k} style={{ '--i': i, '--z': i === k ? 9 : 3 - Math.abs(i - k) }} onClick={() => setK(i)}>Layer {i + 1}</button>)}</div></Stage>;
}
