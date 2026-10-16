import { useMemo, useState } from 'react';
import { useControllable } from '../internal/useControllable';
import { filterRows, flattenTree, sortRows, toggleKey } from '../internal/table-model';

/** Own sort state and derive a stable sorted view without mutating input rows. */
export function useTableSortable(
  rows = [],
  columns = [],
  { value, defaultValue = { key: null, direction: 'none' }, onChange } = {},
) {
  const [sort, setSort] = useControllable({ value, defaultValue, onChange });
  const sortedRows = useMemo(() => sortRows(rows, sort, columns), [rows, sort, columns]);
  return {
    rows: sortedRows,
    sort,
    setSort,
    toggleSort(key) {
      setSort({
        key,
        direction:
          sort.key !== key || sort.direction === 'none'
            ? 'ascending'
            : sort.direction === 'ascending'
              ? 'descending'
              : 'none',
      });
    },
  };
}

export function useTableFilterState({ value, defaultValue = { query: '', filters: {} }, onChange } = {}) {
  const [filter, setFilter] = useControllable({ value, defaultValue, onChange });
  return {
    filter,
    setFilter,
    setQuery(query) {
      setFilter({ ...filter, query });
    },
    setColumnFilter(key, value) {
      setFilter({ ...filter, filters: { ...filter.filters, [key]: value } });
    },
    clearFilters() {
      setFilter({ query: '', filters: {} });
    },
  };
}

export function useTableFiltering(rows = [], filter = {}, columns = []) {
  return useMemo(() => filterRows(rows, filter, columns), [rows, filter, columns]);
}

/** Zero-based pagination. When rows shrink, the displayed page clamps immediately. */
export function useTablePagination(rows = [], { value, defaultValue = 0, onChange, pageSize = 10 } = {}) {
  const [requestedPage, setPage] = useControllable({ value, defaultValue, onChange });
  const size = Math.max(1, Math.trunc(pageSize) || 1);
  const pageCount = Math.max(1, Math.ceil(rows.length / size));
  const page = Math.min(pageCount - 1, Math.max(0, Math.trunc(requestedPage) || 0));
  return {
    rows: rows.slice(page * size, (page + 1) * size),
    page,
    pageCount,
    pageSize: size,
    total: rows.length,
    setPage: (next) => setPage(Math.min(pageCount - 1, Math.max(0, next))),
    nextPage: () => setPage(Math.min(pageCount - 1, page + 1)),
    previousPage: () => setPage(Math.max(0, page - 1)),
  };
}

export function useTableSelectionState({ value, defaultValue = [], onChange } = {}) {
  const [selectedKeys, setSelectedKeys] = useControllable({ value, defaultValue, onChange });
  const selected = useMemo(() => new Set(selectedKeys), [selectedKeys]);
  return {
    selectedKeys,
    setSelectedKeys,
    isSelected: (key) => selected.has(key),
    toggle: (key, on) => setSelectedKeys(toggleKey(selectedKeys, key, on)),
    clear: () => setSelectedKeys([]),
  };
}

/** Selection applies to the rows supplied (for example the current filtered page). */
export function useTableSelection(rows = [], options = {}) {
  const state = useTableSelectionState(options);
  const key = options.rowKey ?? 'id';
  const keys = rows.map((r) => r[key]);
  const allSelected = keys.length > 0 && keys.every(state.isSelected);
  return {
    ...state,
    allSelected,
    someSelected: !allSelected && keys.some(state.isSelected),
    toggleAll(on = !allSelected) {
      const next = new Set(state.selectedKeys);
      keys.forEach((id) => (on ? next.add(id) : next.delete(id)));
      state.setSelectedKeys([...next]);
    },
    getRowProps: (row) => ({ 'aria-selected': state.isSelected(row[key]) }),
  };
}

export function useTableRowExpansion(options = {}) {
  const state = useTableSelectionState(options);
  return {
    expandedKeys: state.selectedKeys,
    setExpandedKeys: state.setSelectedKeys,
    isExpanded: state.isSelected,
    toggleExpanded: state.toggle,
    collapseAll: state.clear,
  };
}

