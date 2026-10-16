import c from './glow.module.css';

export function Meteors() {
  return (
    <div className={c.fig} role="img" aria-label="A card with meteors streaking across it">
      <div className={`${c.card} ${c.meteors}`}>
        {Array.from({ length: 7 }, (_, i) => <i key={i} style={{ '--i': i }} />)}
        <b>Meteors</b>
      </div>
    </div>
  );
}
