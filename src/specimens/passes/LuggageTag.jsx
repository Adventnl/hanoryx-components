import { useHot } from '../../stage/chartKit';
import c from './passes.module.css';
import { BC, Barcode } from './shared';

/* 18 */
export function LuggageTag() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={c.lt} data-hot={hot} aria-label="Luggage tag: hover, tap or press Enter to swing it" {...bind}>
      <span className={c.ltSwing}>
        <span className={c.ltString} />
        <span className={c.ltTag}>
          <i className={c.ltHole} />
          <span className={c.ltBand}>Priority</span>
          <b>MOL</b>
          <span className={c.kp}>A. Ledger · 23 kg</span>
          <Barcode code={BC.d} className={c.ltCode} />
        </span>
      </span>
    </button>
  );
}
