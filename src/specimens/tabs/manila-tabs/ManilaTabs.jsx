import c from "../tabs.module.css";
import { Tabs } from "../shared";

/* 4 */ export function ManilaTabs() {
  return <Tabs labels={['Inbox', 'Sent', 'Drafts']} init={1} label="Folder tabs" className={c.folder} tabClass={c.tab} />;
}
