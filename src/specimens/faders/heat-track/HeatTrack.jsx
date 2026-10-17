import c from "../faders.module.css";
import { Track } from "../shared";

/* 8 */ export function HeatTrack() {
  return <Track cls={c.heat} label="Heat track" init={0.6}>{() => <i />}</Track>;
}
