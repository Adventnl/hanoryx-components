/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A deck of the principles. Draw one and it turns up with a single question to put to your next design review — the principle as something to ask, not something to admire.",
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
      "name": "cards",
      "type": "Array<{ title: string; question: string }>",
      "description": "Host-supplied cards; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"reviewDraw\",\n  \"scene\": \"vector-compass\",\n  \"tag\": \"End of the principles\",\n  \"minHeight\": 560,\n  \"title\": \"Take one into your next review.\",\n  \"lede\": \"Six cards, one for each principle. Draw one and it comes with a question worth asking out loud.\",\n  \"cards\": [\n    {\n      \"title\": \"Controlled complexity\",\n      \"question\": \"Which part of this would we be unable to explain in six months, and why are we accepting that?\"\n    },\n    {\n      \"title\": \"Interfaces before noise\",\n      \"question\": \"What could we take off this screen without anyone noticing it was gone?\"\n    },\n    {\n      \"title\": \"Motion with purpose\",\n      \"question\": \"What does each movement here say about state, direction or hierarchy? If nothing, why is it moving?\"\n    },\n    {\n      \"title\": \"Architecture that can expand\",\n      \"question\": \"What would the second use of this look like, and does this design make it cheaper or dearer?\"\n    },\n    {\n      \"title\": \"Reveal only what is needed\",\n      \"question\": \"Who sees this by default, and who should not?\"\n    },\n    {\n      \"title\": \"Production-minded prototypes\",\n      \"question\": \"If this prototype were still running in a year, what would break first?\"\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"How we work\",\n      \"to\": \"/company/how-we-work\"\n    },\n    {\n      \"label\": \"Selected work\",\n      \"to\": \"/work\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"reviewDraw\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
