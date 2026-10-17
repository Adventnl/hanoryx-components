import { useState } from 'react';
import c from "../editorial.module.css";

const ENDNOTES = ['A platform sign, 18:02.', 'Field notes, undated.', 'Overheard at gate seven.'];

export function Endnotes() {
  const [sel, setSel] = useState(1);
  return (
    <div className={c.fig}>
      <p className={c.para}>
        The belt{' '}
        {ENDNOTES.map((_, i) => <button key={i} type="button" className={c.sup} aria-pressed={sel === i} aria-label={`Note ${i + 1}`} onClick={() => setSel(i)}>{i + 1}</button>)}
        {' '}keeps moving.
      </p>
      <ol className={c.notes}>
        {ENDNOTES.map((n, i) => <li key={n} data-on={sel === i}><button type="button" onClick={() => setSel(i)}>{n}</button></li>)}
      </ol>
    </div>
  );
}
