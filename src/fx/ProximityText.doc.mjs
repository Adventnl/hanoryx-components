/* Documentation for ProximityText. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "ProximityText",
  "area": "fx",
  "summary": "Text that reacts to the pointer: each unit lifts, swells and warms toward red as the cursor comes near. Touch and reduced motion get plain text.",
  "props": [
    {
      "name": "text",
      "required": true
    },
    {
      "name": "by",
      "description": "`word` or `char`."
    },
    {
      "name": "radius",
      "description": "Reach of the effect in px."
    },
    {
      "name": "as",
      "description": "Element to render."
    }
  ],
  "sizing": {
    "rules": [
      "Inline-block units that wrap with the parent; set the font size on a parent (`.heading-1`)."
    ]
  },
  "related": [
    "ScrambleText",
    "KineticText"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<ProximityText as=\"h2\" text=\"Interfaces before noise\" className=\"heading-2\" />"
    }
  ]
};
