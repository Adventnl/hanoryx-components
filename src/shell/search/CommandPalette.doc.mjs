/* Documentation for CommandPalette. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "CommandPalette",
  "area": "shell",
  "family": "search",
  "summary": "Command palette and site search: a portal overlay anchored near the top, section chips, highlighted body-text excerpts and full keyboard handling. Opens with Ctrl/⌘ K or `/`.",
  "props": [
    {
      "name": "enabled",
      "description": "False until the intro has finished."
    }
  ],
  "keyboard": [
    {
      "key": "Ctrl / ⌘ K, /",
      "does": "Open the palette."
    },
    {
      "key": "↑ ↓ Home End",
      "does": "Move through results."
    },
    {
      "key": "Enter",
      "does": "Go to the result."
    },
    {
      "key": "Esc",
      "does": "Close and return focus."
    }
  ],
  "sizing": {
    "rules": [
      "A dialog capped at about 40rem wide, anchored near the top so a growing list cannot move the input. Fits a 360px phone."
    ]
  },
  "notes": [
    "The full-text index is fetched when it first opens: register it with `configureSite({ loadSearchDocuments })`. Without it the palette shows a retry state."
  ],
  "related": [
    "GlobalKeys",
    "SiteShell"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<CommandPalette />"
    }
  ]
};
