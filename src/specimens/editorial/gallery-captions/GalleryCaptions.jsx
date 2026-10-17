import { useState } from 'react';
import c from "../editorial.module.css";

/* ---------- shared ---------- */

const ARTS = ['art1', 'art2', 'art3'];

const SHOTS = ['The gate at dawn.', 'The belt at noon.', 'The hall at dusk.'];

export function GalleryCaptions() {
  const [k, setK] = useState(0);
  return (
    <div className={c.fig}>
      <div className={c.thumbs} role="radiogroup" aria-label="Photographs">
        {SHOTS.map((s, i) => <button key={s} type="button" role="radio" aria-checked={i === k} aria-label={s} className={`${c.thumb} ${c[ARTS[i]]}`} onClick={() => setK(i)} />)}
      </div>
      <p key={k} className={c.caption}>{k + 1} / {SHOTS.length} — {SHOTS[k]}</p>
    </div>
  );
}
