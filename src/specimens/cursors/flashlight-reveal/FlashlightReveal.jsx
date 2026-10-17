import c from "../cursors.module.css";
import { Area } from "../shared";

/* 8 */ export function FlashlightReveal() { return <Area label="Flashlight reveal" className={c.flash}><p aria-hidden="true">· · · · · · · · ·</p><p>Everything to see</p></Area>; }
