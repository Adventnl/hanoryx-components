/* Documentation for AspectRatio. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "AspectRatio",
  "area": "kit",
  "family": "content",
  "summary": "Reserves a box of a fixed shape and fills it with its child, so an image, a video or a chart has its room before it loads and nothing below it jumps.",
  "props": [
    {
      "name": "ratio",
      "type": "string",
      "default": "\"16 / 9\"",
      "description": "Width / height, as CSS aspect-ratio."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "Layout only."
    }
  ],
  "notes": [
    "The child is stretched to fill, so give media object-fit."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<AspectRatio ratio=\"16 / 9\"><iframe title=\"…\" /></AspectRatio>"
    }
  ]
};
