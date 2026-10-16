import c from './tabs.module.css';
import { Tabs } from './shared';

/* 18 */ export function GrowingDots() { return <Tabs labels={['1', '2', '3', '4', '5']} label="Growing dots" className={c.dots} tabClass={c.tab} render={(t) => <span className="sr-only">Slide {t}</span>} />; }
