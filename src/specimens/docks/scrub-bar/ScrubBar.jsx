import { useDrag } from "../../../stage/hooks";
import c from "../docks.module.css";

/* 32 */ export function ScrubBar() {
  const [v, bind] = useDrag({ init: 0.4, steps: 60 });
  return (
    <div className={c.scrub} {...bind} aria-label="Scrub bar" aria-valuetext={`${Math.round(v * 60)} seconds`} style={{ ...bind.style, '--v': v }}>
      <i aria-hidden="true" />
      {Array.from({ length: 13 }, (_, k) => <u key={k} aria-hidden="true" />)}
      <output>{String(Math.floor((v * 60) / 60)).padStart(2, '0')}:{String(Math.round(v * 60) % 60).padStart(2, '0')}</output>
    </div>
  );
}
