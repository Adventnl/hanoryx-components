export const compareValues = (a, b) =>
  typeof a === 'number' && typeof b === 'number'
    ? a - b
    : String(a ?? '').localeCompare(String(b ?? ''), undefined, { numeric: true, sensitivity: 'base' });

export function sortRows(rows, sort, columns) {
  if (!sort?.key || sort.direction === 'none') return rows;
  const column = columns.find((c) => c.key === sort.key);
  const read = column?.value ?? ((row) => row[sort.key]);
  const sign = sort.direction === 'descending' ? -1 : 1;
  return rows
    .map((row, index) => ({ row, index }))
    .sort((a, b) => sign * compareValues(read(a.row), read(b.row)) || a.index - b.index)
    .map(({ row }) => row);
}

export function filterRows(rows, { query = '', filters = {} } = {}, columns = []) {
  const term = query.trim().toLocaleLowerCase();
  return rows.filter((row) => {
    if (
      !Object.entries(filters).every(
        ([key, value]) =>
          value === '' ||
          value == null ||
          (Array.isArray(value)
            ? !value.length || value.includes(row[key])
            : String(row[key] ?? '')
                .toLocaleLowerCase()
                .includes(String(value).toLocaleLowerCase())),
      )
    )
      return false;
    const values = columns.length
      ? columns.map((c) => (c.value ? c.value(row) : row[c.key]))
      : Object.values(row);
    return (
      !term ||
      values.some((v) =>
        String(v ?? '')
          .toLocaleLowerCase()
          .includes(term),
      )
    );
  });
}

export function flattenTree(rows, expandedKeys, { rowKey = 'id', childrenKey = 'children' } = {}) {
  const result = [];
  const seen = new Set();
  const expanded = new Set(expandedKeys);
  function visit(items, depth, parentId) {
    items.forEach((row, index) => {
      const id = row[rowKey];
      if (id == null || seen.has(id)) throw new Error('Tree rows need unique, non-null keys.');
      seen.add(id);
      const children = Array.isArray(row[childrenKey]) ? row[childrenKey] : [];
      result.push({
        row,
        id,
        depth,
        parentId,
        position: index + 1,
        setSize: items.length,
        hasChildren: children.length > 0,
        expanded: expanded.has(id),
      });
      if (expanded.has(id) && children.length) visit(children, depth + 1, id);
    });
  }
  visit(rows, 1, null);
  return result;
}

export function toggleKey(keys, key, selected) {
  const next = new Set(keys);
  if (selected ?? !next.has(key)) next.add(key);
  else next.delete(key);
  return [...next];
}
