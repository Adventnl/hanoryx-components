import { useState } from 'react';
import c from "../sheets.module.css";
import { Stage } from "../shared";

/* 20 */ export function NestedSheets() {
  const [d, setD] = useState(0);
  return (
    <Stage label="Nested sheets" onEscape={() => setD(Math.max(0, d - 1))}>
      <button type="button" className={c.open} onClick={() => setD(1)}>Open</button>
      <i className={c.scrim} data-on={d > 0} />
      <div className={c.nest} data-on={d > 0} style={{ '--d': d }} role="dialog" aria-label="First sheet" inert={d !== 1 || undefined}><b>One</b><button type="button" onClick={() => setD(2)}>Open another</button><button type="button" onClick={() => setD(0)}>Close</button></div>
      <div className={`${c.nest} ${c.nest2}`} data-on={d > 1} role="dialog" aria-label="Second sheet" inert={d !== 2 || undefined}><b>Two</b><button type="button" onClick={() => setD(1)}>Back</button></div>
    </Stage>
  );
}
