import c from "../progress.module.css";
import { cells, run } from "../shared";

/* 13 */ export function DottedFill() { return <div className={c.dotted} {...run('Dotted')}>{cells(20)}</div>; }
