/* Documentation for Tooltip. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Tooltip",
  "area": "kit",
  "family": "overlays",
  "summary": "A short description that appears beside a control on hover or keyboard focus, after a beat so it does not flicker. It adds detail; it never replaces a label.",
  "props": [
    {
      "name": "text",
      "type": "string",
      "description": "The description."
    },
    {
      "name": "placement",
      "type": "\"top\" | \"bottom\" | \"start\" | \"end\"",
      "default": "\"top\"",
      "description": "Where it appears."
    },
    {
      "name": "delay",
      "type": "number",
      "default": "350",
      "description": "Milliseconds of hover before it shows (focus shows it at once)."
    }
  ],
  "keyboard": [
    {
      "key": "Tab",
      "does": "Focusing the control shows the tooltip."
    },
    {
      "key": "Esc",
      "does": "Dismisses it without moving focus."
    }
  ],
  "notes": [
    "Wired with aria-describedby on the one focusable child.",
    "Never put anything in a tooltip the user needs to act on — touch has no hover."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Tooltip text=\"Copy a link\"><button aria-label=\"Copy a link\">…</button></Tooltip>"
    }
  ]
};
