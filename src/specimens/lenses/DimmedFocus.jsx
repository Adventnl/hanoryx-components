import c from './lenses.module.css';
import { Area, Scene } from './shared';

/* 7 */ export function DimmedFocus() { return <Area label="Dimmed focus" className={c.dim}><Scene className={c.fill} /><div className={c.dimmer} /><i className={c.rim} /></Area>; }
