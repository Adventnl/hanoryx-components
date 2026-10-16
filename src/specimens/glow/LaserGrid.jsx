import c from './glow.module.css';

export function LaserGrid() {
  return (
    <div className={c.fig} role="img" aria-label="A grid that a laser line sweeps across and lights">
      <div className={`${c.card} ${c.laser}`}><i /><b>Laser</b></div>
    </div>
  );
}
