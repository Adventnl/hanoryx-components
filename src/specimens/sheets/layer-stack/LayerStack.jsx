import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../sheets.module.css";
import { Stage } from "../shared";

/* 42 */ export function LayerStack() {
  const [n, setN] = useState(3);
  return (
    <Stage label="Stacked layers">
      <div className={c.layers}>{Array.from({ length: n }, (_, k) => <i key={k} style={{ '--k': k }} />)}</div>
      <span className={c.pm}><button type="button" aria-label="Remove a layer" disabled={n <= 1} onClick={() => setN(n - 1)}><Ico n="minus" /></button><output>{n}</output><button type="button" aria-label="Add a layer" disabled={n >= 6} onClick={() => setN(n + 1)}><Ico n="plus" /></button></span>
    </Stage>
  );
}
