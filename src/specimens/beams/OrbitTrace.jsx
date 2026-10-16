import c from './beams.module.css';
import { Sv } from './shared';

/* 22 */ export const OrbitTrace = () => <Sv label="Orbit paths with dots"><g className={c.orb}>{[14, 24, 34].map((r, k) => <g key={r} style={{ animationDuration: `${6 + k * 3}s` }} className={c.spinG}><ellipse cx="55" cy="32" rx={r * 1.6} ry={r * 0.9} className={c.base} /><circle cx={55 + r * 1.6} cy="32" r="2.2" className={c.dot} /></g>)}</g></Sv>;
