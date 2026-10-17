import c from "../loaders.module.css";
import { status } from "../shared";

/* 24 */ export function BouncingBall() { return <span className={c.ball} {...status('Loading')}><i /><b /></span>; }
