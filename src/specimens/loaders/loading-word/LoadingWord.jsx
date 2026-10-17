import c from "../loaders.module.css";
import { status } from "../shared";

/* 20 */ export function LoadingWord() { return <span className={c.words} {...status('Loading')}>Loading<b>.</b><b>.</b><b>.</b></span>; }
