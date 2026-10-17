import c from "../loaders.module.css";
import { dots, status } from "../shared";

/* 5 */ export function EqualiserBars() { return <span className={c.eq} {...status('Loading')}>{dots(5)}</span>; }
