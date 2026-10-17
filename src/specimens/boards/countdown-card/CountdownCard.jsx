import { pad2, useTick } from "../../../stage/hooks";
import c from "../boards.module.css";
import { Bd } from "../shared";

/* 25 */ export function CountdownCard() {
  const n = useTick(1000);
  const left = 3 * 86400 + 7 * 3600 + 12 * 60 - n;
  const parts = [['days', Math.floor(left / 86400)], ['hrs', Math.floor((left % 86400) / 3600)], ['min', Math.floor((left % 3600) / 60)], ['sec', left % 60]];
  return (
    <Bd label="Countdown" className={c.center} role="timer">
      <small className={c.m}>Launch in</small>
      <div className={c.cd4}>{parts.map(([l, v]) => <span key={l}><b>{pad2(v)}</b><small>{l}</small></span>)}</div>
    </Bd>
  );
}
