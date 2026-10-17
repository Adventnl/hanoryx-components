import c from "../lenses.module.css";
import { Area, Scene } from "../shared";

/* 42 */ export function FrostedWindow() { return <Area label="Frosted window" className={c.frost}><Scene className={c.fill} /><div className={c.pane2} /></Area>; }
