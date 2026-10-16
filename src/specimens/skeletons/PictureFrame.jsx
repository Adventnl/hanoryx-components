import { Ico } from '../../stage/icons';
import c from './skeletons.module.css';
import { Shell } from './shared';

/* 8 */ export function PictureFrame() {
  return <Shell className={c.pic} label="Loading image"><Ico n="image" /></Shell>;
}
