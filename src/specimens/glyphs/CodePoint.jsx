import { useTick } from '../../stage/hooks';
import c from './glyphs.module.css';
import { code } from './shared';

export function CodePoint() {
  const t = useTick(900);
  const cp = 0x21 + (t % 94);
  return (
    <div className={c.fig} role="img" aria-label={`Code point ${code(String.fromCodePoint(cp))}`}>
      <div className={c.cp}>
        <b key={cp}>{String.fromCodePoint(cp)}</b>
        <ul>
          <li>{code(String.fromCodePoint(cp))}</li>
          <li>{cp}</li>
          <li>{cp.toString(2).padStart(8, '0')}</li>
        </ul>
      </div>
    </div>
  );
}
