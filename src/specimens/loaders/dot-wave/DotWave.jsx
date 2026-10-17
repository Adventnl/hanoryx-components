import c from "../loaders.module.css";
import { dots, status } from "../shared";

/* 4 */ export function DotWave() { return <span className={c.wave} {...status('Loading')}>{dots(6)}</span>; }
