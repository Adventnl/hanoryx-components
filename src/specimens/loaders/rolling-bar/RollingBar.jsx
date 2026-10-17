import c from "../loaders.module.css";
import { status } from "../shared";

/* 23 */ export function RollingBar() { return <span className={c.roller} {...status('Loading')}><i /></span>; }
