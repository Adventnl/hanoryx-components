import c from './lenses.module.css';
import { Area, Scene } from './shared';

/* 13 */ export function InvertingLens() { return <Area label="Inverting lens" className={c.mag}><Scene className={c.fill} /><div className={`${c.lens} ${c.inv}`}><div><Scene /></div></div><i className={c.rim} /></Area>; }
