import c from './tilt.module.css';

export function Rolodex() {
  return (
    <div className={c.fig} role="img" aria-label="A rolodex of cards turning end over end">
      <div className={`${c.stage} ${c.orbitStage}`}>
        <div className={c.rolo}>{Array.from({ length: 10 }, (_, i) => <i key={i} style={{ '--i': i }}>{i + 1}</i>)}</div>
      </div>
    </div>
  );
}
