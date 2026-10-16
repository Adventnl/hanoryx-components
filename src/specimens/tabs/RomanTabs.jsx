import c from './tabs.module.css';
import { Tabs } from './shared';

/* 15 */ export function RomanTabs() { return <Tabs labels={['I', 'II', 'III', 'IV', 'V']} label="Roman numeral tabs" className={c.roman} tabClass={c.tab} />; }
