import { useTick } from "../../../stage/hooks";
import c from "../passes.module.css";

/* 4 */
const RECEIPT = [['HANORYX CAFE', ''], ['TABLE 04 · 14 OCT', ''], ['Espresso', '3.20'], ['Croissant', '4.50'], ['Oat flat white', '4.80'], ['Sparkling water', '2.60'], ['Service', '1.50'], ['TOTAL', '16.60']];

export function ThermalPrintout() {
  const n = useTick(620);
  const t = n % (RECEIPT.length + 4);
  const shown = Math.min(t, RECEIPT.length);
  return (
    <div className={c.pr} data-cut={t === RECEIPT.length + 3}>
      <span className={c.prSheet}>
        {RECEIPT.slice(0, shown).map(([a, b], i) => (
          <span key={a} className={c.prLine} data-head={i < 2} data-total={a === 'TOTAL'}>
            <span>{a}</span><span>{b}</span>
          </span>
        ))}
      </span>
      <span className={c.prSlot}><i className="sc-led" /><span className={c.k}>Printing</span></span>
    </div>
  );
}
