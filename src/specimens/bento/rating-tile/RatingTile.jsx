import { useState } from 'react';
import c from "../bento.module.css";
import { Tile } from "../shared";

export function RatingTile() {
  const [rate, setRate] = useState(3);
  const [hover, setHover] = useState(0);
  const shown = hover || rate;
  return (
    <div className={c.fig}>
      <Tile k={`Rating · ${rate}/5`}>
        <span className={c.stars} role="radiogroup" aria-label="Rating" onPointerLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((n) => <button key={n} type="button" role="radio" aria-checked={rate === n} aria-label={`${n} stars`} data-on={n <= shown} onPointerEnter={() => setHover(n)} onClick={() => setRate(n)} />)}
        </span>
      </Tile>
    </div>
  );
}
