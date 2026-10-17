import c from "../tabs.module.css";
import { Tabs } from "../shared";

/* 6 */ export function CountedTabs() {
  const counts = [12, 3, 0];
  return <Tabs labels={['Open', 'Review', 'Done']} label="Tabs with counts" className={c.badged} tabClass={c.tab} render={(t, k) => <>{t}<sup>{counts[k]}</sup></>} />;
}
