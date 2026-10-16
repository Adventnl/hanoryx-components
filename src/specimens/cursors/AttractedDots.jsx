import c from './cursors.module.css';
import { Area } from './shared';

/* 25 */ export function AttractedDots() { return <Area label="Attracted dots" className={c.attract}>{Array.from({ length: 20 }, (_, k) => <i key={k} style={{ '--k': k, '--cx': ((k * 37) % 100) / 100, '--cy': ((k * 61) % 100) / 100 }} />)}</Area>; }
