import c from './gauges.module.css';

/* 6 */ export function PeakHold() {
  return (
    <div className={c.peak} role="img" aria-label="Level meter with a peak marker">
      <div className={c.cells}>
        {Array.from({ length: 28 }, (_, i) => <i key={i} style={{ '--i': i }} />)}
        <u />
      </div>
      <ol><li>-40</li><li>-20</li><li>-10</li><li>-3</li><li>0 dB</li></ol>
    </div>
  );
}
