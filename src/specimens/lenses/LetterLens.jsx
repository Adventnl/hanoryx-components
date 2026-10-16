import c from './lenses.module.css';
import { Area } from './shared';

/* 10 */ export function LetterLens() { return <Area label="Letter lens" className={c.letters}><p>{'LENSES'.split('').map((l, k) => <span key={k} style={{ '--cx': 0.16 + k * 0.136 }}>{l}</span>)}</p></Area>; }
