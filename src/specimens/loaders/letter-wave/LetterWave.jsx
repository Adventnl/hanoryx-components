import c from "../loaders.module.css";
import { status } from "../shared";

/* 21 */ export function LetterWave() { return <span className={c.letters} {...status('Loading')}>{'LOADING'.split('').map((l, k) => <i key={k} style={{ '--k': k }}>{l}</i>)}</span>; }
