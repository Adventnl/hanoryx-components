/* Documentation for Dialog. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Dialog",
  "area": "kit",
  "family": "overlays",
  "summary": "A modal dialog: it takes over the screen until it is dealt with. Focus moves in and is trapped, Escape and the backdrop close it, the page behind stops scrolling and focus returns to what opened it.",
  "props": [
    {
      "name": "open",
      "description": "You own the open state."
    },
    {
      "name": "onClose",
      "description": "You own the open state."
    },
    {
      "name": "title",
      "type": "string",
      "description": "The heading; also the dialog’s name."
    },
    {
      "name": "footer",
      "type": "node",
      "description": "The buttons; the primary action comes last."
    },
    {
      "name": "width",
      "type": "string",
      "default": "\"32rem\"",
      "description": "A CSS length."
    },
    {
      "name": "dismissible",
      "type": "boolean",
      "default": "true",
      "description": "Allow Escape, the backdrop and the close button."
    }
  ],
  "keyboard": [
    {
      "key": "Tab / Shift+Tab",
      "does": "Cycle through the controls inside; never leave."
    },
    {
      "key": "Esc",
      "does": "Close."
    }
  ],
  "notes": [
    "Mark the element that should take focus first with data-autofocus; otherwise it is the first control.",
    "Smooth scrolling is stopped and the page behind is locked while it is open.",
    "Use it sparingly — most things do not need to interrupt."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Dialog open={open} onClose={() => setOpen(false)} title=\"Rename\" footer={<><button onClick={cancel}>Cancel</button><button onClick={save}>Save</button></>}>…</Dialog>"
    }
  ]
};
