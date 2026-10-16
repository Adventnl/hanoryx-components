import { useState } from 'react';
import c from './popovers.module.css';

/* 24 */ export function TourPopover() {
  const [i, setI] = useState(0);
  const steps = ['First, name the project.', 'Then add a teammate.', 'Last, press publish.'];
  return (
    <div className={c.tour}>
      <div className={c.tourRow}>{[0, 1, 2].map((k) => <span key={k} data-on={k === i} />)}</div>
      <aside role="note" style={{ '--i': i }}><b>{i + 1} of 3</b><p>{steps[i]}</p><button type="button" onClick={() => setI((i + 1) % 3)}>{i === 2 ? 'Again' : 'Next'}</button></aside>
    </div>
  );
}
