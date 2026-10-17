import { useDrag } from "../../../stage/hooks";
import c from "../skeletons.module.css";
import { Shell, sk } from "../shared";

/* 32 */ export function LineCount() {
  const [v, bind] = useDrag({ init: 0.5, steps: 4 });
  const n = 1 + Math.round(v * 4);
  return (
    <div className={c.count}>
      <Shell className={c.col} label="Loading text">{Array.from({ length: n }, (_, k) => <span key={k} style={{ display: 'block' }}>{sk(k === n - 1 && n > 1 ? '60%' : '100%')}</span>)}</Shell>
      <div {...bind} aria-label="Number of lines" aria-valuetext={`${n} lines`} style={{ ...bind.style, '--v': v }}><i /></div>
    </div>
  );
}
