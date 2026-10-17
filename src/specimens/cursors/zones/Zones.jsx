import c from "../cursors.module.css";
import { Area } from "../shared";

/* 37 */ export function Zones() { return <Area label="Zones" className={c.zones}>{[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([a, b], k) => <i key={k} style={{ '--sx': a, '--sy': b }} />)}</Area>; }
