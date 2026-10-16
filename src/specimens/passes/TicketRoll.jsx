import { useDrag } from '../../stage/hooks';
import c from './passes.module.css';

/* 25 */
export function TicketRoll() {
  const [v, bind] = useDrag({ mode: 'x', init: 0, steps: 9 });
  const at = Math.round(v * 9);
  return (
    <div className={c.fig}>
      <div className={c.tr} {...bind} aria-label="Ticket roll: drag to pull the next ticket" style={{ ...bind.style, '--at': at }}>
        <span className={c.trStrip}>
          {Array.from({ length: 12 }, (_, i) => (
            <span key={i} className={c.trTicket} data-cur={i === at}><span className={c.kp}>Ticket</span><b>{101 + i}</b></span>
          ))}
        </span>
        <i className={c.trGate} />
      </div>
      <p className={c.k}>Now serving {101 + at}</p>
    </div>
  );
}
