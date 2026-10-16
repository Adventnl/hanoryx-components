import c from './gauges.module.css';

/* 34 */ export function MeterBridge() {
  return (
    <div className={c.bridge} role="img" aria-label="A bridge of eight small meters">
      {Array.from({ length: 8 }, (_, i) => (
        <span key={i} style={{ animationDuration: `${2.2 + (i % 4) * 0.7}s`, animationDelay: `${-i * 0.55}s` }}><i /><em>{i + 1}</em></span>
      ))}
    </div>
  );
}
