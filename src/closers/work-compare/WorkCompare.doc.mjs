/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Put any two of the four side by side. The rows are the things the work pages say; where a row is the same for both it is marked, because what two pieces of work share is as telling as how they differ.",
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
      "name": "shows",
      "type": "{ musebase: string; yk-engine: string; customer-product: string; internal-crm: string }",
      "description": "Host-supplied shows; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"workCompare\",\n  \"anchor\": \"compare\",\n  \"scene\": \"contact-transmission\",\n  \"tag\": \"End of the work\",\n  \"minHeight\": 700,\n  \"title\": \"Put any two side by side.\",\n  \"lede\": \"Choose two of the four. The rows are the things the work pages say; where a row is the same for both it is marked, because what two pieces of work share is as telling as how they differ.\",\n  \"shows\": {\n    \"musebase\": \"Three small experiments with the idea behind it: place, compare, scope.\",\n    \"yk-engine\": \"An editor and player illustration, the pipeline, and the engine’s anatomy.\",\n    \"customer-product\": \"Five abstract wireframes along the path to a purchase.\",\n    \"internal-crm\": \"A window onto synthetic rows, up to ten million of them.\"\n  },\n  \"onward\": [\n    {\n      \"label\": \"How to read the work\",\n      \"to\": \"/work/how-to-read\"\n    },\n    {\n      \"label\": \"Company timeline\",\n      \"to\": \"/company/timeline\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"workCompare\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
