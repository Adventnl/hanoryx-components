import c from './tickers.module.css';

/* ---------- 04 instruments and lights ---------- */

const BEAT = 'M0 22h18q4-7 8 0h6l2 3 3-3 4-20 4 28 3-8h8q7-10 14 0h30';

export function HeartbeatTape() {
  return (
    <div className={c.fig} role="img" aria-label="A heartbeat trace scrolling past, seventy-two beats a minute">
      <div className={c.ecg}>
        <svg className={c.ecgSvg} viewBox="0 0 300 40" preserveAspectRatio="none" aria-hidden="true">
          {[0, 100, 200].map((x) => <path key={x} d={BEAT} transform={`translate(${x} 0)`} />)}
        </svg>
        <span className={c.bpm}><i className="sc-led" /> 72 BPM</span>
      </div>
    </div>
  );
}
