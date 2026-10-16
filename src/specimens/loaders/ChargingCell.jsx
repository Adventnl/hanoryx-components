import c from './loaders.module.css';
import { status } from './shared';

/* 19 */ export function ChargingCell() { return <span className={c.battery} {...status('Charging')}><i /></span>; }
