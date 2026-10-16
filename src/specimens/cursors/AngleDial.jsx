import c from './cursors.module.css';
import { Area } from './shared';

/* 35 */ export function AngleDial() { return <Area label="Angle dial" className={c.angle}><i />{Array.from({ length: 12 }, (_, k) => <u key={k} style={{ '--k': k }} />)}</Area>; }
