import c from './lenses.module.css';
import { Area, Scene } from './shared';

/* 22 */ export function SunFlare() { return <Area label="Lens flare" className={c.flare}><Scene className={c.fill} /><i className={c.f1} /><i className={c.f2} /><i className={c.f3} /></Area>; }
