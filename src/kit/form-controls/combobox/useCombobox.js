import { useId, useState } from 'react';
import { useControllable } from '../../internal/useControllable';

/** Headless input/listbox bindings. The host renders the matching options. */
export function useCombobox({ options = [], value, defaultValue = '', onChange } = {}) {
  const id = useId();
  const [selected, setSelected] = useControllable({ value, defaultValue, onChange });
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const matches = options.map(option => typeof option === 'string' ? { value: option, label: option } : option).filter(option => !option.disabled && option.label.toLowerCase().includes(query.toLowerCase()));
  const at = Math.min(active, Math.max(0, matches.length - 1));
  const choose = option => { setSelected(option.value); setQuery(option.label); setOpen(false); };
  const inputProps = { role: 'combobox', value: query, 'aria-expanded': open, 'aria-controls': open ? id : undefined, 'aria-autocomplete': 'list', 'aria-activedescendant': open && matches[at] ? `${id}-${at}` : undefined,
    onChange: event => { setQuery(event.target.value); setActive(0); setOpen(true); }, onFocus: () => setOpen(true), onBlur: () => setOpen(false), onKeyDown: event => {
      if (['ArrowDown', 'ArrowUp'].includes(event.key)) { event.preventDefault(); setOpen(true); setActive(open ? (at + (event.key === 'ArrowDown' ? 1 : -1) + matches.length) % Math.max(1, matches.length) : event.key === 'ArrowDown' ? 0 : Math.max(0, matches.length - 1)); }
      else if (open && ['Home', 'End'].includes(event.key)) { event.preventDefault(); setActive(event.key === 'Home' ? 0 : Math.max(0, matches.length - 1)); }
      else if (event.key === 'Enter' && open && matches[at]) { event.preventDefault(); choose(matches[at]); }
      else if (event.key === 'Escape') { event.preventDefault(); setOpen(false); }
    } };
  return { value: selected, query, setQuery, open, setOpen, matches, choose, inputProps, listProps: { id, role: 'listbox', hidden: !open }, getOptionProps: index => ({ id: `${id}-${index}`, role: 'option', 'aria-selected': matches[index]?.value === selected, onPointerDown: event => event.preventDefault(), onPointerMove: () => setActive(index), onClick: () => matches[index] && choose(matches[index]) }) };
}
