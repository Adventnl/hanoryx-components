import { useToggle } from '../../stage/hooks';
import c from './menus.module.css';

/* 11 */ export function BurgerMenu() {
  const [open, flip] = useToggle();
  return (
    <div className={c.burger} data-open={open}>
      <button type="button" aria-expanded={open} aria-label="Menu" onClick={flip}><i /><i /><i /></button>
      <nav aria-label="Burger menu" inert={!open || undefined}>{['Work', 'Notes', 'Contact'].map((t, k) => <a key={t} href="#burger" style={{ '--k': k }} onClick={(e) => e.preventDefault()}>{t}</a>)}</nav>
    </div>
  );
}
