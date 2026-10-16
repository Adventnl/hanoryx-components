import c from './progress.module.css';
import { run } from './shared';

/* 28 */ export function SpiralTrace() { return <div className={c.spiralP} {...run('Spiral')}><svg viewBox="0 0 100 100"><path d="M50 50m0-4a4 4 0 1 1-4 4a12 12 0 1 1 12 12a20 20 0 1 1-20-20a28 28 0 1 1 28 28a36 36 0 1 1-36-36" pathLength="1" /></svg></div>; }
