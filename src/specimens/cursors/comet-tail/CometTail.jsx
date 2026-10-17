import c from "../cursors.module.css";
import { Area, dots } from "../shared";

/* 6 */ export function CometTail() { return <Area label="Comet" className={c.comet}>{dots(6)}</Area>; }
