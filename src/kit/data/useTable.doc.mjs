/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "new",
  "summary": "{ rows, sort, setSort, toggleSort(key) }.",
  "props": [],
  "returns": "{ rows, sort, setSort, toggleSort(key) }. sort = {key, direction}, with none / ascending / descending directions.",
  "notes": [
    "Call hooks at the top level of a React component. Rows need unique stable ids; input arrays are never mutated.",
    "Compose filtering → sorting → pagination, then render with Table parts. Use selection and expansion state independently so paging does not discard other selected keys.",
    "State hooks accept {value, defaultValue, onChange} where documented. A controlled value must be updated by its host."
  ],
  "sizing": {
    "rules": []
  },
  "keyboard": [],
  "examples": [
    {
      "title": "Working composition",
      "code": "import { useTableSortable } from 'hanoryx-components/kit';\nconst rows = [{ id: 'a', name: 'Nightly export', runs: 12 }];\nconst columns = [{ key: 'name', label: 'Job' }, { key: 'runs', label: 'Runs' }];\nconst sorted = useTableSortable(rows, columns);"
    }
  ],
  "subcomponents": {
    "useTableFilterState": {
      "origin": "new",
      "summary": "{ filter, setFilter, setQuery, setColumnFilter, clearFilters }.",
      "props": [],
      "returns": "{ filter, setFilter, setQuery, setColumnFilter, clearFilters }. filter = {query, filters}.",
      "notes": [
        "Call hooks at the top level of a React component. Rows need unique stable ids; input arrays are never mutated.",
        "Compose filtering → sorting → pagination, then render with Table parts. Use selection and expansion state independently so paging does not discard other selected keys.",
        "State hooks accept {value, defaultValue, onChange} where documented. A controlled value must be updated by its host."
      ],
      "sizing": {
        "rules": []
      },
      "keyboard": [],
      "examples": [
        {
          "title": "Working composition",
          "code": "import { useTableFilterState } from 'hanoryx-components/kit';\nconst rows = [{ id: 'a', name: 'Nightly export', runs: 12 }];\nconst columns = [{ key: 'name', label: 'Job' }, { key: 'runs', label: 'Runs' }];\nconst filters = useTableFilterState();"
        }
      ]
    },
    "useTableFiltering": {
      "origin": "new",
      "summary": "The filtered row array.",
      "props": [],
      "returns": "The filtered row array. Text matching is case-insensitive. Array filter values match exact cell values.",
      "notes": [
        "Call hooks at the top level of a React component. Rows need unique stable ids; input arrays are never mutated.",
        "Compose filtering → sorting → pagination, then render with Table parts. Use selection and expansion state independently so paging does not discard other selected keys.",
        "State hooks accept {value, defaultValue, onChange} where documented. A controlled value must be updated by its host."
      ],
      "sizing": {
        "rules": []
      },
      "keyboard": [],
      "examples": [
        {
          "title": "Working composition",
          "code": "import { useTableFiltering } from 'hanoryx-components/kit';\nconst rows = [{ id: 'a', name: 'Nightly export', runs: 12 }];\nconst columns = [{ key: 'name', label: 'Job' }, { key: 'runs', label: 'Runs' }];\nconst visible = useTableFiltering(rows, { query: \"night\", filters: {} }, columns);"
        }
      ]
    },
    "useTablePagination": {
      "origin": "new",
      "summary": "{ rows, page, pageCount, pageSize, total, setPage, nextPage, previousPage }.",
      "props": [],
      "returns": "{ rows, page, pageCount, pageSize, total, setPage, nextPage, previousPage }. page is zero-based and clamps as data shrinks.",
      "notes": [
        "Call hooks at the top level of a React component. Rows need unique stable ids; input arrays are never mutated.",
        "Compose filtering → sorting → pagination, then render with Table parts. Use selection and expansion state independently so paging does not discard other selected keys.",
        "State hooks accept {value, defaultValue, onChange} where documented. A controlled value must be updated by its host."
      ],
      "sizing": {
        "rules": []
      },
      "keyboard": [],
      "examples": [
        {
          "title": "Working composition",
          "code": "import { useTablePagination } from 'hanoryx-components/kit';\nconst rows = [{ id: 'a', name: 'Nightly export', runs: 12 }];\nconst columns = [{ key: 'name', label: 'Job' }, { key: 'runs', label: 'Runs' }];\nconst page = useTablePagination(rows, { pageSize: 10 });"
        }
      ]
    },
    "useTableSelectionState": {
      "origin": "new",
      "summary": "{ selectedKeys, setSelectedKeys, isSelected, toggle(key, selected?), clear }.",
      "props": [],
      "returns": "{ selectedKeys, setSelectedKeys, isSelected, toggle(key, selected?), clear }. Keys are stable row ids.",
      "notes": [
        "Call hooks at the top level of a React component. Rows need unique stable ids; input arrays are never mutated.",
        "Compose filtering → sorting → pagination, then render with Table parts. Use selection and expansion state independently so paging does not discard other selected keys.",
        "State hooks accept {value, defaultValue, onChange} where documented. A controlled value must be updated by its host."
      ],
      "sizing": {
        "rules": []
      },
      "keyboard": [],
      "examples": [
        {
          "title": "Working composition",
          "code": "import { useTableSelectionState } from 'hanoryx-components/kit';\nconst rows = [{ id: 'a', name: 'Nightly export', runs: 12 }];\nconst columns = [{ key: 'name', label: 'Job' }, { key: 'runs', label: 'Runs' }];\nconst selected = useTableSelectionState({ defaultValue: [\"a\"] });"
        }
      ]
    },
    "useTableSelection": {
      "origin": "new",
      "summary": "Selection state plus allSelected, someSelected, toggleAll and getRowProps.",
      "props": [],
      "returns": "Selection state plus allSelected, someSelected, toggleAll and getRowProps. Bulk operations affect only the supplied rows.",
      "notes": [
        "Call hooks at the top level of a React component. Rows need unique stable ids; input arrays are never mutated.",
        "Compose filtering → sorting → pagination, then render with Table parts. Use selection and expansion state independently so paging does not discard other selected keys.",
        "State hooks accept {value, defaultValue, onChange} where documented. A controlled value must be updated by its host."
      ],
      "sizing": {
        "rules": []
      },
      "keyboard": [],
      "examples": [
        {
          "title": "Working composition",
          "code": "import { useTableSelection } from 'hanoryx-components/kit';\nconst rows = [{ id: 'a', name: 'Nightly export', runs: 12 }];\nconst columns = [{ key: 'name', label: 'Job' }, { key: 'runs', label: 'Runs' }];\nconst selection = useTableSelection(rows, { rowKey: \"id\" });"
        }
      ]
    },
    "useTableRowExpansion": {
      "origin": "new",
      "summary": "{ expandedKeys, setExpandedKeys, isExpanded, toggleExpanded, collapseAll }.",
      "props": [],
      "returns": "{ expandedKeys, setExpandedKeys, isExpanded, toggleExpanded, collapseAll }. No rows are expanded by default.",
      "notes": [
        "Call hooks at the top level of a React component. Rows need unique stable ids; input arrays are never mutated.",
        "Compose filtering → sorting → pagination, then render with Table parts. Use selection and expansion state independently so paging does not discard other selected keys.",
        "State hooks accept {value, defaultValue, onChange} where documented. A controlled value must be updated by its host."
      ],
      "sizing": {
        "rules": []
      },
      "keyboard": [],
      "examples": [
        {
          "title": "Working composition",
          "code": "import { useTableRowExpansion } from 'hanoryx-components/kit';\nconst rows = [{ id: 'a', name: 'Nightly export', runs: 12 }];\nconst columns = [{ key: 'name', label: 'Job' }, { key: 'runs', label: 'Runs' }];\nconst expansion = useTableRowExpansion();"
        }
      ]
    },
    "useTableGroupedRows": {
      "origin": "new",
      "summary": "Array of { key, rows }, in first-seen group order.",
      "props": [],
      "returns": "Array of { key, rows }, in first-seen group order. groupBy is a property key or function.",
      "notes": [
        "Call hooks at the top level of a React component. Rows need unique stable ids; input arrays are never mutated.",
        "Compose filtering → sorting → pagination, then render with Table parts. Use selection and expansion state independently so paging does not discard other selected keys.",
        "State hooks accept {value, defaultValue, onChange} where documented. A controlled value must be updated by its host."
      ],
      "sizing": {
        "rules": []
      },
      "keyboard": [],
      "examples": [
        {
          "title": "Working composition",
          "code": "import { useTableGroupedRows } from 'hanoryx-components/kit';\nconst rows = [{ id: 'a', name: 'Nightly export', runs: 12 }];\nconst columns = [{ key: 'name', label: 'Job' }, { key: 'runs', label: 'Runs' }];\nconst groups = useTableGroupedRows(rows, row => row.runs > 10 ? \"Frequent\" : \"Occasional\");"
        }
      ]
    },
    "useTableRowIndex": {
      "origin": "new",
      "summary": "A function getIndex(key) returning the zero-based index, or -1 for missing keys.",
      "props": [],
      "returns": "A function getIndex(key) returning the zero-based index, or -1 for missing keys.",
      "notes": [
        "Call hooks at the top level of a React component. Rows need unique stable ids; input arrays are never mutated.",
        "Compose filtering → sorting → pagination, then render with Table parts. Use selection and expansion state independently so paging does not discard other selected keys.",
        "State hooks accept {value, defaultValue, onChange} where documented. A controlled value must be updated by its host."
      ],
      "sizing": {
        "rules": []
      },
      "keyboard": [],
      "examples": [
        {
          "title": "Working composition",
          "code": "import { useTableRowIndex } from 'hanoryx-components/kit';\nconst rows = [{ id: 'a', name: 'Nightly export', runs: 12 }];\nconst columns = [{ key: 'name', label: 'Job' }, { key: 'runs', label: 'Runs' }];\nconst getIndex = useTableRowIndex(rows);"
        }
      ]
    },
    "useTableRowStatus": {
      "origin": "new",
      "summary": "A function getStatus(row) reading a status record or callback; unknown keys return undefined.",
      "props": [],
      "returns": "A function getStatus(row) reading a status record or callback; unknown keys return undefined.",
      "notes": [
        "Call hooks at the top level of a React component. Rows need unique stable ids; input arrays are never mutated.",
        "Compose filtering → sorting → pagination, then render with Table parts. Use selection and expansion state independently so paging does not discard other selected keys.",
        "State hooks accept {value, defaultValue, onChange} where documented. A controlled value must be updated by its host."
      ],
      "sizing": {
        "rules": []
      },
      "keyboard": [],
      "examples": [
        {
          "title": "Working composition",
          "code": "import { useTableRowStatus } from 'hanoryx-components/kit';\nconst rows = [{ id: 'a', name: 'Nightly export', runs: 12 }];\nconst columns = [{ key: 'name', label: 'Job' }, { key: 'runs', label: 'Runs' }];\nconst getStatus = useTableRowStatus({ a: \"healthy\" });"
        }
      ]
    },
    "useTableTreeState": {
      "origin": "new",
      "summary": "Expansion state using the same contract as useTableRowExpansion.",
      "props": [],
      "returns": "Expansion state using the same contract as useTableRowExpansion.",
      "notes": [
        "Call hooks at the top level of a React component. Rows need unique stable ids; input arrays are never mutated.",
        "Compose filtering → sorting → pagination, then render with Table parts. Use selection and expansion state independently so paging does not discard other selected keys.",
        "State hooks accept {value, defaultValue, onChange} where documented. A controlled value must be updated by its host."
      ],
      "sizing": {
        "rules": []
      },
      "keyboard": [],
      "examples": [
        {
          "title": "Working composition",
          "code": "import { useTableTreeState } from 'hanoryx-components/kit';\nconst rows = [{ id: 'a', name: 'Nightly export', runs: 12 }];\nconst columns = [{ key: 'name', label: 'Job' }, { key: 'runs', label: 'Runs' }];\nconst tree = useTableTreeState({ defaultValue: [\"a\"] });"
        }
      ]
    },
    "useTableTreeData": {
      "origin": "new",
      "summary": "Visible flattened entries: {row, id, depth, parentId, position, setSize, hasChildren, expanded}.",
      "props": [],
      "returns": "Visible flattened entries: {row, id, depth, parentId, position, setSize, hasChildren, expanded}. Depth starts at 1. Keys must be unique.",
      "notes": [
        "Call hooks at the top level of a React component. Rows need unique stable ids; input arrays are never mutated.",
        "Compose filtering → sorting → pagination, then render with Table parts. Use selection and expansion state independently so paging does not discard other selected keys.",
        "State hooks accept {value, defaultValue, onChange} where documented. A controlled value must be updated by its host."
      ],
      "sizing": {
        "rules": []
      },
      "keyboard": [],
      "examples": [
        {
          "title": "Working composition",
          "code": "import { useTableTreeData } from 'hanoryx-components/kit';\nconst rows = [{ id: 'a', name: 'Nightly export', runs: 12 }];\nconst columns = [{ key: 'name', label: 'Job' }, { key: 'runs', label: 'Runs' }];\nconst visible = useTableTreeData(rows, [\"a\"], { childrenKey: \"children\" });"
        }
      ]
    },
    "useTableColumnResize": {
      "origin": "new",
      "summary": "{ widths, widthOf, setWidth, getResizeHandleProps }.",
      "props": [],
      "returns": "{ widths, widthOf, setWidth, getResizeHandleProps }. Widths are pixels. Apply matching widths to table cells.",
      "notes": [
        "Call hooks at the top level of a React component. Rows need unique stable ids; input arrays are never mutated.",
        "Compose filtering → sorting → pagination, then render with Table parts. Use selection and expansion state independently so paging does not discard other selected keys.",
        "State hooks accept {value, defaultValue, onChange} where documented. A controlled value must be updated by its host."
      ],
      "sizing": {
        "rules": []
      },
      "keyboard": [],
      "examples": [
        {
          "title": "Working composition",
          "code": "import { useTableColumnResize } from 'hanoryx-components/kit';\nconst rows = [{ id: 'a', name: 'Nightly export', runs: 12 }];\nconst columns = [{ key: 'name', label: 'Job' }, { key: 'runs', label: 'Runs' }];\nconst sizing = useTableColumnResize(columns, { minWidth: 64, maxWidth: 800 });"
        }
      ]
    },
    "useTableColumnSettings": {
      "origin": "new",
      "summary": "{ columns, hidden, order, setOrder, toggleColumn, resetColumns }.",
      "props": [],
      "returns": "{ columns, hidden, order, setOrder, toggleColumn, resetColumns }. Removed keys are ignored; new columns append.",
      "notes": [
        "Call hooks at the top level of a React component. Rows need unique stable ids; input arrays are never mutated.",
        "Compose filtering → sorting → pagination, then render with Table parts. Use selection and expansion state independently so paging does not discard other selected keys.",
        "State hooks accept {value, defaultValue, onChange} where documented. A controlled value must be updated by its host."
      ],
      "sizing": {
        "rules": []
      },
      "keyboard": [],
      "examples": [
        {
          "title": "Working composition",
          "code": "import { useTableColumnSettings } from 'hanoryx-components/kit';\nconst rows = [{ id: 'a', name: 'Nightly export', runs: 12 }];\nconst columns = [{ key: 'name', label: 'Job' }, { key: 'runs', label: 'Runs' }];\nconst settings = useTableColumnSettings(columns);"
        }
      ]
    },
    "useTableStickyColumns": {
      "origin": "new",
      "summary": "A function getStyle(key) returning a logical sticky offset for pinned start columns.",
      "props": [],
      "returns": "A function getStyle(key) returning a logical sticky offset for pinned start columns. Width defaults to column.width or 160.",
      "notes": [
        "Call hooks at the top level of a React component. Rows need unique stable ids; input arrays are never mutated.",
        "Compose filtering → sorting → pagination, then render with Table parts. Use selection and expansion state independently so paging does not discard other selected keys.",
        "State hooks accept {value, defaultValue, onChange} where documented. A controlled value must be updated by its host."
      ],
      "sizing": {
        "rules": []
      },
      "keyboard": [],
      "examples": [
        {
          "title": "Working composition",
          "code": "import { useTableStickyColumns } from 'hanoryx-components/kit';\nconst rows = [{ id: 'a', name: 'Nightly export', runs: 12 }];\nconst columns = [{ key: 'name', label: 'Job' }, { key: 'runs', label: 'Runs' }];\nconst sticky = useTableStickyColumns(columns, [\"name\"], { name: 200 });"
        }
      ]
    }
  }
};
