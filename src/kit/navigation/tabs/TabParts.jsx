import { useContext } from 'react';
import { TabContext } from './internal/tab-context';
import { useControllable } from '../../internal/useControllable';
import Tabs from './Tabs';
import DropdownMenu from '../../action/dropdown-menu/DropdownMenu';
import styles from '../../internal/styles/navigation.module.css';

/** Composable tab strip; the host renders panels with matching ids and selected state. */
export function TabList({ children, tabs, value, defaultValue, onChange, label = 'Views' }) {
  const [selected, setSelected] = useControllable({ value, defaultValue, onChange });
  if (tabs) return <Tabs tabs={tabs} value={value} defaultValue={defaultValue} onChange={onChange} label={label} />;
  function onKeyDown(event) {
    const tabs = [...event.currentTarget.querySelectorAll('[role="tab"]:not(:disabled)')];
    const at = tabs.indexOf(document.activeElement);
    const next = event.key === 'ArrowRight' ? tabs[(at + 1) % tabs.length] : event.key === 'ArrowLeft' ? tabs[(at - 1 + tabs.length) % tabs.length] : event.key === 'Home' ? tabs[0] : event.key === 'End' ? tabs.at(-1) : null;
    if (next) { event.preventDefault(); next.focus(); next.click(); }
  }
  return <TabContext.Provider value={{ selected, setSelected }}><div role="tablist" aria-label={label} className={styles.tabList} onKeyDown={onKeyDown}>{children}</div></TabContext.Provider>;
}
export function Tab({ value, id, panelId, disabled = false, children }) {
  const context = useContext(TabContext);
  if (!context) throw new Error('Tab requires TabList.');
  const active = context.selected === value;
  return <button id={id} type="button" role="tab" aria-controls={panelId} aria-selected={active} tabIndex={active || context.selected === undefined ? 0 : -1} disabled={disabled} className={styles.tab} onClick={() => context.setSelected(value)}>{children}</button>;
}
export function TabMenu({ label = 'More tabs', tabs = [], onChange }) { return <DropdownMenu label={label} items={tabs.map(tab => ({ label: tab.label, onSelect: () => onChange?.(tab.id), disabled: tab.disabled }))} />; }
