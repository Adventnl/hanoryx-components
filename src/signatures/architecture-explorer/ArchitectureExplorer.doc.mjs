/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The four layers of this website as a row. Pick one to see what feeds it, what it produces and where the code lives (shown as plain paths).",
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
      "name": "layers",
      "type": "Array<{ id: string; number: string; name: string; signal: string; summary: string; trace: string; inputs: Array<string>; output: string; lives: Array<string> }>",
      "description": "Host-supplied layers; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"architectureExplorer\",\n  \"anchor\": \"layers\",\n  \"railLabel\": \"Four layers\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 700,\n  \"eyebrow\": \"Architecture / this website\",\n  \"title\": \"Four layers. One interface.\",\n  \"intro\": \"The diagram describes this website’s own implementation, not an undisclosed client system. Pick a layer, or trace a page view through all four.\",\n  \"layers\": [\n    {\n      \"id\": \"content\",\n      \"number\": \"01\",\n      \"name\": \"Content\",\n      \"signal\": \"Records and route data\",\n      \"summary\": \"Every page is a data file. The same file feeds the page and the site search, so what can be read can also be found.\",\n      \"trace\": \"The route key finds its page data.\",\n      \"inputs\": [\n        \"One page-data file per route\",\n        \"Shared company and work records\"\n      ],\n      \"output\": \"Structured page records\",\n      \"lives\": [\n        \"src/data/pages/\",\n        \"src/data/work.js\",\n        \"src/features/search/\"\n      ]\n    },\n    {\n      \"id\": \"interface\",\n      \"number\": \"02\",\n      \"name\": \"Interface\",\n      \"signal\": \"Semantic page structure\",\n      \"summary\": \"The page template composes those records into a hero, sections and signature compositions, each a lazy chunk.\",\n      \"trace\": \"The template picks a block for each entry and loads only the signatures that page uses.\",\n      \"inputs\": [\n        \"Structured page records\",\n        \"Shared interface components\"\n      ],\n      \"output\": \"The document and its interaction states\",\n      \"lives\": [\n        \"src/components/page/\",\n        \"src/components/signatures/\",\n        \"src/components/fx/\"\n      ]\n    },\n    {\n      \"id\": \"motion\",\n      \"number\": \"03\",\n      \"name\": \"Motion\",\n      \"signal\": \"State made visible\",\n      \"summary\": \"Reveals, route transitions and section scenes communicate change without owning the content.\",\n      \"trace\": \"Reveals are scheduled as sections arrive; pointer and scroll write a handful of shared variables.\",\n      \"inputs\": [\n        \"Document state\",\n        \"The reduced-motion preference\"\n      ],\n      \"output\": \"Timed reveals and scene parameters\",\n      \"lives\": [\n        \"src/animation/reveal/\",\n        \"src/hooks/usePointerField.js\",\n        \"src/features/transitions/\"\n      ]\n    },\n    {\n      \"id\": \"runtime\",\n      \"number\": \"04\",\n      \"name\": \"Runtime\",\n      \"signal\": \"Rendering within a budget\",\n      \"summary\": \"One frame scheduler, a scene visibility budget and device quality settings govern all Canvas work.\",\n      \"trace\": \"The budget lets the most visible scenes run (two at most on desktop) and holds the rest on a still frame.\",\n      \"inputs\": [\n        \"Visible scenes\",\n        \"Device and motion settings\"\n      ],\n      \"output\": \"Frames for the scenes that can be seen\",\n      \"lives\": [\n        \"src/animation/rafScheduler.js\",\n        \"src/animation/sceneBudget.js\",\n        \"src/animation/motionBudget.js\"\n      ]\n    }\n  ],\n  \"note\": \"Paths are listed as plain text so you can find the code in a checkout. They are not links.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"architectureExplorer\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
