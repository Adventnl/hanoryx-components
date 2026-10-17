import { Fragment } from 'react';
import c from "../terminal.module.css";
import { cx } from "../shared";

/* 21 */ export function PipeChain() {
  return (
    <div className={cx(c.win, c.pipe)} role="img" aria-label="Three commands joined by pipes, data flowing through">
      {['cat log', 'grep ERR', 'wc -l'].map((t, i) => <Fragment key={t}>{i > 0 && <span className={c.bar}><u /><u /><u /></span>}<code>{t}</code></Fragment>)}
    </div>
  );
}
