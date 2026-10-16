import { useToggle } from '../../stage/hooks';
import c from './switchboard.module.css';

/* 6 */ export function PullChain() {
  const [on, flip] = useToggle();
  return (
    <div className={c.chainWrap}>
      <span className={c.bulb} data-on={on} />
      <button type="button" className={c.chain} aria-pressed={on} aria-label="Pull chain" onClick={flip}><i /></button>
    </div>
  );
}
