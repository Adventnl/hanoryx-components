/* Documentation for Cluster. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Cluster",
  "area": "kit",
  "family": "content",
  "summary": "Children in a row that wraps when it runs out of room — buttons, tags, links.",
  "props": [
    {
      "name": "gap",
      "type": "number",
      "default": "3",
      "description": "A spacing token."
    },
    {
      "name": "align",
      "description": "Flexbox values."
    },
    {
      "name": "justify",
      "description": "Flexbox values."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "Layout only."
    }
  ],
  "notes": [
    "Reading order is source order — wrapping never reorders anything."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Cluster gap={3} justify=\"space-between\"><Chip>…</Chip><Chip>…</Chip></Cluster>"
    }
  ]
};
