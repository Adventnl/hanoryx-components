import { useTick } from '../../stage/hooks';
import c from './figures.module.css';

/* 7 */ export function NixieTubes() {
  const n = useTick(900);
  const v = String((n * 3719) % 10000).padStart(4, '0');
  return (
    <div className={c.fig}>
      <div className={c.nixies} role="img" aria-label={`Nixie tubes showing ${v}`}>
        {[...v].map((d, i) => (
          <span key={i}>{Array.from({ length: 10 }, (_, k) => <b key={k} data-on={Number(d) === k}>{k}</b>)}</span>
        ))}
      </div>
    </div>
  );
}
