/* Documentation for CatalogError. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "CatalogError",
  "area": "ui",
  "summary": "The \"could not load\" state for catalogue-backed controls, with a retry action. Announced as an alert.",
  "props": [
    {
      "name": "retry",
      "type": "function",
      "required": true
    },
    {
      "name": "subject",
      "description": "What failed to load, in words (\"page list\")."
    }
  ],
  "sizing": {
    "rules": [
      "Fills its parent; centred text."
    ]
  },
  "related": [
    "EmptyState",
    "Alert"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<CatalogError subject=\"page list\" retry={reload} />"
    }
  ]
};
