import c from './heroes.module.css';
import { Sc } from './shared';

/* 34 */ export function FooterCall() {
  return <Sc label="Footer" className={c.foot}><h3>Let us talk</h3><div>{[['Work', 'Cases', 'Method'], ['Company', 'About', 'Jobs'], ['Help', 'Docs', 'Status']].map(([h, ...l]) => <span key={h}><b>{h}</b>{l.map((x) => <a key={x} href="#footer" onClick={(e) => e.preventDefault()}>{x}</a>)}</span>)}</div></Sc>;
}
