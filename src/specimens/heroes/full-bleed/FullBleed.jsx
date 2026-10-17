import c from "../heroes.module.css";
import { Sc } from "../shared";

/* 04 */ export function FullBleed() {
  return <Sc label="Full-bleed hero" className={c.overlay}><span className={c.photo} /><div><small>New season</small><h3>Out in the open</h3></div></Sc>;
}
