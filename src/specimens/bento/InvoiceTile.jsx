import { useToggle } from '../../stage/hooks';
import c from './bento.module.css';
import { Tile } from './shared';

export function InvoiceTile() {
  const [paid, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={paid} aria-label="Invoice; mark it paid or unpaid" onClick={flip}>
      <Tile k="Invoice 0142">
        <span className={c.rows}><i><span>Belt</span><b>$120</b></i><i><span>Tea</span><b>$18</b></i><i className={c.total}><span>Total</span><b>$138</b></i></span>
        <em className={c.badge} data-paid={paid}>{paid ? 'Paid' : 'Due'}</em>
      </Tile>
    </button>
  );
}
