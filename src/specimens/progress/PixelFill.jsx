import c from './progress.module.css';
import { cells, run } from './shared';

/* 14 */ export function PixelFill() { return <div className={c.pixels} {...run('Pixel fill')}>{cells(48)}</div>; }
