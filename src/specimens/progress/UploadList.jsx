import c from './progress.module.css';
import { run } from './shared';

/* 18 */ export function UploadList() {
  const files = [['cover.png', 0.9], ['notes.pdf', 0.55], ['demo.mov', 0.2]];
  return <ul className={c.uploads}>{files.map(([n, w]) => <li key={n}><span>{n}</span><div {...run(n)} style={{ '--w': w }}><i /></div></li>)}</ul>;
}
