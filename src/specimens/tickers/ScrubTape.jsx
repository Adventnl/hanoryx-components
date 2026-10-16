import { useDrag, pad2 } from '../../stage/hooks';
import c from './tickers.module.css';

const FRAMES = Array.from({ length: 24 }, (_, i) => i);

export function ScrubTape() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.3 });
  const frame = Math.round(v * 23) + 1;
  return (
    <div className={c.fig}>
      <div {...bind} className={c.scrub} aria-label="Scrub the film strip" aria-valuetext={`Frame ${frame} of 24`} style={{ ...bind.style, '--v': v }}>
        <span className={c.film}>{FRAMES.map((i) => <i key={i} data-key={i % 6 === 0}>{pad2(i + 1)}</i>)}</span>
        <span className={c.handle} />
      </div>
      <p className={c.note}>FRAME {pad2(frame)} / 24</p>
    </div>
  );
}
