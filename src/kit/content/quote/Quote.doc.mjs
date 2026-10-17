/* Documentation for Quote. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Quote",
  "area": "kit",
  "family": "content",
  "summary": "A pull quote with its source: a real blockquote inside a figure, the attribution as the caption. Only put words here that someone really said.",
  "props": [
    {
      "name": "cite",
      "type": "string",
      "description": "Who said it, or where it is from."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "Not interactive."
    }
  ],
  "notes": [
    "This site quotes its own principles, not testimonials — nothing invented, nothing implied."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Quote cite=\"From this company’s principles\">A system that is hard to hand over is hard to trust.</Quote>"
    }
  ]
};
