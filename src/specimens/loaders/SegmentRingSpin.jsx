import c from './loaders.module.css';
import { dots, status } from './shared';

/* 35 */ export function SegmentRingSpin() { return <span className={c.segs} {...status('Loading')}>{dots(8)}</span>; }
