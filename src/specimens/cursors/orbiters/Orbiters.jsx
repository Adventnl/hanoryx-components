import c from "../cursors.module.css";
import { Area } from "../shared";

/* 40 */ export function Orbiters() { return <Area label="Orbiters" className={c.orbiters}><b />{[0, 1, 2].map((k) => <i key={k} style={{ '--k': k }} />)}</Area>; }
