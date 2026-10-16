import c from './tabs.module.css';
import { Tabs } from './shared';

/* 25 */ export function BottomBar() {
  return (
    <Tabs labels={['Home', 'Find', 'Saved', 'Me']} label="Bottom bar" className={c.bottom} tabClass={c.tab} render={(t, k) => <><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r={4 + k} /></svg><span>{t}</span></>} />
  );
}
