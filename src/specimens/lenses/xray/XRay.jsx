import c from "../lenses.module.css";
import { Area } from "../shared";

/* 12 */ export function XRay() { return <Area label="X-ray" className={c.xray}><div className={c.body}><i /><i /><i /><i /></div><div className={c.lens}><div className={c.bones}><i /><i /><i /><i /></div></div><i className={c.rim} /></Area>; }
