import { useHot } from '../../stage/chartKit';
import c from './passes.module.css';
import { BC, Barcode } from './shared';

/* 1 */
export function BoardingPass() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={c.bp} data-hot={hot} aria-label="Boarding pass: hover, tap or press Enter to start boarding" {...bind}>
      <span className={c.bpMain}>
        <span className={c.kp}>Boarding pass · HX 214</span>
        <span className={c.bpRoute}>
          <b>KRA</b>
          <i><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 11 22 3l-7 18-3-7z" /></svg></i>
          <b>MOL</b>
        </span>
        <span className={c.bpFields}>
          <span><em>Passenger</em>A. Ledger</span>
          <span><em>Gate</em>12</span>
          <span><em>Boards</em>09:40</span>
        </span>
      </span>
      <span className={c.bpStub}>
        <span className={c.kp}>Seat</span>
        <b>14C</b>
        <Barcode code={BC.e} className={c.bpCode} />
      </span>
    </button>
  );
}
