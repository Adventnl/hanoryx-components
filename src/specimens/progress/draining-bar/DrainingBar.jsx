import c from "../progress.module.css";
import { run } from "../shared";

/* 26 */ export function DrainingBar() { return <div className={c.drain} {...run('Countdown')}><i /></div>; }
