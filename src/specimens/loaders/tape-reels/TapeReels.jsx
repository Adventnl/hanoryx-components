import c from "../loaders.module.css";
import { status } from "../shared";

/* 38 */ export function TapeReels() { return <span className={c.reels} {...status('Loading')}><i /><i /><b /></span>; }
