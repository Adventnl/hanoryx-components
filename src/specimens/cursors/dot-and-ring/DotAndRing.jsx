import c from "../cursors.module.css";
import { Area } from "../shared";

/* 3 */ export function DotAndRing() { return <Area label="Dot and ring"><i className={c.dot} /><i className={`${c.ring} ${c.slow}`} /></Area>; }
