import c from './fold.module.css';

/* ---------- the still side ---------- */

export const MULT = [0, 1, -2, 2];

export const LETTERS = ['F', 'O', 'L', 'D'];

/** one panel of the leaflet, and (inside it, hinged to its far edge) the next */
export function Pleat({ k }) {
  return (
    <div className={`${c.pleat} ${k ? '' : c.first}`} style={{ '--k': k, '--s': MULT[k], '--sh': k % 2 ? -1 : 1 }}>
      <i className={c.front}><b>{LETTERS[k]}</b></i>
      <i className={c.back} />
      {k < 3 ? <Pleat k={k + 1} /> : null}
    </div>
  );
}

/* ---------- helpers ---------- */

export const PN = ['A', 'B', 'C', 'D'];
