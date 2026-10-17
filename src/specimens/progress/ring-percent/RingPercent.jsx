import c from "../progress.module.css";
import { run } from "../shared";

/* 6 */ export function RingPercent() { return <div className={c.ringP} {...run('Ring')}><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="42" /><circle cx="50" cy="50" r="42" pathLength="1" /></svg><b /></div>; }
