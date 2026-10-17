import c from "../loaders.module.css";
import { dots, status } from "../shared";

/* 22 */ export function DotChase() { return <span className={c.chase} {...status('Loading')}><i />{dots(3)}</span>; }
