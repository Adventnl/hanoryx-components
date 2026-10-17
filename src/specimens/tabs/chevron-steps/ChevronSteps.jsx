import c from "../tabs.module.css";
import { Tabs } from "../shared";

/* 11 */ export function ChevronSteps() { return <Tabs labels={['Cart', 'Ship', 'Pay', 'Done']} label="Chevron tabs" className={c.chev} tabClass={c.tab} />; }
