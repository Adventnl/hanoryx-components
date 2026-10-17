import c from "../progress.module.css";
import { run } from "../shared";

/* 1 */ export function LinearBar() { return <div className={c.linear} {...run('Linear')}><i /></div>; }