export function useTableGroupedRows(rows = [], groupBy = 'group') {
  return useMemo(() => {
    const groups = new Map();
    for (const row of rows) {
      const key = typeof groupBy === 'function' ? groupBy(row) : row[groupBy];
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(row);
    }
    return [...groups].map(([key, rows]) => ({ key, rows }));
  }, [rows, groupBy]);
}

export function useTableRowIndex(rows = [], rowKey = 'id') {
  const index = useMemo(() => new Map(rows.map((row, i) => [row[rowKey], i])), [rows, rowKey]);
  return (key) => index.get(key) ?? -1;
}

export function useTableRowStatus(statuses = {}, rowKey = 'id') {
  return (row) =>
    typeof statuses === 'function'
      ? statuses(row)
      : Object.hasOwn(statuses, row[rowKey])
        ? statuses[row[rowKey]]
        : undefined;
}

export function useTableTreeState(options = {}) {
  return useTableRowExpansion(options);
}

export function useTableTreeData(rows = [], expandedKeys = [], options = {}) {
  const { rowKey = 'id', childrenKey = 'children' } = options;
  return useMemo(
    () => flattenTree(rows, expandedKeys, { rowKey, childrenKey }),
    [rows, expandedKeys, rowKey, childrenKey],
  );
}

/** Widths are pixels; the initial widths are read from column.width. */
export function useTableColumnResize(columns = [], { minWidth = 64, maxWidth = 1200 } = {}) {
  const [widths, setWidths] = useState({});
  const setWidth = (key, width) =>
    setWidths((current) => ({ ...current, [key]: Math.min(maxWidth, Math.max(minWidth, width)) }));
  const widthOf = (key) => widths[key] ?? columns.find((c) => c.key === key)?.width ?? 160;
  function getResizeHandleProps(key) {
    const width = widthOf(key);
    return {
      role: 'separator',
      tabIndex: 0,
      style: { touchAction: 'none' },
      'aria-label': `Resize ${columns.find((c) => c.key === key)?.label ?? key} column`,
      'aria-orientation': 'vertical',
      'aria-valuemin': minWidth,
      'aria-valuemax': maxWidth,
      'aria-valuenow': width,
      onPointerDown(event) {
        event.currentTarget.setPointerCapture(event.pointerId);
        event.currentTarget.dataset.resizeStart = String(event.clientX - width);
      },
      onPointerMove(event) {
        if (event.currentTarget.hasPointerCapture(event.pointerId))
          setWidth(key, event.clientX - Number(event.currentTarget.dataset.resizeStart));
      },
      onKeyDown(event) {
        if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
          event.preventDefault();
          setWidth(
            key,
            event.key === 'Home'
              ? minWidth
              : event.key === 'End'
                ? maxWidth
                : width + (event.key === 'ArrowLeft' ? -10 : 10),
          );
        }
      },
    };
  }
  return { widths, widthOf, setWidth, getResizeHandleProps };
}

export function useTableColumnSettings(columns = []) {
  const [hidden, setHidden] = useState([]);
  const [order, setOrder] = useState([]);
  const byKey = new Map(columns.map((c) => [c.key, c]));
  const keys = [...new Set([...order, ...columns.map((c) => c.key)])];
  return {
    columns: keys.filter((key) => byKey.has(key) && !hidden.includes(key)).map((key) => byKey.get(key)),
    hidden,
    order,
    setOrder,
    toggleColumn: (key) => setHidden((current) => toggleKey(current, key)),
    resetColumns() {
      setHidden([]);
      setOrder([]);
    },
  };
}

/** Pin columns at the start edge. Pass the same widths used by the rendered cells. */
export function useTableStickyColumns(columns = [], pinnedKeys = [], widths = {}) {
  const offsets = new Map();
  let offset = 0;
  for (const column of columns)
    if (pinnedKeys.includes(column.key)) {
      offsets.set(column.key, offset);
      offset += widths[column.key] ?? column.width ?? 160;
    }
  return (key) =>
    offsets.has(key)
      ? { position: 'sticky', insetInlineStart: offsets.get(key), zIndex: 1, background: 'var(--c-panel)' }
      : {};
}
