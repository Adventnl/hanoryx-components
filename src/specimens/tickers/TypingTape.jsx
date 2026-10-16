import { useTick } from '../../stage/hooks';
import c from './tickers.module.css';

const TYPED = ['Signal acquired.', 'Belt speed nominal.', 'Mind the gap.', 'Standing by.'];

const typedAt = (t) => {
  let n = t % TYPED.reduce((a, s) => a + s.length * 2 + 22, 0);
  for (const s of TYPED) {
    const span = s.length * 2 + 22;
    if (n < span) {
      let shown = 0;
      if (n < s.length) shown = n;
      else if (n < s.length + 16) shown = s.length;
      else if (n < s.length * 2 + 16) shown = s.length - (n - s.length - 16);
      return s.slice(0, shown);
    }
    n -= span;
  }
  return '';
};

export function TypingTape() {
  const t = useTick(80);
  return (
    <div className={c.fig} role="img" aria-label="A message being typed and erased: signal acquired, belt speed nominal">
      <div className={c.typeBar}><b>MSG</b><span>{typedAt(t)}</span><i className={c.caret} /></div>
    </div>
  );
}
