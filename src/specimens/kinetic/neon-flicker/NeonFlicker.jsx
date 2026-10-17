import c from "../kinetic.module.css";
import { chars } from "../shared";

/* 13 */ export function NeonFlicker() {
  return <div className={c.fig} role="img" aria-label="Open"><b className={c.neon} aria-hidden="true">{chars('OPEN')}</b></div>;
}
