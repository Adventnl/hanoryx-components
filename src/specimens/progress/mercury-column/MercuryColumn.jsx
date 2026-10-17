import c from "../progress.module.css";
import { run } from "../shared";

/* 11 */ export function MercuryColumn() { return <div className={c.thermo} {...run('Thermometer')}><i /><b /></div>; }
