/* Documentation for VelocityMarquee. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "VelocityMarquee",
  "area": "fx",
  "summary": "A marquee that reads the page’s scroll. It drifts on its own, speeds up and leans with scroll velocity, and slows under the pointer. Reduced motion shows the first set, still.",
  "props": [
    {
      "name": "items",
      "type": "string[]",
      "required": true
    },
    {
      "name": "speed",
      "description": "Pixels per second."
    },
    {
      "name": "direction",
      "description": "1 or -1."
    },
    {
      "name": "itemClassName"
    }
  ],
  "sizing": {
    "rules": [
      "Fills its parent and clips overflow; give it a parent with `overflow: hidden`. One line of display or mono type."
    ]
  },
  "related": [
    "ManifestoBlock"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<VelocityMarquee items={['FRAME', 'SHAPE', 'BUILD', 'HAND OVER']} />"
    }
  ]
};
