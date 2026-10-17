/* Documentation for Drawer. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Drawer",
  "area": "kit",
  "family": "overlays",
  "summary": "A dialog that slides in from an edge and runs the full height — for a filter panel or a record’s detail, where the page behind still gives context.",
  "props": [
    {
      "name": "side",
      "type": "\"right\" | \"left\"",
      "default": "\"right\"",
      "description": "Which edge it comes from."
    },
    {
      "name": "width",
      "type": "string",
      "default": "\"26rem\"",
      "description": "Its width, capped at the screen."
    },
    {
      "name": "...dialog",
      "type": "props",
      "description": "Everything a Dialog takes."
    }
  ],
  "keyboard": [
    {
      "key": "Tab / Shift+Tab",
      "does": "Cycle inside it."
    },
    {
      "key": "Esc",
      "does": "Close."
    }
  ],
  "notes": [
    "Everything a Dialog does for focus, Escape and scrolling, a Drawer does too.",
    "Under reduced motion it appears without sliding."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Drawer open={open} onClose={close} title=\"Filters\" side=\"right\">…</Drawer>"
    }
  ]
};
