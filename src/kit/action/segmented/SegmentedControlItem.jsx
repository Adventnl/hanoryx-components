import { useContext, useId } from 'react';
import { SegmentedContext } from './internal/segmented-context';
import { useControllable } from '../../internal/useControllable';
import styles from './SegmentedControl.module.css';

export function SegmentedControl({ label = 'Choose view', children, options, value, defaultValue, onChange }) {
  const name = useId();
  const [current, setCurrent] = useControllable({ value, defaultValue: defaultValue ?? options?.[0]?.value ?? options?.[0], onChange });
  return <SegmentedContext.Provider value={{ name, current, setCurrent }}><fieldset className={styles.seg}><legend>{label}</legend><div className={styles.segTrack}>{children ?? options?.map(option => { const item = typeof option === 'string' ? { value: option, label: option } : option; return <SegmentedControlItem key={item.value} value={item.value} disabled={item.disabled}>{item.label}</SegmentedControlItem>; })}</div></fieldset></SegmentedContext.Provider>;
}
export function SegmentedControlItem({ value, children, disabled = false }) {
  const group = useContext(SegmentedContext);
  if (!group) throw new Error('SegmentedControlItem requires SegmentedControl.');
  return <label className={styles.segItem}><input type="radio" name={group.name} value={value} checked={group.current === value} disabled={disabled} onChange={() => group.setCurrent(value)} /><span>{children}</span></label>;
}
