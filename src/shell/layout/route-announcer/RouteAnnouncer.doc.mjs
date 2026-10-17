/* Documentation for RouteAnnouncer. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "RouteAnnouncer",
  "area": "shell",
  "family": "layout",
  "summary": "Tells assistive technology that a new page has opened: waits for the title to settle, says it in a polite status region, and moves focus to `main`.",
  "sizing": {
    "rules": [
      "Visually hidden; no layout."
    ]
  },
  "related": [
    "SiteShell"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<RouteAnnouncer />"
    }
  ]
};
