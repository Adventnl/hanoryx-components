import { rng } from '../../stage/hooks';
import c from './gauges.module.css';

/* 13 */ const SEIS = (() => {
  const r = rng(11);
  let d = 'M0 25';
  for (let x = 2; x <= 200; x += 2) {
    const env = 0.12 + 1.15 * Math.exp(-(((x - 46) / 12) ** 2)) + 0.75 * Math.exp(-(((x - 132) / 18) ** 2));
    const y = x === 200 ? 25 : 25 + (r() - 0.5) * 28 * env;
    d += `L${x} ${y.toFixed(1)}`;
  }
  return d;
})();

export function Seismograph() {
  return (
    <div className={c.seis} role="img" aria-label="Seismograph trace scrolling past a pen">
      <div className={c.paper}>
        {[0, 1].map((k) => (
          <svg key={k} viewBox="0 0 200 50" preserveAspectRatio="none"><path d={SEIS} /></svg>
        ))}
      </div>
      <i />
    </div>
  );
}
