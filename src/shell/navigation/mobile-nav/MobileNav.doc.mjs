/* Documentation for MobileNav. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "MobileNav",
  "area": "shell",
  "family": "navigation",
  "summary": "The full-screen phone menu: expandable route groups, the audio control and the status. Opened by the navbar burger.",
  "props": [
    {
      "name": "open",
      "type": "boolean",
      "required": true
    },
    {
      "name": "onClose",
      "type": "function",
      "required": true
    }
  ],
  "keyboard": [
    {
      "key": "Esc",
      "does": "Close the menu."
    }
  ],
  "sizing": {
    "rules": [
      "Covers the viewport below the navbar; scroll-locks the page while open."
    ]
  },
  "related": [
    "AdvancedNavbar"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<MobileNav open={open} onClose={() => setOpen(false)} />"
    }
  ]
};
