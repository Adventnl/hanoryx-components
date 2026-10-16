import { useState } from 'react';
import c from './graphs.module.css';

/* 3 */ const FILES = { n: 'project', kids: [{ n: 'src', kids: [{ n: 'components', kids: [{ n: 'Button.jsx' }, { n: 'Card.jsx' }] }, { n: 'pages', kids: [{ n: 'Home.jsx' }] }, { n: 'main.jsx' }] }, { n: 'public', kids: [{ n: 'logo.svg' }] }, { n: 'package.json' }] };

function FileNode({ node, path, depth, open, toggle }) {
  const here = `${path}/${node.n}`;
  const folder = Boolean(node.kids);
  const on = open.includes(here);
  return (
    <li>
      {folder ? <button type="button" style={{ '--d': depth }} aria-expanded={on} onClick={() => toggle(here)}><i data-open={on} />{node.n}</button> : <span style={{ '--d': depth }}><i data-file />{node.n}</span>}
      {folder && on && <ul>{node.kids.map((k) => <FileNode key={k.n} node={k} path={here} depth={depth + 1} open={open} toggle={toggle} />)}</ul>}
    </li>
  );
}

export function FileTree() {
  const [open, setOpen] = useState(['/project', '/project/src']);
  return (
    <div className={c.files}><ul><FileNode node={FILES} path="" depth={0} open={open} toggle={(p) => setOpen((s) => (s.includes(p) ? s.filter((x) => x !== p) : [...s, p]))} /></ul></div>
  );
}
