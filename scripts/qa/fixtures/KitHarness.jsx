/* eslint-disable react-refresh/only-export-components -- Browser integration fixture. */
import { useCallback, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useCombobox, useMultiCombobox, useFocusTrap, useMergedRefs, useHotkeys, VegaChart } from '../../../src/kit';

const options = [{ value: 'alpha', label: 'Alpha' }, { value: 'disabled', label: 'Unavailable', disabled: true }, { value: 'beta', label: 'Beta' }];
function ComboHarness({ multiple = false }) {
  const single = useCombobox({ options });
  const multi = useMultiCombobox({ options });
  const combo = multiple ? multi : single;
  return <section aria-label={multiple ? 'Multi hook' : 'Single hook'}><label>Choose team<input {...combo.inputProps} /></label><ul {...combo.listProps}>{combo.matches.map((item, index) => <li key={item.value} {...combo.getOptionProps(index)}>{item.label}</li>)}</ul><output>{JSON.stringify(combo.value)}</output></section>;
}
function FocusHarness() {
  const [open, setOpen] = useState(false);
  const ref = useFocusTrap(open);
  return <section><button type="button" onClick={() => setOpen(true)}>Open focus region</button>{open && <div ref={ref} tabIndex={-1} role="dialog" aria-label="Focus region"><button type="button">First target</button><button type="button" onClick={() => setOpen(false)}>Close focus region</button></div>}</section>;
}
function RefHarness() {
  const object = useRef(null);
  const events = useRef({ attaches: 0, cleanups: 0 });
  const callback = useCallback(() => { events.current.attaches++; return () => { events.current.cleanups++; }; }, []);
  const ref = useMergedRefs(object, callback);
  const [count, setCount] = useState(0);
  const [report, setReport] = useState(null);
  useHotkeys({ 'mod+shift+y': () => setCount(value => value + 1) });
  return <section><input ref={ref} aria-label="Merged input" /><button type="button" onClick={() => setCount(value => value + 1)}>Rerender refs</button><button type="button" onClick={() => setReport({ ...events.current, assigned: object.current?.getAttribute('aria-label') === 'Merged input' })}>Inspect refs</button><output data-ref-report>{JSON.stringify(report)}</output><output data-hotkeys>{count}</output></section>;
}
async function renderChart(element, spec) {
  await new Promise(resolve => setTimeout(resolve, spec.delay));
  if (spec.fail) throw new Error('Renderer rejected this specification');
  const node = document.createElement('span');
  node.textContent = spec.label;
  element.append(node);
  window.kitLifecycle.created++;
  return () => { node.remove(); window.kitLifecycle.disposed++; };
}
function VegaHarness() {
  const [spec, setSpec] = useState({ label: 'Slow chart', delay: 300 });
  return <section><button type="button" onClick={() => setSpec({ label: 'Latest chart', delay: 0 })}>Replace chart</button><button type="button" onClick={() => setSpec({ fail: true, delay: 0 })}>Fail chart</button><VegaChart spec={spec} render={renderChart} label="Renderer lifecycle" /></section>;
}
function Harness() { return <div data-kit-harness><ComboHarness /><ComboHarness multiple /><FocusHarness /><RefHarness /><VegaHarness /></div>; }
export function mount() {
  const element = document.createElement('div');
  document.body.append(element);
  const root = createRoot(element);
  window.kitLifecycle = { created: 0, disposed: 0 };
  root.render(<Harness />);
  return () => { root.unmount(); element.remove(); };
}
