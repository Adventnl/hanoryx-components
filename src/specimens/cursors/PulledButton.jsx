import c from './cursors.module.css';
import { Area } from './shared';

/* 4 */ export function PulledButton() { return <Area label="Magnet button" className={c.magnetArea}><button type="button" className={c.magnet}>Pull</button></Area>; }
