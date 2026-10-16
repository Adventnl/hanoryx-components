/* Documentation for Grid. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Grid",
  "area": "kit",
  "family": "content",
  "summary": "Children in as many equal columns as fit, none narrower than a minimum. There is no breakpoint to maintain: on a phone the minimum is wider than the screen, so you get one column.",
  "props": [
    {
      "name": "min",
      "type": "string",
      "default": "\"15rem\"",
      "description": "The narrowest a column may be."
    },
    {
      "name": "gap",
      "type": "number",
      "default": "4",
      "description": "A spacing token."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "Layout only."
    }
  ],
  "notes": [
    "Uses auto-fit with min(100%, …) so a column never overflows a narrow screen."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Grid min=\"15rem\" gap={4}>{cards}</Grid>"
    }
  ]
};
