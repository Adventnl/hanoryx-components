/* Documentation for GlobalKeys. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "GlobalKeys",
  "area": "shell",
  "family": "shortcuts",
  "summary": "Site-wide single-key shortcuts that belong to no one page: `?` opens the shortcuts panel and `B` switches blueprint mode. Switchable off for WCAG 2.1.4 (`html[data-keys=\"off\"]`).",
  "props": [
    {
      "name": "enabled"
    }
  ],
  "keyboard": [
    {
      "key": "?",
      "does": "Open the shortcuts panel."
    },
    {
      "key": "B",
      "does": "Toggle blueprint mode (outlines and names every marked part)."
    }
  ],
  "related": [
    "ShortcutsOverlay",
    "BlueprintLayer"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<GlobalKeys enabled />"
    }
  ]
};
