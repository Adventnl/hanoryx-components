import { Ico } from '../../stage/icons';
import c from './skeletons.module.css';

/* 21 */ export function OfflineFeed() {
  return <div className={c.empty}><Ico n="bolt" /><b>You are offline</b><p>Reconnect to load your feed.</p></div>;
}
