import { useTick, pad2 } from '../../stage/hooks';
import c from './tickers.module.css';

const HEADS = ['The belt keeps moving', 'Nothing here needs saying', 'Look up, it said so', 'Quiet launch, loud finish', 'Tea at four'];

export function HeadlineSwap() {
  const t = useTick(2600);
  const i = t % HEADS.length;
  return (
    <div className={c.fig} role="img" aria-label={`Headline: ${HEADS[i]}`}>
      <div className={c.swap}>
        {t > 0 ? <span key={`o${t}`} className={c.swapOut}>{HEADS[(i + HEADS.length - 1) % HEADS.length]}</span> : null}
        <span key={`i${t}`} className={c.swapIn}>{HEADS[i]}</span>
      </div>
      <small className={c.note}>{pad2(i + 1)} / {pad2(HEADS.length)}</small>
    </div>
  );
}
