import c from "../progress.module.css";
import { run } from "../shared";

/* 7 */ export function HalfRing() { return <div className={c.half} {...run('Half ring')}><svg viewBox="0 0 100 56"><path d="M8 50a42 42 0 0 1 84 0" /><path d="M8 50a42 42 0 0 1 84 0" pathLength="1" /></svg><b /></div>; }
