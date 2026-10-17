import c from "../lenses.module.css";
import { Area, Scene } from "../shared";

/* 17 */ export function ViewfinderMap() { return <Area label="Viewfinder on a thumbnail" className={c.mini}><Scene className={c.fill} /><i className={c.finder} /></Area>; }
