import { useState } from 'react';
import { clamp } from "../../../stage/hooks";
import c from "../boards.module.css";
import { Bd, LANES, START } from "../shared";

/* 03 */ export function KeyboardMove() {
  const [cards, setCards] = useState(START);
  const [sel, setSel] = useState(1);
  const shift = (d) => setCards((a) => a.map((x, k) => (k === sel ? [x[0], clamp(x[1] + d, 0, 2)] : x)));
  return (
    <Bd label="Three lanes. Select a card, then use the left and right arrow keys" className={c.three} tabIndex={0} onKeyDown={(e) => { if (e.key === 'ArrowRight') { e.preventDefault(); shift(1); } else if (e.key === 'ArrowLeft') { e.preventDefault(); shift(-1); } }}>
      {LANES.map((l, col) => (
        <div key={l} className={c.lane}><b>{l}</b>{cards.map(([t, at], i) => at === col && <button key={t} type="button" className={c.cd} aria-pressed={sel === i} onClick={() => setSel(i)}>{t}</button>)}</div>
      ))}
    </Bd>
  );
}
