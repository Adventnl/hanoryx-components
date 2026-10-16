import c from './glow.module.css';

/* ---------- the still side ---------- */

const TILES = [0, 1, 2, 3, 4, 5];

export function Visual() {
  return (
    <div className={c.room} aria-hidden="true">
      <i className={c.cord} />
      <span className={c.lamp}><i className={c.shade} /><i className={c.bulb} /></span>
      <i className={c.cone} />
      <i className={c.pool} />
      <div className={c.tiles}>
        {TILES.map((k) => <i key={k} className={c.tile} style={{ '--cx': 5 + (k + 0.5) * 15 }}><b /><b /></i>)}
      </div>
      <p className={c.lux}>Pendant 01</p>
    </div>
  );
}
