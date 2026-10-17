import c from "../lenses.module.css";
import { Area } from "../shared";

/* 8 */ export function DepthOfField() { return <Area label="Depth of field" className={c.dof}><div>{['Near', 'Mid', 'Far'].map((t, k) => <span key={t} style={{ '--z': k }}>{t}</span>)}</div></Area>; }
