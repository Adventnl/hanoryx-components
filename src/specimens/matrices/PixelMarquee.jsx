import c from './matrices.module.css';
import { raster } from './shared';

/* 8 */ const MSG = raster('HANORYX GRID ');

const MSG_W = MSG[0].length;

const MSG_LIT = MSG.flatMap((row, y) => [...row].map((b, x) => (b === '1' ? [x, y] : null)).filter(Boolean));

export function PixelMarquee() {
  return (
    <div className={c.marq} role="img" aria-label="A pixel marquee scrolling a message">
      <div className={c.mstrip} style={{ '--w': MSG_W }}>
        {[0, 1].map((k) => (
          <span key={k} style={{ '--o': k * MSG_W }}>{MSG_LIT.map(([x, y]) => <i key={`${x}-${y}`} style={{ '--x': x, '--y': y }} />)}</span>
        ))}
      </div>
    </div>
  );
}
