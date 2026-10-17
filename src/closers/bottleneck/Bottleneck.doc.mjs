/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "An operation moves at the pace of its slowest step. Five steps, each with people and minutes per item: the slowest is marked, and adding a person anywhere else changes nothing. An invented operation, to show the shape.",
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
      "name": "onward",
      "type": "Array<{ label: string; to: string }>",
      "description": "Host-supplied onward; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through closer block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"bottleneck\",\n  \"anchor\": \"slowest\",\n  \"scene\": \"build-pipeline\",\n  \"tag\": \"End of operational management\",\n  \"minHeight\": 660,\n  \"title\": \"Find the slowest step.\",\n  \"lede\": \"Five steps, each with people and minutes per item. The slowest is marked, and adding a person anywhere else changes nothing. An invented operation, to show the shape.\",\n  \"onward\": [\n    {\n      \"label\": \"Musebase\",\n      \"to\": \"/work/musebase\"\n    },\n    {\n      \"label\": \"System lifecycle\",\n      \"to\": \"/systems/lifecycle\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"bottleneck\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
