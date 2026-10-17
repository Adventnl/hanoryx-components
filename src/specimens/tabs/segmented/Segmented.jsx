import c from "../tabs.module.css";
import { Tabs } from "../shared";

/* 3 */ export function Segmented() { return <Tabs labels={['List', 'Grid', 'Map']} label="Segmented control" className={c.seg} tabClass={c.tab}><i aria-hidden="true" /></Tabs>; }
