import { Fragment, useState } from 'react';
import c from './terminal.module.css';
import { cx } from './shared';

const TREE = [['src', [['app.js'], ['ui', [['nav.js'], ['btn.js']]], ['index.css']]], ['docs', [['intro.md'], ['api.md']]], ['package.json']];

function Branch({ nodes, pre, path, open, flip }) {
  return nodes.map(([name, kids], i) => {
    const last = i === nodes.length - 1;
    const p = `${path}/${name}`;
    return (
      <Fragment key={p}>
        <li className={c.ln}>
          <span className={c.dim}>{pre}{last ? '└── ' : '├── '}</span>
          {kids ? <button type="button" className={c.dirb} aria-expanded={open.includes(p)} onClick={() => flip(p)}>{name}/</button> : <span>{name}</span>}
        </li>
        {kids && open.includes(p) && <Branch nodes={kids} pre={pre + (last ? '    ' : '│   ')} path={p} open={open} flip={flip} />}
      </Fragment>
    );
  });
}

/* 12 */ export function TreeListing() {
  const [open, setOpen] = useState(['/src']);
  const flip = (p) => setOpen((a) => (a.includes(p) ? a.filter((x) => x !== p) : [...a, p]));
  return <ul className={cx(c.win, c.tree)} aria-label="File tree"><li className={c.ln}>.</li><Branch nodes={TREE} pre="" path="" open={open} flip={flip} /></ul>;
}
