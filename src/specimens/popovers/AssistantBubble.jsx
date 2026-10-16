import { useToggle } from '../../stage/hooks';
import { Ico } from '../../stage/icons';
import c from './popovers.module.css';

/* 34 */ export function AssistantBubble() {
  const [open, flip] = useToggle();
  return (
    <div className={c.assist}>
      <button type="button" aria-expanded={open} aria-label="Assistant" onClick={flip}><Ico n={open ? 'close' : 'chat'} /></button>
      {open && <div role="dialog" aria-label="Assistant"><b>Hi</b><p>Need a hand with the layout?</p><span><button type="button">Yes</button><button type="button" onClick={flip}>Later</button></span></div>}
    </div>
  );
}
