/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A ruler of moments. Slide the marker (or use the arrow keys) and each item shows whether it is still alive at that moment — so \"how long is it kept?\" is answered by watching things go out.",
  "props": [
    {
      "name": "tag",
      "type": "string",
      "description": "Host-supplied tag; see the complete working data example below."
    },
    {
      "name": "title",
      "type": "string",
      "description": "Host-supplied title; see the complete working data example below."
    },
    {
      "name": "lede",
      "type": "string",
      "description": "Host-supplied lede; see the complete working data example below."
    },
    {
      "name": "stops",
      "type": "Array<{ id: string; label: string; note: string }>",
      "description": "Host-supplied stops; see the complete working data example below."
    },
    {
      "name": "items",
      "type": "Array<{ id: string; label: string; lives: Array<number> }>",
      "description": "Host-supplied items; see the complete working data example below."
    },
    {
      "name": "onward",
      "type": "Array<{ label: string; to: string }>",
      "description": "Host-supplied onward; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through closer block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"lifetimeRuler\",\n  \"scene\": \"architectural-grid\",\n  \"tag\": \"End of retention\",\n  \"minHeight\": 560,\n  \"title\": \"Slide through time.\",\n  \"lede\": \"Drag the marker along the ruler, and watch what is still alive at each moment.\",\n  \"stops\": [\n    {\n      \"id\": \"now\",\n      \"label\": \"While you read\",\n      \"note\": \"The page is open.\"\n    },\n    {\n      \"id\": \"leave\",\n      \"label\": \"After you leave the page\",\n      \"note\": \"You navigate away, or reload.\"\n    },\n    {\n      \"id\": \"close\",\n      \"label\": \"After you close the tab\",\n      \"note\": \"The browser clears the tab’s storage.\"\n    },\n    {\n      \"id\": \"later\",\n      \"label\": \"A week later\",\n      \"note\": \"Nothing of the site’s remains in your browser.\"\n    }\n  ],\n  \"items\": [\n    {\n      \"id\": \"typed\",\n      \"label\": \"Text you typed\",\n      \"lives\": [\n        1,\n        0,\n        0,\n        0\n      ]\n    },\n    {\n      \"id\": \"boot\",\n      \"label\": \"hnx.boot.complete\",\n      \"lives\": [\n        1,\n        1,\n        0,\n        0\n      ]\n    },\n    {\n      \"id\": \"audio\",\n      \"label\": \"hnx.audio.on\",\n      \"lives\": [\n        1,\n        1,\n        0,\n        0\n      ]\n    },\n    {\n      \"id\": \"recent\",\n      \"label\": \"hnx.search.recent\",\n      \"lives\": [\n        1,\n        1,\n        0,\n        0\n      ]\n    },\n    {\n      \"id\": \"cookies\",\n      \"label\": \"Cookies from the site\",\n      \"lives\": [\n        0,\n        0,\n        0,\n        0\n      ]\n    },\n    {\n      \"id\": \"records\",\n      \"label\": \"Visitor records on the site’s side\",\n      \"lives\": [\n        0,\n        0,\n        0,\n        0\n      ]\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Cookies & storage\",\n      \"to\": \"/legal/cookies\"\n    },\n    {\n      \"label\": \"Privacy\",\n      \"to\": \"/legal/privacy\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"lifetimeRuler\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
