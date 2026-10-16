/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "new",
  "summary": "Semantic table parts with optional sortable headers and a selected-row action group.",
  "props": [
    {
      "name": "caption"
    },
    {
      "name": "children",
      "type": "ReactNode",
      "description": "Content rendered in this part."
    },
    {
      "name": "label",
      "type": "string",
      "description": "Visible or accessible name. Keep it meaningful in the page context."
    }
  ],
  "notes": [
    "Keep native HTML nesting: Table → TableHeader/TableBody/TableFooter → TableRow → TableHeaderCell/TableCell.",
    "TableHeaderCell becomes sortable only when onSort is supplied. The host passes sortDirection and changes its rows.",
    "Use DataTable for a ready-made sortable/selectable table; use these parts when composing table hooks.",
    "Selection state belongs to the host. TableSelectionToolbar calls onClear and renders any additional host actions."
  ],
  "sizing": {
    "rules": [
      "The table fills its named scroll region. Wide content scrolls within that region.",
      "Table sections, rows and cells are measured inside a complete table, not as invalid standalone HTML."
    ]
  },
  "keyboard": [
    {
      "key": "Tab",
      "does": "Focus the table scroll region, sorting controls and selected-row actions."
    },
    {
      "key": "Enter / Space",
      "does": "Activate sorting and action buttons."
    }
  ],
  "examples": [
    {
      "title": "Working composition",
      "code": "<Table caption=\"Jobs\">\n  <TableHeader><TableRow><TableHeaderCell>Job</TableHeaderCell></TableRow></TableHeader>\n  <TableBody><TableRow><TableCell>Nightly export</TableCell></TableRow></TableBody>\n</Table>"
    }
  ],
  "subcomponents": {
    "TableHeader": {
      "origin": "new",
      "summary": "",
      "props": [
        {
          "name": "children",
          "type": "ReactNode",
          "description": "Content rendered in this part."
        }
      ],
      "notes": [
        "Keep native HTML nesting: Table → TableHeader/TableBody/TableFooter → TableRow → TableHeaderCell/TableCell.",
        "TableHeaderCell becomes sortable only when onSort is supplied. The host passes sortDirection and changes its rows.",
        "Use DataTable for a ready-made sortable/selectable table; use these parts when composing table hooks.",
        "Selection state belongs to the host. TableSelectionToolbar calls onClear and renders any additional host actions."
      ],
      "sizing": {
        "rules": [
          "The table fills its named scroll region. Wide content scrolls within that region.",
          "Table sections, rows and cells are measured inside a complete table, not as invalid standalone HTML."
        ]
      },
      "keyboard": [
        {
          "key": "Tab",
          "does": "Focus the table scroll region, sorting controls and selected-row actions."
        },
        {
          "key": "Enter / Space",
          "does": "Activate sorting and action buttons."
        }
      ],
      "examples": [
        {
          "title": "Working composition",
          "code": "<Table caption=\"Jobs\">\n  <TableHeader><TableRow><TableHeaderCell>Job</TableHeaderCell></TableRow></TableHeader>\n  <TableBody><TableRow><TableCell>Nightly export</TableCell></TableRow></TableBody>\n</Table>"
        }
      ]
    },
    "TableBody": {
      "origin": "new",
      "summary": "",
      "props": [
        {
          "name": "children",
          "type": "ReactNode",
          "description": "Content rendered in this part."
        }
      ],
      "notes": [
        "Keep native HTML nesting: Table → TableHeader/TableBody/TableFooter → TableRow → TableHeaderCell/TableCell.",
        "TableHeaderCell becomes sortable only when onSort is supplied. The host passes sortDirection and changes its rows.",
        "Use DataTable for a ready-made sortable/selectable table; use these parts when composing table hooks.",
        "Selection state belongs to the host. TableSelectionToolbar calls onClear and renders any additional host actions."
      ],
      "sizing": {
        "rules": [
          "The table fills its named scroll region. Wide content scrolls within that region.",
          "Table sections, rows and cells are measured inside a complete table, not as invalid standalone HTML."
        ]
      },
      "keyboard": [
        {
          "key": "Tab",
          "does": "Focus the table scroll region, sorting controls and selected-row actions."
        },
        {
          "key": "Enter / Space",
          "does": "Activate sorting and action buttons."
        }
      ],
      "examples": [
        {
          "title": "Working composition",
          "code": "<Table caption=\"Jobs\">\n  <TableHeader><TableRow><TableHeaderCell>Job</TableHeaderCell></TableRow></TableHeader>\n  <TableBody><TableRow><TableCell>Nightly export</TableCell></TableRow></TableBody>\n</Table>"
        }
      ]
    },
    "TableFooter": {
      "origin": "new",
      "summary": "",
      "props": [
        {
          "name": "children",
          "type": "ReactNode",
          "description": "Content rendered in this part."
        }
      ],
      "notes": [
        "Keep native HTML nesting: Table → TableHeader/TableBody/TableFooter → TableRow → TableHeaderCell/TableCell.",
        "TableHeaderCell becomes sortable only when onSort is supplied. The host passes sortDirection and changes its rows.",
        "Use DataTable for a ready-made sortable/selectable table; use these parts when composing table hooks.",
        "Selection state belongs to the host. TableSelectionToolbar calls onClear and renders any additional host actions."
      ],
      "sizing": {
        "rules": [
          "The table fills its named scroll region. Wide content scrolls within that region.",
          "Table sections, rows and cells are measured inside a complete table, not as invalid standalone HTML."
        ]
      },
      "keyboard": [
        {
          "key": "Tab",
          "does": "Focus the table scroll region, sorting controls and selected-row actions."
        },
        {
          "key": "Enter / Space",
          "does": "Activate sorting and action buttons."
        }
      ],
      "examples": [
        {
          "title": "Working composition",
          "code": "<Table caption=\"Jobs\">\n  <TableHeader><TableRow><TableHeaderCell>Job</TableHeaderCell></TableRow></TableHeader>\n  <TableBody><TableRow><TableCell>Nightly export</TableCell></TableRow></TableBody>\n</Table>"
        }
      ]
    },
    "TableRow": {
      "origin": "new",
      "summary": "",
      "props": [
        {
          "name": "children",
          "type": "ReactNode",
          "description": "Content rendered in this part."
        },
        {
          "name": "selected"
        },
        {
          "name": "...props"
        }
      ],
      "notes": [
        "Keep native HTML nesting: Table → TableHeader/TableBody/TableFooter → TableRow → TableHeaderCell/TableCell.",
        "TableHeaderCell becomes sortable only when onSort is supplied. The host passes sortDirection and changes its rows.",
        "Use DataTable for a ready-made sortable/selectable table; use these parts when composing table hooks.",
        "Selection state belongs to the host. TableSelectionToolbar calls onClear and renders any additional host actions."
      ],
      "sizing": {
        "rules": [
          "The table fills its named scroll region. Wide content scrolls within that region.",
          "Table sections, rows and cells are measured inside a complete table, not as invalid standalone HTML."
        ]
      },
      "keyboard": [
        {
          "key": "Tab",
          "does": "Focus the table scroll region, sorting controls and selected-row actions."
        },
        {
          "key": "Enter / Space",
          "does": "Activate sorting and action buttons."
        }
      ],
      "examples": [
        {
          "title": "Working composition",
          "code": "<Table caption=\"Jobs\">\n  <TableHeader><TableRow><TableHeaderCell>Job</TableHeaderCell></TableRow></TableHeader>\n  <TableBody><TableRow><TableCell>Nightly export</TableCell></TableRow></TableBody>\n</Table>"
        }
      ]
    },
    "TableCell": {
      "origin": "new",
      "summary": "",
      "props": [
        {
          "name": "children",
          "type": "ReactNode",
          "description": "Content rendered in this part."
        },
        {
          "name": "align"
        },
        {
          "name": "...props"
        }
      ],
      "notes": [
        "Keep native HTML nesting: Table → TableHeader/TableBody/TableFooter → TableRow → TableHeaderCell/TableCell.",
        "TableHeaderCell becomes sortable only when onSort is supplied. The host passes sortDirection and changes its rows.",
        "Use DataTable for a ready-made sortable/selectable table; use these parts when composing table hooks.",
        "Selection state belongs to the host. TableSelectionToolbar calls onClear and renders any additional host actions."
      ],
      "sizing": {
        "rules": [
          "The table fills its named scroll region. Wide content scrolls within that region.",
          "Table sections, rows and cells are measured inside a complete table, not as invalid standalone HTML."
        ]
      },
      "keyboard": [
        {
          "key": "Tab",
          "does": "Focus the table scroll region, sorting controls and selected-row actions."
        },
        {
          "key": "Enter / Space",
          "does": "Activate sorting and action buttons."
        }
      ],
      "examples": [
        {
          "title": "Working composition",
          "code": "<Table caption=\"Jobs\">\n  <TableHeader><TableRow><TableHeaderCell>Job</TableHeaderCell></TableRow></TableHeader>\n  <TableBody><TableRow><TableCell>Nightly export</TableCell></TableRow></TableBody>\n</Table>"
        }
      ]
    },
    "TableHeaderCell": {
      "origin": "new",
      "summary": "",
      "props": [
        {
          "name": "children",
          "type": "ReactNode",
          "description": "Content rendered in this part."
        },
        {
          "name": "sortDirection"
        },
        {
          "name": "onSort"
        },
        {
          "name": "scope"
        },
        {
          "name": "...props"
        }
      ],
      "notes": [
        "Keep native HTML nesting: Table → TableHeader/TableBody/TableFooter → TableRow → TableHeaderCell/TableCell.",
        "TableHeaderCell becomes sortable only when onSort is supplied. The host passes sortDirection and changes its rows.",
        "Use DataTable for a ready-made sortable/selectable table; use these parts when composing table hooks.",
        "Selection state belongs to the host. TableSelectionToolbar calls onClear and renders any additional host actions."
      ],
      "sizing": {
        "rules": [
          "The table fills its named scroll region. Wide content scrolls within that region.",
          "Table sections, rows and cells are measured inside a complete table, not as invalid standalone HTML."
        ]
      },
      "keyboard": [
        {
          "key": "Tab",
          "does": "Focus the table scroll region, sorting controls and selected-row actions."
        },
        {
          "key": "Enter / Space",
          "does": "Activate sorting and action buttons."
        }
      ],
      "examples": [
        {
          "title": "Working composition",
          "code": "<Table caption=\"Jobs\">\n  <TableHeader><TableRow><TableHeaderCell>Job</TableHeaderCell></TableRow></TableHeader>\n  <TableBody><TableRow><TableCell>Nightly export</TableCell></TableRow></TableBody>\n</Table>"
        }
      ]
    },
    "TableSelectionToolbar": {
      "origin": "new",
      "summary": "",
      "props": [
        {
          "name": "count"
        },
        {
          "name": "onClear"
        },
        {
          "name": "children",
          "type": "ReactNode",
          "description": "Content rendered in this part."
        }
      ],
      "notes": [
        "Keep native HTML nesting: Table → TableHeader/TableBody/TableFooter → TableRow → TableHeaderCell/TableCell.",
        "TableHeaderCell becomes sortable only when onSort is supplied. The host passes sortDirection and changes its rows.",
        "Use DataTable for a ready-made sortable/selectable table; use these parts when composing table hooks.",
        "Selection state belongs to the host. TableSelectionToolbar calls onClear and renders any additional host actions."
      ],
      "sizing": {
        "rules": [
          "The table fills its named scroll region. Wide content scrolls within that region.",
          "Table sections, rows and cells are measured inside a complete table, not as invalid standalone HTML."
        ]
      },
      "keyboard": [
        {
          "key": "Tab",
          "does": "Focus the table scroll region, sorting controls and selected-row actions."
        },
        {
          "key": "Enter / Space",
          "does": "Activate sorting and action buttons."
        }
      ],
      "examples": [
        {
          "title": "Working composition",
          "code": "<Table caption=\"Jobs\">\n  <TableHeader><TableRow><TableHeaderCell>Job</TableHeaderCell></TableRow></TableHeader>\n  <TableBody><TableRow><TableCell>Nightly export</TableCell></TableRow></TableBody>\n</Table>"
        }
      ]
    }
  }
};
