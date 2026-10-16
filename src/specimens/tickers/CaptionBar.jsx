import { useTick, pad2 } from '../../stage/hooks';
import c from './tickers.module.css';

const CAPS = ['Nothing here needs saying.', 'The belt keeps moving.', 'Look up, it said so.', 'Quiet, then louder.'];

export function CaptionBar() {
  const t = useTick(2400);
  const i = t % CAPS.length;
  return (
    <div className={c.fig} role="img" aria-label={`Caption: ${CAPS[i]}`}>
      <div className={c.cinema}>
        <p key={t} className={c.subs}>{CAPS[i]}</p>
        <span className={c.tc}>00:00:{pad2((t * 2 + 1) % 60)}:{pad2((t * 7) % 24)}</span>
        <i key={`b${t}`} className={c.capBar} />
      </div>
    </div>
  );
}
