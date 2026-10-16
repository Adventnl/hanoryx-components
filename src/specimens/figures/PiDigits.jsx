import c from './figures.module.css';

/* 35 */ const PI = '3.14159265358979323846264338327950288419716939937510582097494459230781640628620899';

export function PiDigits() {
  return (
    <div className={c.pi} role="img" aria-label="The first eighty digits of pi scrolling past">
      <div>{[0, 1].map((k) => <span key={k}>{[...PI].map((d, i) => <i key={i} data-dot={d === '.'}>{d}</i>)}</span>)}</div>
    </div>
  );
}
