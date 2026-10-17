import c from "../lenses.module.css";
import { Area } from "../shared";

/* 30 */ export function LineFocus() { return <Area label="Line focus" className={c.lineFocus}>{['The light was low', 'and the page was long;', 'we read it line by line', 'until the night was gone.'].map((t, k) => <span key={t} style={{ '--cy': (k + 0.5) / 4 }}>{t}</span>)}</Area>; }
