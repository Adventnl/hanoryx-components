import { useId } from 'react';
import c from './morphs.module.css';
import { Goo } from './shared';

/* 26 */ export function GooDrops() {
  const id = `g${useId().replace(/\W/g, '')}`;
  return (
    <div className={c.stage} role="img" aria-label="Drops falling into a pool and merging">
      <Goo id={id} std={5} />
      <div className={c.drops} style={{ filter: `url(#${id})` }}><i style={{ '--d': '0s' }} /><i style={{ '--d': '0.9s' }} /><i style={{ '--d': '1.8s' }} /><b /></div>
    </div>
  );
}
