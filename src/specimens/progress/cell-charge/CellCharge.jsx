import c from "../progress.module.css";
import { run } from "../shared";

/* 10 */ export function CellCharge() { return <div className={c.cell} {...run('Battery')}><i /></div>; }
