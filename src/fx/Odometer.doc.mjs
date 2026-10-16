/* Documentation for Odometer. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Odometer",
  "area": "fx",
  "summary": "A number that rolls into place, each digit on its own wheel with a stagger. Starts at 0 and settles when it scrolls into view.",
  "props": [
    {
      "name": "value",
      "type": "number",
      "required": true
    },
    {
      "name": "decimals",
      "description": "Digits after the point."
    },
    {
      "name": "prefix"
    },
    {
      "name": "suffix"
    }
  ],
  "sizing": {
    "rules": [
      "Intrinsic; takes the font size of its parent. Set `font-size` on the wrapper, not on the Odometer."
    ]
  },
  "related": [
    "Stat",
    "StatsBlock"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<div style={{ fontSize: \"3rem\" }}><Odometer value={2491} suffix=\"+\" /></div>"
    }
  ]
};
