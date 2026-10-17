import c from "../loaders.module.css";
import { status } from "../shared";

/* 10 */ export function ChasingArc() { return <svg className={c.arc} viewBox="0 0 50 50" {...status('Loading')}><circle cx="25" cy="25" r="20" /></svg>; }
