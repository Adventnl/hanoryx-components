import { useTick } from "../../../stage/hooks";
import c from "../studio.module.css";

/* 34 */ export function Timecode() {
  const t = useTick(1000);
  const s = 123 + t;
  return <div className={c.tc} role="timer" aria-label="Timecode"><output>{String(Math.floor(s / 60)).padStart(2, '0')}:{String(s % 60).padStart(2, '0')}:{String((t * 7) % 25).padStart(2, '0')}</output></div>;
}
