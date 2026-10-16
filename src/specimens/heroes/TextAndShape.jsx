import c from './heroes.module.css';
import { Cta, Nav, Sc } from './shared';

/* 02 */ export function TextAndShape() {
  return <Sc label="Text and art" className={c.side}><Nav /><div><h3>Ship faster, sleep better</h3><p>One place for the work.</p><Cta>Try it</Cta></div><span className={c.shape1} /></Sc>;
}
