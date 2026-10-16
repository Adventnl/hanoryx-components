/* Documentation for DataTable. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "DataTable",
  "area": "kit",
  "family": "data",
  "summary": "A table you can sort and select from. A sortable column’s header is a button and the th carries aria-sort. It scrolls sideways inside a focusable region on a narrow screen.",
  "props": [
    {
      "name": "caption",
      "type": "string",
      "description": "The table’s caption and the region’s name."
    },
    {
      "name": "columns",
      "type": "array",
      "default": "[]",
      "description": "{ key, label, sortable?, align?, render?, value? }."
    },
    {
      "name": "rows",
      "type": "array",
      "default": "[]",
      "description": "Objects; each needs a unique rowKey."
    },
    {
      "name": "selectable",
      "description": "Adds checkboxes; onSelect receives the chosen keys."
    },
    {
      "name": "onSelect",
      "description": "Adds checkboxes; onSelect receives the chosen keys."
    },
    {
      "name": "maxHeight",
      "type": "string",
      "description": "Scroll vertically past this height; the header stays."
    }
  ],
  "keyboard": [
    {
      "key": "Enter / Space",
      "does": "On a header button: sort ascending, then descending, then back to the original order."
    },
    {
      "key": "Tab",
      "does": "Into the scrolling region, then through its buttons and checkboxes."
    }
  ],
  "notes": [
    "Sorting is stable and numeric-aware; numbers in a column should be right-aligned.",
    "The header checkbox is indeterminate when only some rows are chosen."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<DataTable caption=\"Scheduled jobs\" rows={rows} selectable onSelect={setChosen} columns={[{ key: 'job', label: 'Job', sortable: true }, { key: 'mins', label: 'Minutes', sortable: true, align: 'right' }]} />"
    }
  ]
};
