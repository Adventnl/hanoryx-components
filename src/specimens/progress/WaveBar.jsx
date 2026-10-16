import c from './progress.module.css';
import { run } from './shared';

/* 29 */ export function WaveBar() { return <div className={c.waveBar} {...run('Wave')}><svg viewBox="0 0 120 14" preserveAspectRatio="none"><path d="M0 7q7.5-8 15 0t15 0 15 0 15 0 15 0 15 0 15 0 15 0" /></svg></div>; }
