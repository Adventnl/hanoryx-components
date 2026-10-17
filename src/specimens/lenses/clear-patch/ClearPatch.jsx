import c from "../lenses.module.css";
import { Area, Scene } from "../shared";

/* 6 */ export function ClearPatch() { return <Area label="Clear patch" className={c.clear}><Scene className={c.fill} /><div className={c.veil} /></Area>; }
