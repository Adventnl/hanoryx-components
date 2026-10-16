import c from './loaders.module.css';
import { status } from './shared';

/* 9 */ export function SandTimer() { return <span className={c.glass} {...status('Loading')}><i /></span>; }
