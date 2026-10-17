import { useId, useState } from 'react';
import Dialog from '../dialog/Dialog';
import { CommandContext } from './internal/command-context';
import { CommandPaletteInput, CommandPaletteList, CommandPaletteItem, CommandPaletteEmpty } from './CommandPaletteParts';

export function CommandPalette({ open, onClose, title = 'Commands', items = [], children, onSelect }) {
  const [query, setQuery] = useState('');
  const listId = useId();
  const matches = items.filter(item => !item.hidden && `${item.label} ${item.keywords ?? ''}`.toLowerCase().includes(query.toLowerCase()));
  const choose = item => { if (item.disabled) return; item.onSelect?.(); onSelect?.(item); onClose?.(); };
  return <CommandContext.Provider value={{ query, setQuery, listId, empty: matches.length === 0, choose }}><Dialog open={open} onClose={onClose} title={title}>
    {children ?? <><CommandPaletteInput /><CommandPaletteList>{matches.map(item => <CommandPaletteItem key={item.id ?? item.label} item={item}>{item.label}</CommandPaletteItem>)}</CommandPaletteList><CommandPaletteEmpty /></>}
  </Dialog></CommandContext.Provider>;
}
