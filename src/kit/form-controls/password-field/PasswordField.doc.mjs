/* Documentation for PasswordField. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "PasswordField",
  "area": "kit",
  "family": "inputs",
  "summary": "A password field with a show/hide toggle and a rough strength meter. Everything happens in the page; nothing is sent anywhere.",
  "props": [
    {
      "name": "label",
      "type": "string",
      "default": "\"Password\"",
      "description": "The visible label."
    },
    {
      "name": "value",
      "description": "onChange receives the text."
    },
    {
      "name": "defaultValue",
      "description": "onChange receives the text."
    },
    {
      "name": "onChange",
      "description": "onChange receives the text."
    },
    {
      "name": "meter",
      "type": "boolean",
      "default": "true",
      "description": "Show the strength meter."
    }
  ],
  "keyboard": [
    {
      "key": "Tab",
      "does": "Moves to the show/hide button after the field."
    }
  ],
  "notes": [
    "The meter scores length first and variety second and takes off common patterns; it is a nudge, not a guarantee.",
    "The strength is written out in words as well as drawn, and announced politely.",
    "autoComplete is “new-password” so password managers offer to generate one."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<PasswordField label=\"New password\" hint=\"At least 12 characters is a good start.\" />"
    }
  ]
};
