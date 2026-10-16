import c from './tabs.module.css';
import { Tabs } from './shared';

/* 5 */ export function SideTabs() {
  return <Tabs labels={['Profile', 'Billing', 'Keys', 'Team']} vertical label="Vertical tabs" className={c.side} tabClass={c.tab}><i aria-hidden="true" /></Tabs>;
}
