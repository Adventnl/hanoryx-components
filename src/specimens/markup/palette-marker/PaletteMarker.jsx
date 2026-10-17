import { useState } from 'react';
import c from "../markup.module.css";

const WORDS = ['belt', 'gates', 'tea', 'timetables', 'platform', 'hall'];

const PENS = ['red', 'white', 'line'];

export function PaletteMarker() {
  const [pen, setPen] = useState(0);
  const [marks, setMarks] = useState({});
  const paint = (w) => setMarks((m) => {
    const n = { ...m };
    if (n[w] === pen) delete n[w]; else n[w] = pen;
    return n;
  });
  return (
    <div className={c.fig}>
      <p className={c.para}>
        {WORDS.map((w) => <button key={w} type="button" className={c.tok} data-pen={marks[w] === undefined ? '' : PENS[marks[w]]} onClick={() => paint(w)}>{w}</button>)}
      </p>
      <div role="radiogroup" aria-label="Pen colour" className={c.chipsRow}>
        {PENS.map((p, i) => <button key={p} type="button" role="radio" aria-checked={i === pen} aria-label={`${p} pen`} className={c.swatch} data-pen={p} onClick={() => setPen(i)} />)}
      </div>
    </div>
  );
}
