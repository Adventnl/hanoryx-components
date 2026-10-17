import c from "../lenses.module.css";
import { Area, Scene } from "../shared";

/* 11 */ export function Peephole() { return <Area label="Peephole" className={c.peep}><Scene className={c.fill} /><div className={c.door} /></Area>; }
