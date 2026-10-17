import c from "../loaders.module.css";
import { status } from "../shared";

/* 6 */ export function RipplePulse() { return <span className={c.ripple} {...status('Loading')}><i /><i /></span>; }
