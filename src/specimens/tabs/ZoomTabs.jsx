import { useState } from 'react';
import { useHot } from '../../stage/chartKit';
import c from './tabs.module.css';
import { Tabs } from './shared';

/* 40 */ export function ZoomTabs() {
  const [pt, setPt] = useState(null);
  const [hot, bind] = useHot();
  return (
    <div className={c.zoom} {...bind} data-hot={hot}>
      <Tabs labels={['S', 'M', 'L', 'XL']} label="Size tabs" className={c.scale} tabClass={c.tab} onPick={setPt} />
      <output>{pt === null ? 'M' : ['S', 'M', 'L', 'XL'][pt]}</output>
    </div>
  );
}
