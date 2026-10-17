/* Documentation for Figure. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Figure",
  "area": "kit",
  "family": "content",
  "summary": "Something visual with a caption. The caption belongs to the figure, so a screen reader reads the two together.",
  "props": [
    {
      "name": "caption",
      "type": "string",
      "description": "The figcaption."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "Not interactive."
    }
  ],
  "notes": [
    "Whatever goes inside needs its own text alternative: an alt, or an aria-label on an SVG."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Figure caption=\"Figure 1. Three plates.\"><svg role=\"img\" aria-label=\"Three stacked plates\">…</svg></Figure>"
    }
  ]
};
