/* Documentation for Skeleton. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Skeleton",
  "area": "kit",
  "family": "feedback",
  "summary": "The shape of content that has not arrived yet, holding its space so nothing jumps when it does. Decorative: hidden from assistive technology.",
  "props": [
    {
      "name": "width",
      "description": "CSS lengths."
    },
    {
      "name": "height",
      "description": "CSS lengths."
    },
    {
      "name": "lines",
      "type": "number",
      "description": "Draw a short paragraph instead of one block; the last line is shorter."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "Not interactive."
    }
  ],
  "notes": [
    "Pair it with a live “loading” message (a Spinner with hideLabel) wherever the wait matters.",
    "The shimmer stops under reduced motion."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Skeleton width=\"48%\" height=\"1.1rem\" />\n<Skeleton lines={3} />"
    }
  ]
};
