import { useContext, useEffect, useId, useRef, useState } from 'react';
import { MenuContext } from './internal/menu-context';
import { DropdownMenuItem, DropdownMenuDivider } from './DropdownMenuItem';
import styles from '../../internal/styles/navigation.module.css';

/** Composable menu button; items remains supported for data-driven menus. */
export default function DropdownMenu({ label = 'Actions', items = [], children, align = 'start', className, submenu = false }) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const root = useRef(null);
  const trigger = useRef(null);
  const menu = useRef(null);
  const initial = useRef('first');
  const parent = useContext(MenuContext);
  const close = (restore = true) => { setOpen(false); if (restore) trigger.current?.focus(); };
  const select = () => { if (submenu && parent) parent.close(); else close(); };
  const show = (where = 'first') => { initial.current = where; setOpen(true); };
  useEffect(() => {
    if (!open) return;
    const current = menu.current;
    const items = [...current.querySelectorAll('[role^="menuitem"]')].filter(el => !el.disabled && el.closest('[role="menu"]') === current);
    (initial.current === 'last' ? items.at(-1) : items[0])?.focus();
    const away = event => { if (!root.current?.contains(event.target)) setOpen(false); };
    document.addEventListener('pointerdown', away);
    return () => document.removeEventListener('pointerdown', away);
  }, [open]);
  function onKeyDown(event) {
    if (event.key === 'Escape' || (submenu && event.key === 'ArrowLeft')) {
      event.preventDefault(); event.stopPropagation(); close(); return;
    }
    if (event.key === 'Tab') { close(false); return; }
    const items = [...menu.current.querySelectorAll('[role^="menuitem"]')].filter(el => !el.disabled && el.closest('[role="menu"]') === menu.current);
    const at = items.indexOf(document.activeElement);
    let next;
    if (event.key === 'ArrowDown') next = items[(at + 1) % items.length];
    else if (event.key === 'ArrowUp') next = items[(at - 1 + items.length) % items.length];
    else if (event.key === 'Home') next = items[0];
    else if (event.key === 'End') next = items.at(-1);
    else if (event.key.length === 1 && /\S/.test(event.key)) {
      next = [...items.slice(at + 1), ...items.slice(0, at + 1)].find(el => el.textContent.trim().toLowerCase().startsWith(event.key.toLowerCase()));
    } else return;
    event.preventDefault(); event.stopPropagation(); next?.focus();
  }
  return (
    <span className={`${styles.menuWrap} ${className || ''}`} ref={root} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) close(false); }}>
      <button ref={trigger} type="button" role={submenu ? 'menuitem' : undefined} tabIndex={submenu ? -1 : undefined}
        className={submenu ? styles.menuItem : styles.menuBtn} aria-haspopup="menu" aria-expanded={open} aria-controls={open ? id : undefined}
        onClick={() => open ? close(false) : show()} onKeyDown={event => {
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || (submenu && event.key === 'ArrowRight')) {
            event.preventDefault(); event.stopPropagation(); show(event.key === 'ArrowUp' ? 'last' : 'first');
          }
        }}>{label}<span aria-hidden="true"> {submenu ? '›' : '⌄'}</span></button>
      {open && <MenuContext.Provider value={{ close: select }}><ul ref={menu} id={id} role="menu" aria-label={label} className={styles.menu} data-end={align === 'end' ? '' : undefined} onKeyDown={onKeyDown}>
        {children ?? items.map((item, index) => item.separator ? <DropdownMenuDivider key={index} /> : <DropdownMenuItem key={item.id ?? item.label} {...item}>{item.label}</DropdownMenuItem>)}
      </ul></MenuContext.Provider>}
    </span>
  );
}
