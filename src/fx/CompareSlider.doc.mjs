/* Documentation for CompareSlider. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "CompareSlider",
  "area": "fx",
  "summary": "Before / after comparison. Drag the handle (mouse, touch, pen), press the track to glide there, or use ← → Home End on the handle.",
  "props": [
    {
      "name": "before",
      "type": "node",
      "required": true,
      "description": "The left layer. Fill it with `position: absolute; inset: 0`."
    },
    {
      "name": "after",
      "type": "node",
      "required": true,
      "description": "The right layer."
    },
    {
      "name": "initial",
      "description": "Starting position, 0–100."
    },
    {
      "name": "value",
      "description": "Controlled position (with `onChange`)."
    }
  ],
  "keyboard": [
    {
      "key": "← →",
      "does": "Move the handle."
    },
    {
      "key": "Home / End",
      "does": "Jump to either edge."
    }
  ],
  "sizing": {
    "rules": [
      "Fills its parent and keeps a fixed ratio; give it a parent 20–46rem wide. Both layers must fill the box."
    ]
  },
  "related": [
    "AspectRatio"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<CompareSlider label=\"Before and after\" before={<img src={a} alt=\"\" />} after={<img src={b} alt=\"\" />} />"
    }
  ]
};
