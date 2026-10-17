import c from "../lenses.module.css";
import { Area, COPY } from "../shared";

/* 1 */ export function Magnifier() {
  return <Area label="Magnifier" className={c.mag}><p>{COPY}</p><div className={c.lens}><div><p>{COPY}</p></div></div><i className={c.rim} /></Area>;
}
