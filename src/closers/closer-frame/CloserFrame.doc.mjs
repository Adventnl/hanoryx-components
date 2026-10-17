/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The common skeleton of a page ending. Each ending is its own composition (see closers/registry.js);",
  "props": [
    {
      "name": "tag",
      "description": "Optional tag. Refer to the source defaults and working composition."
    },
    {
      "name": "title",
      "description": "Optional title. Refer to the source defaults and working composition."
    },
    {
      "name": "lede",
      "description": "Optional lede. Refer to the source defaults and working composition."
    },
    {
      "name": "onward",
      "description": "Optional onward. Refer to the source defaults and working composition."
    },
    {
      "name": "align",
      "description": "Optional align. Refer to the source defaults and working composition."
    },
    {
      "name": "className",
      "description": "Optional CSS class. The parent must size the composition; do not override component padding."
    },
    {
      "name": "children",
      "description": "Optional children. Refer to the source defaults and working composition."
    }
  ],
  "examples": [
    {
      "title": "Direct composition",
      "code": "<CloserFrame title=\"Next steps\" />"
    }
  ],
  "notes": [
    "This is a supporting composition exported directly by the library.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
