import { useState } from 'react';
import c from './bento.module.css';
import { Tile } from './shared';

const COLS = [['Todo', ['Wind', 'Open']], ['Done', ['Print']]];

export function BoardTile() {
  const [cols, setCols] = useState(COLS);
  const move = (ci, name) => setCols((cs) => cs.map((c2, i) => (i === ci ? [c2[0], c2[1].filter((x) => x !== name)] : [c2[0], [...c2[1], ...(i === 1 - ci ? [name] : [])]])));
  return (
    <div className={c.fig}>
      <Tile k="Board">
        <div className={c.kan}>
          {cols.map(([title, cards], ci) => (
            <div key={title}><em>{title}</em>{cards.map((n) => <button key={n} type="button" aria-label={`${n}: move to ${cols[1 - ci][0]}`} onClick={() => move(ci, n)}>{n}</button>)}</div>
          ))}
        </div>
      </Tile>
    </div>
  );
}
