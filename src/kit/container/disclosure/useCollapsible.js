import { useId } from 'react';
import { useControllable } from '../../internal/useControllable';

export function useCollapsible({ open, defaultOpen = false, onChange } = {}) {
  const [expanded, setExpanded] = useControllable({ value: open, defaultValue: defaultOpen, onChange });
  const id = useId();
  return { open: expanded, setOpen: setExpanded, triggerProps: { 'aria-expanded': expanded, 'aria-controls': id, onClick: () => setExpanded(!expanded) }, contentProps: { id, hidden: !expanded } };
}
