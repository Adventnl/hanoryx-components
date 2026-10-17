import c from "../progress.module.css";
import { run } from "../shared";

/* 39 */ export function RingToCheck() { return <div className={c.ringDone} {...run('Ring then check')}><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="42" pathLength="1" /><path d="M30 52l14 14 26-30" pathLength="1" /></svg></div>; }
