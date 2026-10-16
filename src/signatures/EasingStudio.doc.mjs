/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A cubic-bezier studio. Drag the two control points (or focus one and use the arrow keys; Shift moves further), pick a preset — the handles glide there — and watch the same curve move a ball, scale a block and fade a bar.",
  "props": [
    {
      "name": "eyebrow",
      "type": "string",
      "description": "Host-supplied eyebrow; see the complete working data example below."
    },
    {
      "name": "title",
      "type": "string",
      "description": "Host-supplied title; see the complete working data example below."
    },
    {
      "name": "intro",
      "type": "string",
      "description": "Host-supplied intro; see the complete working data example below."
    },
    {
      "name": "presets",
      "type": "Array<{ id: string; label: string; value: Array<number> }>",
      "description": "Host-supplied presets; see the complete working data example below."
    },
    {
      "name": "note",
      "type": "string",
      "description": "Host-supplied note; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"easingStudio\",\n  \"anchor\": \"studio\",\n  \"railLabel\": \"Easing studio\",\n  \"minHeight\": 640,\n  \"eyebrow\": \"Easing studio\",\n  \"title\": \"Draw a curve. Watch it move.\",\n  \"intro\": \"Drag the two handles, or pick a preset. The same curve moves a ball, scales a block and fades a bar. Presets named “Site” are the curves this website actually uses.\",\n  \"presets\": [\n    {\n      \"id\": \"site-out\",\n      \"label\": \"Site · ease-out\",\n      \"value\": [\n        0.16,\n        1,\n        0.3,\n        1\n      ]\n    },\n    {\n      \"id\": \"site-glide\",\n      \"label\": \"Site · glide\",\n      \"value\": [\n        0.22,\n        1,\n        0.36,\n        1\n      ]\n    },\n    {\n      \"id\": \"site-inout\",\n      \"label\": \"Site · in-out\",\n      \"value\": [\n        0.65,\n        0,\n        0.35,\n        1\n      ]\n    },\n    {\n      \"id\": \"linear\",\n      \"label\": \"Linear\",\n      \"value\": [\n        0,\n        0,\n        1,\n        1\n      ]\n    },\n    {\n      \"id\": \"overshoot\",\n      \"label\": \"Overshoot\",\n      \"value\": [\n        0.34,\n        1.56,\n        0.64,\n        1\n      ]\n    },\n    {\n      \"id\": \"anticipate\",\n      \"label\": \"Anticipate\",\n      \"value\": [\n        0.36,\n        -0.4,\n        0.64,\n        1\n      ]\n    }\n  ],\n  \"note\": \"Curves are shown as CSS cubic-bezier() values. The studio only previews; it changes nothing on the site.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"easingStudio\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
