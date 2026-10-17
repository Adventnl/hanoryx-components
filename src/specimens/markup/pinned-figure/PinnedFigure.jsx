import { useState } from 'react';
import c from "../markup.module.css";

const PINS = [[22, 40, 'The belt'], [58, 68, 'The hall'], [80, 26, 'The gate']];

export function PinnedFigure() {
  const [k, setK] = useState(0);
  return (
    <div className={c.fig}>
      <div className={c.figure}>
        {PINS.map(([x, y, label], i) => (
          <button key={label} type="button" className={c.pin} style={{ '--ox': `${x}%`, '--oy': `${y}%` }} aria-pressed={i === k} aria-label={`Pin ${i + 1}: ${label}`} onClick={() => setK(i)}>{i + 1}</button>
        ))}
      </div>
      <p className={c.note}>{k + 1}  ·  {PINS[k][2]}</p>
    </div>
  );
}
