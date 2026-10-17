import c from "../lenses.module.css";
import { Area, Scene } from "../shared";

/* 37 */ export function PixelLoupe() { return <Area label="Pixel loupe" className={c.loupe}><Scene className={c.fill} /><i /><b /></Area>; }
