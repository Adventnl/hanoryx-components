/* Documentation for Stack. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Stack",
  "area": "kit",
  "family": "content",
  "summary": "Children in a column with an even gap taken from the spacing tokens.",
  "props": [
    {
      "name": "gap",
      "type": "number",
      "default": "4",
      "description": "A spacing token, 1 to 12 (space-1 … space-12)."
    },
    {
      "name": "as",
      "type": "string",
      "default": "\"div\"",
      "description": "The element."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "Layout only."
    }
  ],
  "notes": [
    "Spacing comes from the tokens, so it changes in one place."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Stack gap={5}><Card …/><Card …/></Stack>"
    }
  ]
};
