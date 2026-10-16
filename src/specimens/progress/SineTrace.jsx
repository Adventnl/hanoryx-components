import c from './progress.module.css';
import { run } from './shared';

/* 41 */ export function SineTrace() { return <div className={c.sine} {...run('Sine trace')}><svg viewBox="0 0 120 40" preserveAspectRatio="none"><path d="M0 20C15 -6 25 -6 40 20S65 46 80 20 105 -6 120 20" pathLength="1" /></svg></div>; }
