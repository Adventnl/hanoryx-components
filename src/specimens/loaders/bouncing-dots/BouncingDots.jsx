import c from "../loaders.module.css";
import { dots, status } from "../shared";

/* 3 */ export function BouncingDots() { return <span className={c.bounce} {...status('Loading')}>{dots(3)}</span>; }
