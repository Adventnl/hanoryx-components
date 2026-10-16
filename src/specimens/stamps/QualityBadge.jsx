import { Ico } from '../../stage/icons';
import c from './stamps.module.css';

/* 27 */ export function QualityBadge() {
  return <button type="button" className={c.quality} aria-label="Seal of quality"><Ico n="check" /></button>;
}
