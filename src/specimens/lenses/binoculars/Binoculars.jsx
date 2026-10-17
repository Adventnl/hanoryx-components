import c from "../lenses.module.css";
import { Area, Scene } from "../shared";

/* 27 */ export function Binoculars() { return <Area label="Binoculars" className={c.binos}><Scene className={c.fill} /><div className={c.cover} /></Area>; }
