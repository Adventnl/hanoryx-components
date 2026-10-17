import c from "../loaders.module.css";
import { dots, status } from "../shared";

/* 12 */ export function SpinningCube() { return <span className={c.cube} {...status('Loading')}>{dots(6)}</span>; }
