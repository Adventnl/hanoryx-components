import c from "../tilt.module.css";

export function OrbitCards() {
  return (
    <div className={c.fig} role="img" aria-label="Three cards orbiting a point">
      <div className={`${c.stage} ${c.orbitStage}`}>
        <div className={c.orbit}>{[0, 1, 2].map((i) => <i key={i} style={{ '--i': i }} />)}</div>
      </div>
    </div>
  );
}
