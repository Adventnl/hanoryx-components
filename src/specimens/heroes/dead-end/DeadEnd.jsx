import c from "../heroes.module.css";
import { Cta, Sc } from "../shared";

/* 36 */ export function DeadEnd() {
  return <Sc label="Page not found" className={c.lost}><b>404</b><small>This page took a different road.</small><Cta>Go home</Cta></Sc>;
}
