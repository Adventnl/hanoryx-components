import c from './lenses.module.css';
import { Area } from './shared';

/* 9 */ export function FisheyeBars() { return <Area label="Fisheye bars" className={c.fish}>{Array.from({ length: 14 }, (_, k) => <i key={k} style={{ '--cx': (k + 0.5) / 14, '--h': 0.3 + ((k * 37) % 55) / 100 }} />)}</Area>; }
