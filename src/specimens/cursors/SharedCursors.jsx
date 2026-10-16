import c from './cursors.module.css';
import { Area } from './shared';

/* 21 */ export function SharedCursors() {
  return (
    <Area label="Shared cursors" className={c.crowd}>
      {[['Ada', 0], ['Lin', 1], ['Mo', 2]].map(([n, k]) => <span key={n} style={{ '--k': k }}><svg viewBox="0 0 16 20" aria-hidden="true"><path d="M2 2v14l4-3 3 6 2-1-3-6h5z" /></svg><b>{n}</b></span>)}
      <span className={c.me}><svg viewBox="0 0 16 20" aria-hidden="true"><path d="M2 2v14l4-3 3 6 2-1-3-6h5z" /></svg><b>You</b></span>
    </Area>
  );
}
