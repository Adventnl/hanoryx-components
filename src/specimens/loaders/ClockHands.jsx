import c from './loaders.module.css';
import { status } from './shared';

/* 8 */ export function ClockHands() { return <span className={c.clock} {...status('Loading')}><i /><b /></span>; }
