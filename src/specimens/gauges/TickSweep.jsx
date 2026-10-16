import c from './gauges.module.css';

/* 42 */ export function TickSweep() {
  return (
    <div className={c.tickSweep} role="img" aria-label="Sixty ticks lighting in turn">
      {Array.from({ length: 60 }, (_, i) => <i key={i} style={{ '--i': i }} />)}
      <b>SCAN</b>
    </div>
  );
}
