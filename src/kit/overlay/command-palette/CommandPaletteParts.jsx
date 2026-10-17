import { useContext } from 'react';
import { CommandContext } from './internal/command-context';
import styles from './CommandPaletteParts.module.css';

function useCommand() { const context = useContext(CommandContext); if (!context) throw new Error('Command parts require CommandPalette.'); return context; }
function move(event) {
  const root = event.currentTarget.closest('[role="dialog"]');
  const items = [...root.querySelectorAll('[data-command]:not(:disabled)')].filter(item => !item.hidden);
  const at = items.indexOf(document.activeElement);
  const next = event.key === 'ArrowDown' ? items[(at + 1) % items.length] : event.key === 'ArrowUp' ? items[(at - 1 + items.length) % items.length] : event.key === 'Home' ? items[0] : event.key === 'End' ? items.at(-1) : null;
  if (next) { event.preventDefault(); next.focus(); }
}
export function CommandPaletteInput({ label = 'Search commands', placeholder = 'Type a command…' }) {
  const context = useCommand();
  return <label className={styles.search}>{label}<input type="search" data-autofocus value={context.query} placeholder={placeholder} aria-controls={context.listId} onChange={event => context.setQuery(event.target.value)} onKeyDown={event => { if (event.key === 'ArrowDown' || event.key === 'ArrowUp') move(event); }} /></label>;
}
export function CommandPaletteList({ children }) { const { listId } = useCommand(); return <div id={listId} className={styles.list} role="group" aria-label="Matching commands" onKeyDown={move}>{children}</div>; }
export function CommandPaletteItem({ children, item, textValue, onSelect, disabled = false }) {
  const context = useCommand();
  const command = item ?? { label: textValue ?? (typeof children === 'string' ? children : ''), onSelect, disabled };
  const hidden = !`${command.label} ${command.keywords ?? ''}`.toLowerCase().includes(context.query.toLowerCase());
  return <button type="button" className={styles.item} data-command hidden={hidden} disabled={command.disabled} onClick={() => context.choose(command)}>{children}</button>;
}
export function CommandPaletteGroup({ label, children }) { return <div role="group" aria-label={label} className={styles.list}><strong>{label}</strong>{children}</div>; }
export function CommandPaletteFooter({ children }) { return <footer className={styles.footer}>{children}</footer>; }
export function CommandPaletteEmpty({ children = 'No commands match.', when }) { const { empty } = useCommand(); return (when ?? empty) ? <p role="status">{children}</p> : null; }
