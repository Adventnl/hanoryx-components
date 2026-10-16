import { useState } from 'react';
import c from './bento.module.css';
import { Tile, pad } from './shared';

export function CounterTile() {
  const [n, setN] = useState(7);
  return (
    <div className={c.fig}>
      <Tile k="Count">
        <span className={c.cnt}>
          <button type="button" aria-label="Subtract one" onClick={() => setN((v) => Math.max(0, v - 1))}>−</button>
          <b className={c.v}>{pad(n)}</b>
          <button type="button" aria-label="Add one" onClick={() => setN((v) => Math.min(99, v + 1))}>+</button>
        </span>
      </Tile>
    </div>
  );
}
