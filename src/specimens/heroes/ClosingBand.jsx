import c from './heroes.module.css';
import { Cta, Sc } from './shared';

/* 33 */ export function ClosingBand() {
  return <Sc label="Closing band" className={c.closing}><h3>Ready when you are</h3><Cta>Start now</Cta></Sc>;
}
