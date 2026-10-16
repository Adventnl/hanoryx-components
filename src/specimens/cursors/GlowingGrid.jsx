import c from './cursors.module.css';
import { Area } from './shared';

/* 11 */ export function GlowingGrid() { return <Area label="Glowing grid" className={c.gridGlow}>{Array.from({ length: 40 }, (_, k) => <i key={k} style={{ '--cx': ((k % 8) + 0.5) / 8, '--cy': (Math.floor(k / 8) + 0.5) / 5 }} />)}</Area>; }
