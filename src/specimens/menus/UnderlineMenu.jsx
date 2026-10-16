import c from './menus.module.css';

/* 30 */ export function UnderlineMenu() {
  return (
    <nav className={c.under} aria-label="Underline menu">
      {['Index', 'Work', 'Notes', 'About'].map((t) => <a key={t} href="#under" onClick={(e) => e.preventDefault()}>{t}</a>)}
    </nav>
  );
}
