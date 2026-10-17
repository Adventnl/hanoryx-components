import c from "../loaders.module.css";
import { status } from "../shared";

/* 26 */ export function LittlePlanet() { return <span className={c.planet} {...status('Loading')}><i /><b /></span>; }
