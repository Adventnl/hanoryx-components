/* Documentation for TiltSurface. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "TiltSurface",
  "area": "fx",
  "summary": "A surface that leans toward the pointer, with a specular highlight that follows it. Driven by CSS variables (no React state); touch and reduced motion get a still surface. Children may use `data-depth=\"n\"` to drift against the tilt.",
  "props": [
    {
      "name": "tilt",
      "description": "Maximum lean in degrees. 7 by default."
    },
    {
      "name": "glare",
      "description": "Show the highlight."
    },
    {
      "name": "as",
      "description": "Element to render."
    }
  ],
  "sizing": {
    "rules": [
      "Block-level; fills its parent. Add your own padding and border."
    ]
  },
  "related": [
    "SpotlightCard"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<TiltSurface><span data-depth=\"14\">Hover to lean</span></TiltSurface>"
    }
  ]
};
