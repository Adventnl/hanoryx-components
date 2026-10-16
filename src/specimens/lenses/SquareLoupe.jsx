import c from './lenses.module.css';
import { Area, COPY } from './shared';

/* 2 */ export function SquareLoupe() {
  return <Area label="Square loupe" className={`${c.mag} ${c.square}`}><p>{COPY}</p><div className={c.lens}><div><p>{COPY}</p></div></div><i className={c.rim} /></Area>;
}
