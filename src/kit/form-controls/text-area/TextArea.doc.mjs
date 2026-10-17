/* Documentation for TextArea. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "TextArea",
  "area": "kit",
  "family": "inputs",
  "summary": "A multi-line field that counts. Going over the limit turns the count red and marks the field invalid; it never cuts off what you typed.",
  "props": [
    {
      "name": "label",
      "description": "As for every field."
    },
    {
      "name": "hint",
      "description": "As for every field."
    },
    {
      "name": "error",
      "description": "As for every field."
    },
    {
      "name": "maxLength",
      "type": "number",
      "description": "The most characters expected. Not enforced by truncation."
    },
    {
      "name": "value",
      "description": "Controlled or uncontrolled; onChange receives the text."
    },
    {
      "name": "defaultValue",
      "description": "Controlled or uncontrolled; onChange receives the text."
    },
    {
      "name": "onChange",
      "description": "Controlled or uncontrolled; onChange receives the text."
    },
    {
      "name": "rows",
      "type": "number",
      "default": "4",
      "description": "Starting height."
    }
  ],
  "keyboard": [
    {
      "key": "Tab",
      "does": "Leaves the field (Tab is not a character here)."
    }
  ],
  "notes": [
    "The count is decorative; the over-the-limit message is announced as an alert.",
    "The field can be resized vertically by the user."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<TextArea label=\"Describe the change\" maxLength={140} hint=\"Two sentences is plenty.\" />"
    }
  ]
};
