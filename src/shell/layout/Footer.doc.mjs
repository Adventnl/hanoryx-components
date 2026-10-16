/* Documentation for Footer. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Footer",
  "area": "shell",
  "family": "layout",
  "summary": "The site footer — a directory of the whole site, not a second navigation bar: six columns of grouped links, live section counts, the status and the legal row. Collapses to disclosures on a phone.",
  "sizing": {
    "rules": [
      "Page-width section. Six columns on a desktop, disclosures under 900px. Never set a width on it."
    ]
  },
  "notes": [
    "Columns come from `footerColumns`, the legal line from `footerLegalRow`, counts from `siteSections` (see `applyNavigation`).",
    "It shows the brand mark from `assetResolver`."
  ],
  "related": [
    "SiteShell"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<Footer />"
    }
  ]
};
