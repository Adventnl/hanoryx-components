import { useState } from 'react';
import c from "../markup.module.css";

const VIEWS = ['markup', 'final', 'original'];

export function TrackedChanges() {
  const [v, setV] = useState(0);
  return (
    <div className={c.fig}>
      <p className={c.para} data-view={VIEWS[v]}>The belt <del>keeps</del><ins>kept</ins> moving <del>until midnight</del><ins>all night</ins>, and nobody <del>minded</del><ins>complained</ins>.</p>
      <button type="button" className={c.pill} aria-label={`Showing the ${VIEWS[v]} view. Switch view`} onClick={() => setV((x) => (x + 1) % VIEWS.length)}>{VIEWS[v]}</button>
    </div>
  );
}
