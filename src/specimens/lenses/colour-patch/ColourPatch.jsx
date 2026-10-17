import c from "../lenses.module.css";
import { Area, Scene } from "../shared";

/* 14 */ export function ColourPatch() { return <Area label="Colour patch" className={c.mag}><Scene className={`${c.fill} ${c.mono}`} /><div className={`${c.lens} ${c.colour}`}><div><Scene /></div></div><i className={c.rim} /></Area>; }
