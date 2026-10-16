/* Documentation for Glyph. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Glyph",
  "area": "fx",
  "summary": "A drawn SVG glyph from a set of 27 line glyphs (orbit, layers, flow, grid, shield, chart, terminal…) that draws itself in. `play` replays the draw-in; hover any ancestor with `.glyph-host` to redraw.",
  "props": [
    {
      "name": "name",
      "required": true,
      "description": "One of the drawn names, e.g. `layers`, `flow`, `shield`, `key`, `clock`, `compass`."
    },
    {
      "name": "size",
      "description": "Pixels (square). 40 by default; 44 in card headers."
    },
    {
      "name": "playKey",
      "description": "Change it to replay the draw-in."
    },
    {
      "name": "title",
      "description": "Accessible name; leave empty when decorative."
    }
  ],
  "sizing": {
    "rules": [
      "Square, `size` px. Uses `currentColor`; set `color` on the parent."
    ]
  },
  "related": [
    "Icon"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<Glyph name=\"layers\" size={44} play title=\"Layers\" />"
    }
  ]
};
