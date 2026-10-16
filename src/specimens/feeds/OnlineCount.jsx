import { useCycle } from '../../stage/hooks';
import c from './feeds.module.css';
import { Fd } from './shared';

/* 38 */ export function OnlineCount() {
  const n = useCycle(8, 1200);
  const v = 128 + [0, 3, 5, 4, 8, 6, 9, 7][n];
  return <Fd label="Online now" className={c.center} role="status"><span className={c.live}><i />LIVE</span><b className={c.big} key={v}>{v}</b><small className={c.m}>people online</small></Fd>;
}
