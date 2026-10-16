import { Ico } from '../../stage/icons';
import c from './skeletons.module.css';
import { Shell } from './shared';

/* 36 */ export function VideoPlaceholder() {
  return <Shell className={c.video} label="Loading video"><span><Ico n="play" /></span><u><s /></u></Shell>;
}
