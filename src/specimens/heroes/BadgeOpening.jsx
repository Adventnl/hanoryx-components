import { Ico } from '../../stage/icons';
import c from './heroes.module.css';
import { Sc } from './shared';

/* 24 */ export function BadgeOpening() {
  return <Sc label="Badge hero" className={c.cen}><button type="button" className={c.pill}><b>New</b> Dark mode is here <Ico n="right" /></button><h3>Easier on the eyes</h3></Sc>;
}
