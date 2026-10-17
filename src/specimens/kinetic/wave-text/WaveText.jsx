import c from "../kinetic.module.css";
import { chars } from "../shared";

/* 3 */ export function WaveText() {
  return <div className={c.fig} role="img" aria-label="Waveform"><p className={c.wave}>{chars('WAVEFORM')}</p></div>;
}
