import { useScan } from "../../../stage/chartKit";
import c from "../kinetic.module.css";
import { chars } from "../shared";

/* 8 */ export function StrokeSwell() {
  const [i, bind] = useScan(8, { label: (k) => `Letter ${k + 1}` });
  return (
    <div className={c.fig}>
      <p className={c.swell} {...bind} aria-label="Stroke swell, move along the word" style={{ ...bind.style, '--px': i < 0 ? -9 : i }}>{chars('OUTLINES')}</p>
    </div>
  );
}
