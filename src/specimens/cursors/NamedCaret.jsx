import c from './cursors.module.css';
import { Area } from './shared';

/* 20 */ export function NamedCaret() { return <Area label="Named caret" className={c.caret}><svg viewBox="0 0 16 20" aria-hidden="true"><path d="M2 2v14l4-3 3 6 2-1-3-6h5z" /></svg><b>You</b></Area>; }
