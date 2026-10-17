# Application families

The original kit is supplemented by new Hanoryx implementations. Import them from `hanoryx-components/kit`. Companion docs and the manifest identify them with `origin: 'new'`.

The kit now contains 279 components, parts, aliases and hooks across eleven
categories, covering all 102 requested overview names. See
[Folders and component families](organization.md) for browsing and scoped imports;
the expandable docs sidebar lists each family's nested parts.

## Chat

`Chat` names a conversation region. `ChatLayout` provides a scrolling transcript and separate composer slot. Put `ChatMessage` and `ChatSystemMessage` inside `ChatMessageList`; use `ChatMessageBubble` and `ChatMessageMetadata` inside messages. `ChatToolCalls` uses native disclosures. `ChatTokenizedText` renders escaped text and labelled tokens.

`ChatComposer` owns a draft or accepts `value` and `onChange`. Its `onSend(text)` may be asynchronous: pending sends disable controls; rejection preserves the draft and displays an error; success clears it unless `clearOnSend={false}`. Compose its input, send button, drawer and tokens inside it. `ChatDictationButton` delegates to a host speech provider. The host owns transport, streaming, history, speech recognition and storage.

## Civil dates and time

`DateInput`, `TimeInput`, and `DateTimeInput` use native inputs and the existing Field pattern. Their `onChange` receives a native event. Values are `YYYY-MM-DD`, `HH:mm`, and `YYYY-MM-DDTHH:mm` respectively. These are local civil values with no timezone; the host owns conversion to an instant.

`DateRangeInput` is controlled by `{start, end}` and emits the next object. It preserves incomplete ranges and explains reversed ranges. `Calendar` emits an ISO date string only on selection. Arrows move focus; Home/End move within a week; Page Up/Down change month; Shift+Page Up/Down change year. Bounds apply to keyboard and pointer selection. Pass `locale`, `weekStartsOn`, and deterministic `today` as needed.

## Split panels

Use `ResizablePanel`, `ResizeHandle`, and a second `ResizablePanel side="end"` inside `Resizable`. The host reserves overall dimensions, and panels own padding and scroll areas. Splits use percentages. Arrows adjust the split; Shift uses larger steps; Home/End choose its bounds. `useResizable` exposes the state and separator bindings for custom layouts.

## Rich text

`RichTextEditor` accepts HTML and emits sanitized HTML. It supports selected-text bold, italic, underline and code. Paste and drop insert plain text. Incoming HTML is reduced to a formatting allowlist; scripts, embedded media, event handlers, style attributes and unsafe links are removed. The host owns persistence and server-side sanitation for any other rendering context. This editor does not implement collaboration or attachments.

## Composable tables

Use `DataTable` for the existing ready-made interface. Use `Table`, `TableHeader`, `TableBody`, `TableFooter`, `TableRow`, `TableHeaderCell`, `TableCell`, and `TableSelectionToolbar` for custom compositions. Preserve native HTML nesting. For sortable headers, pass `onSort` and `sortDirection` together.

| Feature | Hooks and contract |
| --- | --- |
| Filtering | `useTableFilterState` stores `{query, filters}`; `useTableFiltering` derives matching rows. |
| Sorting | `useTableSortable` returns rows, sort state and toggleSort; directions are none, ascending and descending. Equal values preserve input order. |
| Pagination | `useTablePagination` returns a row slice and clamped zero-based page. |
| Selection | `useTableSelectionState` / `useTableSelection` retain stable row keys independently of paging. Bulk selection affects only supplied rows. |
| Expansion | `useTableRowExpansion` and `useTableTreeState` retain expanded keys. `useTableTreeData` derives visible entries with depth, parent, position and child state. |
| Grouping and lookup | `useTableGroupedRows`, `useTableRowIndex`, and `useTableRowStatus` derive groups, key indexes and state descriptions. |
| Columns | `useTableColumnResize` returns numeric widths and separator bindings; `useTableColumnSettings` controls visibility/order; `useTableStickyColumns` derives logical start offsets. |

```jsx
const filter = useTableFilterState();
const filtered = useTableFiltering(rows, filter.filter, columns);
const sorted = useTableSortable(filtered, columns);
const page = useTablePagination(sorted.rows, { pageSize: 20 });
const selection = useTableSelection(page.rows);
// Render page.rows using Table parts. selection.toggle(row.id) drives checkboxes.
```

Keep row arrays immutable and keys unique. State hooks accept controlled options where documented. Control/reset the page explicitly when filtering should return to page one; automatic clamping only prevents an out-of-range page. Column resize handles need `touch-action: none` in a custom layout. Use the same numeric widths for resize and sticky-column calculations.
