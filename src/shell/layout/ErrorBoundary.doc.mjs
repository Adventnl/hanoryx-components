/* Documentation for ErrorBoundary. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "ErrorBoundary",
  "area": "shell",
  "family": "layout",
  "summary": "Catches a render error in a page and shows a quiet fault panel instead of a white screen; `resetKey` (the pathname) clears it when you navigate.",
  "props": [
    {
      "name": "resetKey",
      "description": "When it changes the boundary resets."
    },
    {
      "name": "children",
      "required": true
    }
  ],
  "sizing": {
    "rules": [
      "Transparent wrapper; the fault panel fills the column."
    ]
  },
  "examples": [
    {
      "title": "Basic",
      "code": "<ErrorBoundary resetKey={pathname}>{children}</ErrorBoundary>"
    }
  ]
};
