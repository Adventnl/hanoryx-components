import { Ico } from '../../stage/icons';
import c from './toasts.module.css';

/* 5 */ export function InfoBanner() {
  return <div role="note" className={`${c.banner} ${c.info}`}><Ico n="bolt" /><span>New release is out. <a href="#toast" onClick={(e) => e.preventDefault()}>See what changed</a></span></div>;
}
