/* Documentation for Divider. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Divider",
  "area": "kit",
  "family": "content",
  "summary": "A line between things. Without a label it is a plain thematic break; with one it reads as a section break (“or”, “Later”) and is a separator, not a heading.",
  "props": [
    {
      "name": "children",
      "type": "node",
      "description": "An optional word in the middle."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "Not interactive."
    }
  ],
  "notes": [
    "Decorative breaks should be CSS, not elements; use a Divider when the break means something."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Divider />\n<Divider>or</Divider>"
    }
  ]
};
