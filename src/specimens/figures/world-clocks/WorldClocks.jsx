import { useTick, pad2 } from "../../../stage/hooks";
import c from "../figures.module.css";
import { hms } from "../shared";

/* 17 */ const ZONES = [['UTC', 0], ['UTC+5', 5], ['UTC+9', 9]];

export function WorldClocks() {
  const n = useTick(1000);
  return (
    <div className={c.world} role="img" aria-label="Three clocks in different time zones">
      {ZONES.map(([name, off]) => {
        const [h, m, s] = hms(7 * 3600 + 12 * 60 + 40 + n + off * 3600);
        return <p key={name} data-day={h >= 6 && h < 18}><em>{name}</em><b>{pad2(h)}:{pad2(m)}<small>:{pad2(s)}</small></b><i /></p>;
      })}
    </div>
  );
}
