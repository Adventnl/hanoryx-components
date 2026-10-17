import c from "../loaders.module.css";
import { dots, status } from "../shared";

/* 7 */ export function OrbitingDots() { return <span className={c.orbit} {...status('Loading')}>{dots(3)}</span>; }
