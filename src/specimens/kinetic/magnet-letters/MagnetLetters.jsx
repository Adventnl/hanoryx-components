import { useScan } from "../../../stage/chartKit";
import c from "../kinetic.module.css";
import { chars } from "../shared";

/* 9 */ export function MagnetLetters() {
  const [i, bind] = useScan(7, { label: (k) => `Letter ${k + 1}` });
  return (
    <div className={c.fig}>
      <p className={c.magnet} {...bind} aria-label="Magnet letters, move along the word" style={{ ...bind.style, '--px': i < 0 ? -9 : i }}>{chars('MAGNETS')}</p>
    </div>
  );
}
