/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A checklist to take away: tick things off and a ring fills; copy the whole thing as Markdown (ticks included) or print it. Used by several pages with their own list — each ending is registered under its own name.",
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
      "name": "sheetTitle",
      "description": "Optional sheetTitle. Refer to the source defaults and working composition."
    },
    {
      "name": "items",
      "description": "Optional items. Refer to the source defaults and working composition."
    },
    {
      "name": "groups",
      "description": "Optional groups. Refer to the source defaults and working composition."
    },
    {
      "name": "onward",
      "description": "Optional onward. Refer to the source defaults and working composition."
    }
  ],
  "examples": [
    {
      "title": "Direct composition",
      "code": "<CheckSheet title=\"Before publishing\" items={[{ id: \"keys\", text: \"Check keyboard access\" }]} />"
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
