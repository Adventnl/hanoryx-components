import c from "../graphs.module.css";

/* 16 */ const NEURAL = [3, 5, 5, 2];

const NEURAL_P = NEURAL.flatMap((n, l) => Array.from({ length: n }, (_, k) => ({ l, k, x: 12 + l * 25.3, y: 50 + (k - (n - 1) / 2) * 15 })));

export function NeuralLayers() {
  return (
    <div className={c.fig} role="img" aria-label="A small neural network with signals passing through its layers">
      <svg className={c.svg} viewBox="0 0 100 100" aria-hidden="true">
        {NEURAL_P.flatMap((a, i) => NEURAL_P.filter((b) => b.l === a.l + 1).map((b, j) => <line key={`${i}-${j}`} className={c.edge} style={{ animationDelay: `${(a.l * 0.5 + ((i * 7 + j * 3) % 5) * 0.12).toFixed(2)}s` }} data-fire x1={a.x} y1={a.y} x2={b.x} y2={b.y} />))}
        {NEURAL_P.map((n, i) => <circle key={i} className={c.nd} data-fire style={{ animationDelay: `${n.l * 0.5}s` }} cx={n.x} cy={n.y} r="3.2" />)}
      </svg>
    </div>
  );
}
