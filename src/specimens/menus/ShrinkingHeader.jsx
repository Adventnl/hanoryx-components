import { useToggle } from '../../stage/hooks';
import c from './menus.module.css';

/* 39 */ export function ShrinkingHeader() {
  const [small, flip] = useToggle();
  return (
    <div className={c.shrink}>
      <header data-small={small}><b>Studio</b><nav aria-label="Shrinking header">{['Work', 'Lab', 'Mail'].map((t) => <a key={t} href="#shrink" onClick={(e) => e.preventDefault()}>{t}</a>)}</nav></header>
      <button type="button" aria-pressed={small} onClick={flip}>{small ? 'Scrolled' : 'At top'}</button>
    </div>
  );
}
