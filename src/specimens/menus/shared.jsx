import { useEffect, useRef, useState } from 'react';

/* open / close with Escape and an outside press */
export function useOpen(init = false) {
  const [open, setOpen] = useState(init);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return undefined;
    const down = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const key = (e) => { if (e.key === 'Escape') { setOpen(false); ref.current?.querySelector('[aria-haspopup], [aria-expanded]')?.focus(); } };
    document.addEventListener('pointerdown', down);
    document.addEventListener('keydown', key);
    return () => { document.removeEventListener('pointerdown', down); document.removeEventListener('keydown', key); };
  }, [open]);
  return [open, setOpen, ref];
}

/* arrow keys move between the items of a menu */
export function roving(e) {
  const items = [...e.currentTarget.querySelectorAll('[role^="menuitem"], [role="option"]')];
  const i = items.indexOf(document.activeElement);
  const to = { ArrowDown: i + 1, ArrowUp: i - 1, Home: 0, End: items.length - 1 }[e.key];
  if (to !== undefined) { e.preventDefault(); items[(to + items.length) % items.length]?.focus(); }
}
