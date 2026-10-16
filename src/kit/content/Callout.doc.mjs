/* Documentation for Callout. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Callout",
  "area": "kit",
  "family": "content",
  "summary": "A remark set apart from the text around it: a note, a tip, a warning. The kind is written out as a word as well as shown by colour and icon.",
  "props": [
    {
      "name": "tone",
      "type": "\"note\" | \"tip\" | \"warning\" | \"danger\"",
      "default": "\"note\"",
      "description": "Icon, colour and the default title word."
    },
    {
      "name": "title",
      "type": "string",
      "default": "tone word",
      "description": "Replaces the default title."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "Not interactive."
    }
  ],
  "notes": [
    "A note role, not a landmark and not an alert — it is part of the reading flow, so a page can have as many as it needs."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Callout tone=\"warning\">Changing the retention period applies to new records only.</Callout>"
    }
  ]
};
