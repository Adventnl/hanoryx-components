import c from './matrices.module.css';

/* 42 */ export function EqualizerGrid() {
  return (
    <div className={c.eq} role="img" aria-label="An equalizer made of dots">
      {Array.from({ length: 16 }, (_, k) => (
        <span key={k} style={{ animationDuration: `${1.4 + (k % 5) * 0.37}s`, animationDelay: `${-k * 0.23}s` }}>
          {Array.from({ length: 8 }, (_, r) => <i key={r} style={{ '--r': r }} />)}
        </span>
      ))}
    </div>
  );
}
