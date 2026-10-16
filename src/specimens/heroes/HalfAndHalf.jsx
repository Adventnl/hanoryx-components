import c from './heroes.module.css';
import { Cta, Sc } from './shared';

/* 03 */ export function HalfAndHalf() {
  return <Sc label="Split hero" className={c.halves}><div><h3>Made to last</h3><p>Built with care.</p><Cta>See work</Cta></div><span /></Sc>;
}
