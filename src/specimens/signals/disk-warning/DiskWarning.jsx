import { useDrag } from "../../../stage/hooks";
import c from "../signals.module.css";

/* 26 */ export function DiskWarning() {
  const [v, bind] = useDrag({ init: 0.7 });
  const t = v > 0.9 ? 'bad' : v > 0.75 ? 'warn' : 'ok';
  return (
    <div className={c.disk}>
      <div {...bind} aria-label="Disk used" aria-valuetext={`${Math.round(v * 100)} percent`} data-t={t} style={{ ...bind.style, '--v': v }}><i /><u /><u /></div>
      <output data-t={t}>{Math.round(v * 100)}% · {{ ok: 'fine', warn: 'getting full', bad: 'almost full' }[t]}</output>
    </div>
  );
}
