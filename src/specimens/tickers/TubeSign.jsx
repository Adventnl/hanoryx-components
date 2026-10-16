import c from './tickers.module.css';

export function TubeSign() {
  return (
    <div className={c.fig} role="img" aria-label="A neon exit sign with arrows chasing toward the exit">
      <div className={c.tube}>
        <span className={c.arrows}>{[0, 1, 2, 3].map((i) => <i key={i} style={{ '--i': i }} />)}</span>
        <b>EXIT</b>
      </div>
    </div>
  );
}
