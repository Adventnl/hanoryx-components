import c from './gauges.module.css';

/* 24 */ const COMPASS = { 0: 'N', 90: 'E', 180: 'S', 270: 'W' };

const TAPE = Array.from({ length: 144 }, (_, i) => {
  const deg = (((i * 5 - 180) % 360) + 360) % 360;
  return { i, big: deg % 10 === 0, l: deg % 30 === 0 ? (COMPASS[deg] ?? String(deg).padStart(3, '0')) : '' };
});

export function HeadingTape() {
  return (
    <div className={c.head} role="img" aria-label="Heading tape turning through a full circle">
      <div className={c.tape}>{TAPE.map((m) => <i key={m.i} data-big={m.big} data-l={m.l} />)}</div>
      <u />
      <p>HDG <b className={c.num} style={{ '--max': 360 }} />°</p>
    </div>
  );
}
