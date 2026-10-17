import { useRef } from 'react';
import DropdownMenu from '../dropdown-menu/DropdownMenu';

/** Context actions retain a visible trigger for touch, keyboard and assistive technology. */
export function ContextMenu({ children, label = 'Context actions', items, menu }) {
  const ref = useRef(null);
  const show = event => { event.preventDefault(); const trigger = ref.current?.querySelector('button[aria-haspopup="menu"]'); if (trigger?.getAttribute('aria-expanded') !== 'true') trigger?.click(); };
  return <div ref={ref} onContextMenu={show} onKeyDown={event => { if (event.key === 'ContextMenu' || (event.shiftKey && event.key === 'F10')) show(event); }}>{children}<DropdownMenu label={label} items={items}>{menu}</DropdownMenu></div>;
}
