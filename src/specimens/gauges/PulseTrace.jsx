import c from './gauges.module.css';

/* 29 */ const ECG = 'M0 30H14q4-8 8 0H34L38 34 44 6 50 52 54 30H62q6-12 12 0H100H114q4-8 8 0H134L138 34 144 6 150 52 154 30H162q6-12 12 0H200';

export function PulseTrace() {
  return (
    <div className={c.pulse} role="img" aria-label="A heartbeat trace with a travelling highlight">
      <svg viewBox="0 0 200 60" preserveAspectRatio="none">
        <path className={c.ghost} d={ECG} />
        <path className={c.comet} d={ECG} pathLength="1" />
      </svg>
      <span>72 <small>BPM</small></span>
    </div>
  );
}
