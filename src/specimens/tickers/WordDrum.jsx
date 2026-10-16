import c from './tickers.module.css';

const DRUM = ['MORNING', 'NOON', 'EVENING', 'NIGHT', 'DAWN', 'DUSK', 'TIDE', 'EMBER'];

export function WordDrum() {
  return (
    <div className={c.fig} role="img" aria-label="A drum turning through words: morning, noon, evening, night">
      <div className={c.drumView}>
        <ol className={c.drum}>{DRUM.map((w, i) => <li key={w} style={{ '--i': i }}>{w}</li>)}</ol>
        <i className={c.drumLine} />
      </div>
    </div>
  );
}
