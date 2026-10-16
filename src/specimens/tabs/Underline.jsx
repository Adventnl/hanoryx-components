import c from './tabs.module.css';
import { Tabs } from './shared';

const ABC = ['One', 'Two', 'Three'];

/* 1 */ export function Underline() { return <Tabs labels={ABC} label="Underline tabs" className={c.under} tabClass={c.tab}><i aria-hidden="true" /></Tabs>; }
