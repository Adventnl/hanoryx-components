import { useToggle } from '../../stage/hooks';
import c from './fields.module.css';

/* 36 */ export function SecretReveal() {
  const [show, flip] = useToggle();
  return (
    <label className={c.secret}>
      <input type={show ? 'text' : 'password'} defaultValue="sample-secret" aria-label="Secret" />
      <button type="button" aria-pressed={show} aria-label={show ? 'Hide' : 'Show'} onClick={flip}>{show ? 'HIDE' : 'SHOW'}</button>
    </label>
  );
}
