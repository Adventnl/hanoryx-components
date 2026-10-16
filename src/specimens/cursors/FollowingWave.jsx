import c from './cursors.module.css';
import { Area } from './shared';

/* 39 */ export function FollowingWave() { return <Area label="Wave follows the pointer" className={c.sine}><svg viewBox="0 0 120 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 30C15 0 25 0 40 30S65 60 80 30 105 0 120 30" /></svg></Area>; }
