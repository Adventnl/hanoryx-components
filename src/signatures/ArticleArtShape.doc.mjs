/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "ArticleArtShape is an extracted page composition.",
  "props": [
    {
      "name": "art",
      "description": "Optional art. Refer to the source defaults and working composition."
    },
    {
      "name": "className",
      "description": "Optional CSS class. The parent must size the composition; do not override component padding."
    }
  ],
  "examples": [
    {
      "title": "Direct composition",
      "code": "<ArticleArtShape art=\"retry\" />"
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
