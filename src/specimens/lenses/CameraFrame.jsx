import c from './lenses.module.css';
import { Scene } from './shared';

/* 24 */ export function CameraFrame() { return <div className={`${c.area} ${c.vf}`}><Scene className={c.fill} /><div><i /><i /><i /><i /></div><b>REC ●</b></div>; }
