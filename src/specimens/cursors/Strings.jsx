import c from './cursors.module.css';
import { Area } from './shared';

/* 26 */ export function Strings() { return <Area label="Strings" className={c.strings}>{[0, 1, 2, 3].map((k) => <i key={k} style={{ '--k': k }} />)}<b /></Area>; }
