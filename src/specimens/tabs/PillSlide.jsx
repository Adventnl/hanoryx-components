import c from './tabs.module.css';
import { Tabs } from './shared';

const TRIO = ['Day', 'Week', 'Month'];

/* 2 */ export function PillSlide() { return <Tabs labels={TRIO} label="Pill tabs" className={c.pill} tabClass={c.tab}><i aria-hidden="true" /></Tabs>; }
