import { useHot } from '../../stage/chartKit';
import c from './passes.module.css';
import { BC, Barcode } from './shared';

/* 23 */
export function HangTag() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={c.ht} data-hot={hot} aria-label="Hang tag: hover, tap or press Enter to turn it over" {...bind}>
      <span className={c.htFlip}>
        <span className={c.htFront}>
          <i className={c.htHole} />
          <span className={c.kp}>Style 0420</span>
          <b>Wool coat</b>
          <span className={c.kp}>Size M · charcoal</span>
          <Barcode code={BC.c} className={c.htCode} />
        </span>
        <span className={c.htBack}>
          <i className={c.htHole} />
          <span className={c.kd}>Now</span>
          <b>49</b>
          <s>79</s>
        </span>
      </span>
    </button>
  );
}
