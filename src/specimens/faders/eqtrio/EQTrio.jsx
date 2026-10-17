import { useDrag } from "../../../stage/hooks";
import c from "../faders.module.css";

/* 39 */ export function EQTrio() {
  const [a, bindA] = useDrag({ mode: 'y', init: 0.6 });
  const [b, bindB] = useDrag({ mode: 'y', init: 0.5 });
  const [d, bindD] = useDrag({ mode: 'y', init: 0.4 });
  return (
    <div className={c.eq}>
      {[['LO', a, bindA], ['MID', b, bindB], ['HI', d, bindD]].map(([t, v, bind]) => (
        <div key={t}><div {...bind} aria-label={`${t} band`} style={{ ...bind.style, '--v': v }}><i /></div><span>{t}</span></div>
      ))}
    </div>
  );
}
