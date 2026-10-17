import c from "../cursors.module.css";
import { Area } from "../shared";

/* 30 */ export function TurningGear() { return <Area label="Gear that turns with the pointer" className={c.gear}><svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="9" /><path d="M20 3v6M20 31v6M3 20h6M31 20h6M8 8l4 4M28 28l4 4M32 8l-4 4M12 28l-4 4" /></svg></Area>; }
