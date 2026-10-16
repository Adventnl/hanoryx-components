import { useToggle } from '../../stage/hooks';
import { Ico } from '../../stage/icons';
import c from './docks.module.css';

/* 19 */ export function SlideOutBar() {
  const [open, flip] = useToggle();
  return (
    <div className={c.slideOut} data-open={open}>
      <button type="button" aria-expanded={open} aria-label="Toggle toolbar" onClick={flip}><Ico n={open ? 'close' : 'list'} /></button>
      <div role="toolbar" aria-label="Slide-out bar" inert={!open || undefined}>{['pen', 'copy', 'trash'].map((n) => <button key={n} type="button" aria-label={n}><Ico n={n} /></button>)}</div>
    </div>
  );
}
