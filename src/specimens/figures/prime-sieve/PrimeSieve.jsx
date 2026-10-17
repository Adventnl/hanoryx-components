import c from "../figures.module.css";

/* 31 */ const SIEVE_P = [2, 3, 5, 7];

const SIEVE = Array.from({ length: 50 }, (_, i) => {
  const n = i + 1;
  const p = SIEVE_P.find((q) => n > q && n % q === 0);
  return { n, step: p ? SIEVE_P.indexOf(p) : -1, one: n === 1 };
});

export function PrimeSieve() {
  return (
    <div className={c.fig} role="img" aria-label="The sieve of Eratosthenes crossing out multiples of 2, 3, 5 and 7">
      <div className={c.sieve}>{SIEVE.map((d) => <i key={d.n} data-one={d.one} style={{ '--s': d.step }} data-composite={d.step >= 0}>{d.n}</i>)}</div>
    </div>
  );
}
