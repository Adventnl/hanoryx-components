import { useTick, pad2 } from "../../../stage/hooks";
import c from "../figures.module.css";
import { hms } from "../shared";

/* 11 */ export function BinaryClock() {
  const n = useTick(1000);
  const [h, m, s] = hms(9 * 3600 + 41 * 60 + 7 + n);
  const cols = [[Math.floor(h / 10), 2], [h % 10, 4], [Math.floor(m / 10), 3], [m % 10, 4], [Math.floor(s / 10), 3], [s % 10, 4]];
  return (
    <div className={c.fig}>
      <div className={c.bin} role="img" aria-label={`Binary clock showing ${pad2(h)}:${pad2(m)}:${pad2(s)}`}>
        <span className={c.binKey}><em>8</em><em>4</em><em>2</em><em>1</em></span>
        {cols.map(([v, bits], i) => (
          <span key={i} data-gap={i % 2 === 0}>{[8, 4, 2, 1].map((w) => <i key={w} data-hidden={w >= 2 ** bits} data-on={Math.floor(v / w) % 2 === 1} />)}</span>
        ))}
      </div>
    </div>
  );
}
