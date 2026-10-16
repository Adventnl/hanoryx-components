/* Documentation for BarList. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "BarList",
  "area": "kit",
  "family": "data",
  "summary": "Bars you can read as a list: each row has its label, a bar and the figure, so the values are text first and a picture second. The largest is picked out in red.",
  "props": [
    {
      "name": "items",
      "type": "array",
      "default": "[]",
      "description": "{ label, value, display? }."
    },
    {
      "name": "max",
      "type": "number",
      "default": "largest value",
      "description": "The value that fills a bar."
    },
    {
      "name": "unit",
      "type": "string",
      "default": "\"\"",
      "description": "Added after each value unless display is given."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "Not interactive."
    }
  ],
  "notes": [
    "A list of items, so the order and the count are announced.",
    "On a phone the bar drops under its label."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<BarList label=\"Jobs by owner\" items={[{ label: 'Operations', value: 12 }, { label: 'Platform', value: 8 }]} />"
    }
  ]
};
