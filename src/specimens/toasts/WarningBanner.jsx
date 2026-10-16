import { useToggle } from '../../stage/hooks';
import { Ico } from '../../stage/icons';
import c from './toasts.module.css';
import { Fire } from './shared';

/* 4 */ export function WarningBanner() {
  const [on, flip] = useToggle(true);
  return (
    <div className={c.bannerBox}>
      {on && <div role="alert" className={`${c.banner} ${c.warn}`}><Ico n="flag" /><span>Your plan renews in 3 days.</span></div>}
      <Fire onClick={flip}>{on ? 'Hide' : 'Show'}</Fire>
    </div>
  );
}
