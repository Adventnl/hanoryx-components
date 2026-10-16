/* Documentation for PageTransition. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "PageTransition",
  "area": "shell",
  "family": "layout",
  "summary": "Wraps a page so routes fade and slide between each other, at a dim level — never fully dark. Transform and opacity only. Pairs with `AnimatePresence mode=\"wait\"` around the routes.",
  "props": [
    {
      "name": "className"
    },
    {
      "name": "children",
      "required": true
    }
  ],
  "sizing": {
    "rules": [
      "A transparent wrapper; it adds no size."
    ]
  },
  "related": [
    "TransitionOverlay"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<PageTransition><PageHero hero={hero} /></PageTransition>"
    }
  ]
};
