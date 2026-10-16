import c from './lenses.module.css';
import { Area, Scene } from './shared';

/* 36 */ export function Scope() { return <Area label="Scope" className={c.mag}><Scene className={c.fill} /><div className={c.lens}><div><Scene className={c.big} /></div></div><i className={c.rim} /><i className={c.reticle} /></Area>; }
