import { useState } from 'react';
import { useCycle } from "../../../stage/hooks";
import c from "../studio.module.css";

/* 28 */ export function StepSequencer() {
  const [on, setOn] = useState(() => Array.from({ length: 16 }, (_, k) => k % 4 === 0 || k === 6 || k === 11));
  const t = useCycle(16, 220);
  return (
    <div className={c.seq} role="group" aria-label="Step sequencer">
      {on.map((x, k) => <button key={k} type="button" aria-pressed={x} aria-label={`Step ${k + 1}`} data-now={k === t} onClick={() => setOn((a) => a.map((y, j) => (j === k ? !y : y)))} />)}
    </div>
  );
}
