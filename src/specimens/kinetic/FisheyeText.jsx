import { useScan } from '../../stage/chartKit';
import c from './kinetic.module.css';
import { chars } from './shared';

/* 26 */ export function FisheyeText() {
  const [i, bind] = useScan(9, { label: (k) => `Letter ${k + 1}` });
  return (
    <div className={c.fig}>
      <p className={c.fish} {...bind} aria-label="Fisheye text, move along the word" style={{ ...bind.style, '--px': i < 0 ? -9 : i }}>{chars('FISHEYE ON')}</p>
    </div>
  );
}
