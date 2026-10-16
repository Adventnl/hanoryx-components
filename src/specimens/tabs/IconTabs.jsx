import c from './tabs.module.css';
import { Tabs } from './shared';

/* 10 */ export function IconTabs() {
  const icons = [['M4 12 12 4l8 8M6 10v9h12v-9', 'Home'], ['M4 6h16M4 12h16M4 18h10', 'List'], ['M12 5v14M5 12h14', 'Add'], ['M12 3a6 6 0 0 0-6 6c0 5-2 6-2 6h16s-2-1-2-6a6 6 0 0 0-6-6ZM10 19a2 2 0 0 0 4 0', 'Alerts']];
  return (
    <Tabs labels={icons} label="Icon tabs" className={c.icons} tabClass={c.tab} render={([d, name]) => <svg viewBox="0 0 24 24" aria-label={name} role="img"><path d={d} /></svg>}>
      <i aria-hidden="true" />
    </Tabs>
  );
}
