import { usePointer } from "../../../stage/pointerVars";
import c from "../cockpit.module.css";

/* 21 */ export function GlidePath() {
  const [ref, bind] = usePointer();
  return (
    <div ref={ref} className={c.ils} role="application" aria-label="Localiser and glide slope. Move the pointer here, or use the arrow keys." tabIndex={0} {...bind}>
      <svg viewBox="0 0 100 100" aria-hidden="true">{[-2, -1, 1, 2].map((k) => <circle key={`h${k}`} cx={50 + k * 14} cy="50" r="2.2" className={c.dot} />)}{[-2, -1, 1, 2].map((k) => <circle key={`v${k}`} cx="50" cy={50 + k * 14} r="2.2" className={c.dot} />)}</svg>
      <i className={c.loc} /><i className={c.gs} />
    </div>
  );
}
