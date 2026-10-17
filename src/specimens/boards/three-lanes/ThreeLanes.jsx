import { useState } from 'react';
import c from "../boards.module.css";
import { Bd, LANES, START } from "../shared";

/* 02 */ export function ThreeLanes() {
  const [cards, setCards] = useState(START);
  const move = (i) => setCards((a) => a.map((x, k) => (k === i ? [x[0], (x[1] + 1) % 3] : x)));
  return (
    <Bd label="Three lanes. Click a card to move it on" className={c.three}>
      {LANES.map((l, col) => (
        <div key={l} className={c.lane}><b>{l}</b>{cards.map(([t, at], i) => at === col && <button key={t} type="button" className={c.cd} onClick={() => move(i)} aria-label={`${t}, in ${l}. Move to ${LANES[(col + 1) % 3]}`}>{t}</button>)}</div>
      ))}
    </Bd>
  );
}
