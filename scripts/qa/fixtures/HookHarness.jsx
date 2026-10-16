/* eslint-disable react-refresh/only-export-components -- Browser integration fixture, not an application route. */
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BatteryCell } from '../../../src/specimens/gauges/BatteryCell';
import { TankLevel } from '../../../src/specimens/gauges/TankLevel';
import { SpringGraph } from '../../../src/specimens/graphs/SpringGraph';
import { SpecContext } from '../../../src/stage/hooks';
import {
  Calendar,
  ChatComposer,
  Resizable,
  ResizablePanel,
  ResizeHandle,
  RichTextEditor,
  DateRangeInput,
  useTableFilterState,
  useTableFiltering,
  useTableSortable,
  useTablePagination,
  useTableSelection,
  useTableColumnSettings,
  useTableRowExpansion,
  useTableGroupedRows,
  useTableRowIndex,
  useTableRowStatus,
  useTableTreeData,
  useTableTreeState,
  useTableColumnResize,
  useTableStickyColumns,
} from '../../../src/kit';

const rows = [
  { id: 'a', name: 'Alpha', count: 12 },
  { id: 'b', name: 'Beta', count: 2 },
  { id: 'c', name: 'Gamma', count: 12 },
];
const columns = [
  { key: 'name', label: 'Name', width: 160 },
  { key: 'count', label: 'Count', width: 80 },
];
function HookHarness() {
  const [date, setDate] = useState('2024-02-28');
  const [range, setRange] = useState({ start: '2024-02-28', end: '2024-02-29' });
  const [sent, setSent] = useState([]);
  const [html, setHtml] = useState(
    '<p>Safe <strong>text</strong><img src=x onerror="window.unsafe=true"><a href="javascript:alert(1)">bad link</a><script>window.unsafe=true</script></p>',
  );
  const filter = useTableFilterState();
  const filtered = useTableFiltering(rows, filter.filter, columns);
  const sorted = useTableSortable(filtered, columns);
  const page = useTablePagination(sorted.rows, { pageSize: 2 });
  const selection = useTableSelection(page.rows);
  const settings = useTableColumnSettings(columns);
  const expansion = useTableRowExpansion();
  const treeState = useTableTreeState({ defaultValue: ['root'] });
  const tree = useTableTreeData([{ id: 'root', children: rows }], treeState.expandedKeys);
  const groups = useTableGroupedRows(rows, 'count');
  const index = useTableRowIndex(rows);
  const status = useTableRowStatus({ a: 'healthy' });
  const sizing = useTableColumnResize(columns);
  const sticky = useTableStickyColumns(columns, ['name', 'count'], { name: sizing.widthOf('name') });
  return (
    <div data-harness>
      <section aria-label="Motion checks"><BatteryCell /><TankLevel /><SpringGraph /></section>
      <section aria-label="Offscreen motion check"><SpecContext.Provider value={false}><BatteryCell /></SpecContext.Provider></section>
      <Calendar value={date} onChange={setDate} today="2024-02-28" min="2024-02-01" max="2024-04-30" />
      <output data-date>{date}</output>
      <DateRangeInput value={range} onChange={setRange} />
      <ChatComposer
        onSend={async (text) => {
          if (text === 'fail') throw new Error('Please retry');
          setSent((items) => [...items, text]);
        }}
      />
      <output data-sent>{JSON.stringify(sent)}</output>
      <Resizable defaultValue={40} min={20} max={80}>
        <ResizablePanel label="First">First</ResizablePanel>
        <ResizeHandle />
        <ResizablePanel label="Second" side="end">
          Second
        </ResizablePanel>
      </Resizable>
      <RichTextEditor value={html} onChange={setHtml} />
      <output data-html>{html}</output>
      <input
        aria-label="Filter rows"
        value={filter.filter.query}
        onChange={(e) => filter.setQuery(e.target.value)}
      />
      <button onClick={() => sorted.toggleSort('count')}>Sort count</button>
      <button onClick={page.nextPage}>Next page</button>
      <button onClick={() => selection.toggleAll()}>Select page</button>
      <button onClick={() => selection.toggle('c')}>Toggle Gamma</button>
      <button onClick={() => settings.toggleColumn('count')}>Toggle count column</button>
      <button onClick={() => settings.setOrder(['count', 'name'])}>Reorder columns</button>
      <button onClick={() => expansion.toggleExpanded('a')}>Expand Alpha</button>
      <button onClick={() => treeState.toggleExpanded('root')}>Toggle root</button>
      <div {...sizing.getResizeHandleProps('name')} />
      <output data-hooks>
        {JSON.stringify({
          ids: page.rows.map((r) => r.id),
          page: page.page,
          selected: selection.selectedKeys,
          all: selection.allSelected,
          columns: settings.columns.map((c) => c.key),
          expanded: expansion.expandedKeys,
          tree: tree.map((e) => e.id),
          groups: groups.map((g) => g.rows.length),
          index: index('b'),
          missing: index('missing'),
          status: status(rows[0]),
          width: sizing.widthOf('name'),
          sticky: sticky('count').insetInlineStart,
        })}
      </output>
    </div>
  );
}

export function mount() {
  const host = document.createElement('div');
  document.body.append(host);
  const root = createRoot(host);
  root.render(<HookHarness />);
  return () => {
    root.unmount();
    host.remove();
  };
}
