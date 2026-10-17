import { useState } from 'react';
import c from "../bento.module.css";
import { Tile } from "../shared";

const SW = ['#ff3333', '#f1f1f4', '#8a8d96', '#5a0f0f'];

export function SwatchTile() {
  const [k, setK] = useState(0);
  return (
    <div className={c.fig}>
      <Tile k="Accent" style={{ '--acc': SW[k] }} className={c.accent}>
        <b className={c.v}>{['Signal', 'Paper', 'Steel', 'Ember'][k]}</b>
        <span className={c.swatches} role="radiogroup" aria-label="Accent colour">
          {SW.map((s, i) => <button key={s} type="button" role="radio" aria-checked={i === k} aria-label={['Signal', 'Paper', 'Steel', 'Ember'][i]} style={{ background: s }} onClick={() => setK(i)} />)}
        </span>
      </Tile>
    </div>
  );
}
