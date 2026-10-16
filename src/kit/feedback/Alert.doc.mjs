/* Documentation for Alert. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Alert",
  "area": "kit",
  "family": "feedback",
  "summary": "A message in the flow of the page. Information and success speak politely; warnings and errors interrupt. The tone is never carried by colour alone.",
  "props": [
    {
      "name": "tone",
      "type": "\"info\" | \"success\" | \"warning\" | \"danger\"",
      "default": "\"info\"",
      "description": "Sets the icon, the colour and how it is announced."
    },
    {
      "name": "title",
      "type": "string",
      "description": "A short bold line."
    },
    {
      "name": "children",
      "type": "node",
      "description": "The message."
    },
    {
      "name": "onDismiss",
      "type": "function",
      "description": "Adds a dismiss button when given."
    }
  ],
  "keyboard": [
    {
      "key": "Tab",
      "does": "To the dismiss button, if there is one."
    }
  ],
  "notes": [
    "role=\"status\" for info and success, role=\"alert\" for warning and danger.",
    "Do not auto-dismiss an alert; use a Toast for something that needs no answer."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Alert tone=\"warning\" title=\"Token expires soon\">Replace it before Friday.</Alert>"
    }
  ]
};
