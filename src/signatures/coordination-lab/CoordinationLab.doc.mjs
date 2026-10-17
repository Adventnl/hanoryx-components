/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Musebase foreground: three interactions about one idea. 1. PLACE — drag blocks across lanes and time; overlapping blocks flag, and \"Resolve\" glides them apart. 2. COMPARE — the same set scattered vs coordinated, with a slider. 3.",
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
      "name": "roles",
      "type": "Array<{ id: string; label: string; sees: Array<string>; note: string }>",
      "description": "Host-supplied roles; see the complete working data example below."
    },
    {
      "name": "notes",
      "type": "Array<{ k: string; v: string }>",
      "description": "Host-supplied notes; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"coordinationLab\",\n  \"anchor\": \"try\",\n  \"railLabel\": \"Try the idea\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 700,\n  \"eyebrow\": \"Try the idea\",\n  \"title\": \"Place, compare, scope.\",\n  \"intro\": \"Three small experiments with the idea behind Musebase: many things sharing time, and each person seeing what concerns them.\",\n  \"roles\": [\n    {\n      \"id\": \"wide\",\n      \"label\": \"Wide view\",\n      \"sees\": [\n        \"a\",\n        \"b\",\n        \"c\"\n      ],\n      \"note\": \"Every kind of block — the full picture.\"\n    },\n    {\n      \"id\": \"focused\",\n      \"label\": \"Focused view\",\n      \"sees\": [\n        \"a\",\n        \"b\"\n      ],\n      \"note\": \"Two kinds — enough to do the work.\"\n    },\n    {\n      \"id\": \"narrow\",\n      \"label\": \"Narrow view\",\n      \"sees\": [\n        \"b\"\n      ],\n      \"note\": \"One kind — only what concerns them.\"\n    }\n  ],\n  \"notes\": [\n    {\n      \"k\": \"PLACE\",\n      \"v\": \"Blocks share lanes and time. Overlaps show up the moment they happen.\"\n    },\n    {\n      \"k\": \"COMPARE\",\n      \"v\": \"The same blocks, scattered or coordinated — that difference is the point.\"\n    },\n    {\n      \"k\": \"SCOPE\",\n      \"v\": \"A role lens filters one shared picture down to what a person needs.\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"coordinationLab\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
