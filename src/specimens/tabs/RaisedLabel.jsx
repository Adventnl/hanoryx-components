import c from './tabs.module.css';
import { Tabs } from './shared';

/* 26 */ export function RaisedLabel() {
  return <Tabs labels={['Mine', 'Shared', 'Public']} label="Raised label tabs" className={c.raise} tabClass={c.tab} />;
}
