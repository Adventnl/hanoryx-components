import { useToggle } from '../../stage/hooks';
import c from './toasts.module.css';
import { Fire } from './shared';

/* 33 */ export function ErrorSummary() {
  const [shown, flip] = useToggle(true);
  return (
    <div className={c.summary}>
      {shown && <div role="alert"><b>2 problems</b><ul><li><a href="#e" onClick={(e) => e.preventDefault()}>Name is required</a></li><li><a href="#e" onClick={(e) => e.preventDefault()}>Enter a valid mail</a></li></ul></div>}
      <Fire onClick={flip}>{shown ? 'Fix them' : 'Submit'}</Fire>
    </div>
  );
}
