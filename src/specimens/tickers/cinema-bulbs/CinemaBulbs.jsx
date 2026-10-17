import c from "../tickers.module.css";

const BULBS = Array.from({ length: 15 }, (_, i) => <i key={i} style={{ '--k': i }} />);

export function CinemaBulbs() {
  return (
    <div className={c.fig} role="img" aria-label="A cinema marquee with chasing bulbs: opening night">
      <div className={c.cinemaSign}>
        <span className={c.bulbRow}>{BULBS}</span>
        <p>OPENING <b>NIGHT</b></p>
        <span className={c.bulbRow}>{BULBS}</span>
      </div>
    </div>
  );
}
