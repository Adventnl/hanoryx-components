import { pad2, useDrag } from "../../../stage/hooks";
import c from "../boards.module.css";
import { Bd } from "../shared";

/* 23 */ export function ZoneStrip() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.45 });
  const h = Math.round(v * 23);
  return (
    <Bd label="Time zones" className={c.zones}>
      {[['Oslo', 0], ['London', -1], ['Tokyo', 8]].map(([n, o]) => { const t = (h + o + 24) % 24; return <div key={n}><small>{n}</small><span className={c.band}>{Array.from({ length: 24 }, (_, k) => <i key={k} data-day={((k + o + 24) % 24) >= 8 && ((k + o + 24) % 24) < 20} />)}</span><b>{pad2(t)}:00</b></div>; })}
      <div className={c.scrub} {...bind} aria-label="Hour"><u style={{ left: `${v * 100}%` }} /></div>
    </Bd>
  );
}
