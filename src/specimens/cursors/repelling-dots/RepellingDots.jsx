import c from "../cursors.module.css";
import { Area } from "../shared";

/* 24 */ export function RepellingDots() { return <Area label="Repelling dots" className={c.repel}>{Array.from({ length: 35 }, (_, k) => <i key={k} style={{ '--cx': (k % 7) / 6, '--cy': Math.floor(k / 7) / 4 }} />)}</Area>; }
