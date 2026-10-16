import { useToggle } from '../../stage/hooks';
import c from './popovers.module.css';

/* 33 */ export function DropDownNotice() {
  const [open, flip] = useToggle();
  return (
    <div className={c.slideBox}>
      <div className={c.slideBar}><b>Studio</b><button type="button" aria-expanded={open} onClick={flip}>News</button></div>
      <div className={c.slideDown} data-open={open} role="note"><b>Spring open call</b><span>Send work by Friday.</span></div>
    </div>
  );
}
