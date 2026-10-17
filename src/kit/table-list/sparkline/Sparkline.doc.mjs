/* Documentation for Sparkline. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Sparkline",
  "area": "kit",
  "family": "data",
  "summary": "A tiny line chart with no axes, for “which way is it going”. It is an image with a text description — range, first and last value — so the shape is never the only way to learn it.",
  "props": [
    {
      "name": "data",
      "type": "number[]",
      "default": "[]",
      "description": "At least two values."
    },
    {
      "name": "label",
      "description": "Used in the text description."
    },
    {
      "name": "unit",
      "description": "Used in the text description."
    },
    {
      "name": "width",
      "description": "The viewBox; the chart scales to its container."
    },
    {
      "name": "height",
      "description": "The viewBox; the chart scales to its container."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "Not interactive."
    }
  ],
  "notes": [
    "The last point is marked.",
    "Show the numbers somewhere nearby if they matter — a sparkline shows shape, not values."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Sparkline label=\"Response time\" unit=\" ms\" data={[210, 190, 205, 180, 150, 140]} />"
    }
  ]
};
