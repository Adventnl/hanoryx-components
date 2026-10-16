import c from './heroes.module.css';
import { Sc } from './shared';

/* 26 */ export function OutlineType() {
  return <Sc label="Outline type" className={c.outline}><button type="button" aria-label="Outline headline">BOLD</button></Sc>;
}
