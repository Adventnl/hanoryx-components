/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The pre-mortem: imagine a year has passed and the decision turned out badly. What went wrong? Write the reasons, how likely each is, and what you would do about it now. The riskiest come out first, as a table.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"preMortem\",\n  \"anchor\": \"premortem\",\n  \"scene\": \"unknown-silhouette\",\n  \"tag\": \"End of decision records\",\n  \"minHeight\": 640,\n  \"title\": \"Imagine it went badly.\",\n  \"lede\": \"A pre-mortem: it is a year later and the decision turned out badly. Why? Write the reasons, how likely each is, and what you would do about it now. The riskiest come out first.\",\n  \"onward\": [\n    {\n      \"label\": \"Designing for handover\",\n      \"to\": \"/insights/handover\"\n    },\n    {\n      \"label\": \"Downloads\",\n      \"to\": \"/resources/downloads\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"preMortem\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
