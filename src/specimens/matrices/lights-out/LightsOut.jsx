import { useState } from 'react';
import { useCell } from "../../../stage/chartKit";
import c from "../matrices.module.css";

/* 14 */ const press = (g, i) => {
  const x = i % 5;
  const y = Math.floor(i / 5);
  return g.map((on, j) => {
    const jx = j % 5;
    const jy = Math.floor(j / 5);
    return Math.abs(jx - x) + Math.abs(jy - y) <= 1 ? !on : on;
  });
};

const LIGHTS_START = [6, 12, 18, 8].reduce(press, Array(25).fill(false));

export function LightsOut() {
  const [g, setG] = useState(LIGHTS_START);
  const [moves, setMoves] = useState(0);
  const won = g.every((x) => !x);
  const [at, bind] = useCell(5, 5, (r, k) => {
    if (won) { setG(LIGHTS_START); setMoves(0); } else { setG((p) => press(p, r * 5 + k)); setMoves((m) => m + 1); }
  });
  return (
    <div className={c.box}>
      <div className={c.lights} {...bind} aria-label="Lights out, click a light to flip it and its neighbours">
        {g.map((on, i) => <i key={i} data-on={on} data-at={i === at[0] * 5 + at[1]} />)}
      </div>
      <output className={c.out}>{won ? <b>Dark · click to restart</b> : <>Moves <b>{moves}</b></>}</output>
    </div>
  );
}
