import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './skeletons.module.css';

/* 22 */ export function FirstProject() {
  const [made, setMade] = useState(false);
  return (
    <div className={c.first} data-made={made}>
      {made ? <><Ico n="check" /><b>Project one</b></> : <><Ico n="plus" /><b>Create your first project</b></>}
      <button type="button" onClick={() => setMade(!made)}>{made ? 'Undo' : 'Create'}</button>
    </div>
  );
}
