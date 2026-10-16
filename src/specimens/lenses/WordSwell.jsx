import c from './lenses.module.css';
import { Area } from './shared';

/* 31 */ export function WordSwell() { return <Area label="Word swell" className={c.swell}><p>{['A', 'lens', 'makes', 'one', 'word', 'loud'].map((w, k) => <span key={w} style={{ '--cx': 0.1 + k * 0.16 }}>{w}</span>)}</p></Area>; }
