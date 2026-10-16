import { useId, useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './morphs.module.css';
import { Goo } from './shared';

/* 25 */ export function GooMenu() {
  const [on, setOn] = useState(false);
  const id = `g${useId().replace(/\W/g, '')}`;
  return (
    <div className={c.stage}>
      <Goo id={id} std={5} />
      <div className={c.gooMenu} data-on={on} style={{ filter: `url(#${id})` }}>
        {['search', 'heart', 'bell', 'user'].map((n, k) => <i key={n} style={{ '--k': k }} />)}
        <button type="button" className={c.gooHub} aria-expanded={on} aria-label="Menu" onClick={() => setOn((v) => !v)} />
      </div>
      <div className={c.gooIcons} data-on={on} aria-hidden="true">
        <em className={c.hubIco}><Ico n="plus" /></em>{['search', 'heart', 'bell', 'user'].map((n, k) => <span key={n} style={{ '--k': k }}><Ico n={n} /></span>)}</div>
    </div>
  );
}
