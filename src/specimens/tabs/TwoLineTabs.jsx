import c from './tabs.module.css';
import { Tabs } from './shared';

/* 35 */ export function TwoLineTabs() {
  return <Tabs labels={[['Pending', '4 items'], ['Active', '9 items'], ['Closed', '31 items']]} label="Two-line tabs" className={c.two} tabClass={c.tab} render={([a, b]) => <><b>{a}</b><small>{b}</small></>}><i aria-hidden="true" /></Tabs>;
}
