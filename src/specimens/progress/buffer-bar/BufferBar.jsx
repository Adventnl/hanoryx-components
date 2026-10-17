import c from "../progress.module.css";
import { run } from "../shared";

/* 25 */ export function BufferBar() { return <div className={c.buffer} {...run('Buffering')}><i /><b /></div>; }
