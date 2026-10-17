import styles from "./Table.module.css";

/** A semantic composable table in its own named, keyboard-scrollable region. */
export function Table({ caption = 'Table', children, label }) {
  return (
    <div className={styles.scroll} role="region" aria-label={label || caption} tabIndex={0}>
      <table className={styles.table}>
        <caption>{caption}</caption>
        {children}
      </table>
    </div>
  );
}
export function TableHeader({ children }) {
  return <thead>{children}</thead>;
}
export function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}
export function TableFooter({ children }) {
  return <tfoot>{children}</tfoot>;
}
export function TableRow({ children, selected, ...props }) {
  return (
    <tr {...props} data-selected={selected || undefined}>
      {children}
    </tr>
  );
}
export function TableCell({ children, align, ...props }) {
  return (
    <td {...props} data-align={align}>
      {children}
    </td>
  );
}
export function TableHeaderCell({ children, sortDirection = 'none', onSort, scope = 'col', ...props }) {
  return (
    <th {...props} scope={scope} aria-sort={onSort ? sortDirection : undefined}>
      {onSort ? (
        <button type="button" className={styles.sort} onClick={onSort}>
          {children}
          <span aria-hidden="true">
            {sortDirection === 'ascending' ? ' ↑' : sortDirection === 'descending' ? ' ↓' : ' ↕'}
          </span>
        </button>
      ) : (
        children
      )}
    </th>
  );
}
export function TableSelectionToolbar({ count = 0, onClear, children }) {
  return (
    <div className={styles.selection} role="group" aria-label="Selected row actions">
      <span role="status">{count} selected</span>
      {children}
      <button type="button" disabled={!count || !onClear} onClick={onClear}>
        Clear selection
      </button>
    </div>
  );
}
