import c from './cursors.module.css';
import { Area } from './shared';

/* 13 */ export function PointerLayers() { return <Area label="Depth layers" className={c.depth}>{[0, 1, 2].map((k) => <i key={k} style={{ '--k': k }} />)}</Area>; }
