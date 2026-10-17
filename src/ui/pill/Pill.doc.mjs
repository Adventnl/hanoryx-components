/* Documentation for Pill. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Pill",
  "area": "ui",
  "summary": "A small mono tag or status chip. `dot` adds a live indicator; `icon` a leading icon.",
  "props": [
    {
      "name": "variant",
      "type": "'default' | 'red' | 'ghost'"
    },
    {
      "name": "dot",
      "description": "A live indicator."
    },
    {
      "name": "icon",
      "description": "A lucide icon."
    }
  ],
  "sizing": {
    "rules": [
      "Intrinsic; sits in a `Cluster`."
    ]
  },
  "related": [
    "Badge",
    "Chip"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<Pill dot>Live</Pill>"
    }
  ]
};
