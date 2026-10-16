/* Documentation for DataPanel. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "DataPanel",
  "area": "ui",
  "summary": "The glass data panel — the base surface for cards and modules: optional corner brackets, a mono code/label strip, a hover scan-line, and an optional link.",
  "props": [
    {
      "name": "code",
      "description": "Mono code in the header strip."
    },
    {
      "name": "label",
      "description": "Mono label in the header strip."
    },
    {
      "name": "brackets",
      "description": "Corner brackets."
    },
    {
      "name": "interactive",
      "description": "Hover treatment."
    },
    {
      "name": "tone",
      "description": "`default` or `redacted`."
    },
    {
      "name": "to"
    },
    {
      "name": "href"
    }
  ],
  "sizing": {
    "rules": [
      "Fills its cell. Inner padding is the panel’s; do not add your own around the children."
    ]
  },
  "related": [
    "Card",
    "SpotlightCard"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<DataPanel code=\"SYS.04\" label=\"Internal platforms\"><p>Dashboards and controls.</p></DataPanel>"
    }
  ]
};
