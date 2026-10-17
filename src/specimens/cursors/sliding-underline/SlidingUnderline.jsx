import c from "../cursors.module.css";
import { Area } from "../shared";

/* 33 */ export function SlidingUnderline() { return <Area label="Sliding underline" className={c.underline}><nav>{['Work', 'Lab', 'Mail', 'About'].map((t) => <span key={t}>{t}</span>)}<i /></nav></Area>; }
