import { useId } from 'react';
import { useControllable } from '../../internal/useControllable';
export function usePopover({ open, defaultOpen = false, onChange } = {}) {
  const [visible, setOpen] = useControllable({ value: open, defaultValue: defaultOpen, onChange });
  const id = useId();
  return { open: visible, setOpen, close: () => setOpen(false), triggerProps: { 'aria-expanded': visible, 'aria-controls': visible ? id : undefined, onClick: () => setOpen(!visible) }, contentProps: { id, hidden: !visible, onKeyDown: event => { if (event.key === 'Escape') { event.preventDefault(); setOpen(false); } } } };
}
