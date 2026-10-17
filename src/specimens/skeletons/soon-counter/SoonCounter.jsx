import { useCycle } from "../../../stage/hooks";
import c from "../skeletons.module.css";

/* 28 */ export function SoonCounter() {
  const k = useCycle(60, 1000);
  return <div className={c.soon} role="timer" aria-label="Coming soon"><b>Soon</b><output>00:00:{String(59 - k).padStart(2, '0')}</output></div>;
}
