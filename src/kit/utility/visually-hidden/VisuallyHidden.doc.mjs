/* Documentation for VisuallyHidden. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "VisuallyHidden",
  "area": "kit",
  "family": "content",
  "summary": "Text for assistive technology that is not drawn: the “Close” on an icon-only button, the “(current page)” after a link. It stays in the reading order and out of the layout.",
  "props": [
    {
      "name": "as",
      "type": "string",
      "default": "\"span\"",
      "description": "The element."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "Not interactive."
    }
  ],
  "notes": [
    "Prefer a visible label wherever there is room for one.",
    "The same utility is the sr-only class used across the site."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<button><span aria-hidden=\"true\">×</span><VisuallyHidden>Close the panel</VisuallyHidden></button>"
    }
  ]
};
