import c from "../loaders.module.css";
import { status } from "../shared";

/* 32 */ export function RisingLiquid() { return <span className={c.liquid} {...status('Loading')}><i /></span>; }
