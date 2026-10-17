import c from "../lenses.module.css";
import { Area, Scene } from "../shared";

/* 28 */ export function Keyhole() { return <Area label="Keyhole" className={c.key}><Scene className={`${c.fill} ${c.darkS}`} /><Scene className={`${c.fill} ${c.keyClip}`} /></Area>; }
