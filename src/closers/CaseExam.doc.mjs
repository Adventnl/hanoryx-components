/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Six questions to put to any case study, put to this site's own. For each of the four, the page says plainly what is answered, what is only partly answered and what is not said at all. A way of showing the limits instead of hiding them.",
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
      "name": "questions",
      "type": "Array<{ id: string; text: string; why: string }>",
      "description": "Host-supplied questions; see the complete working data example below."
    },
    {
      "name": "cases",
      "type": "Array<{ id: string; name: string; answers: { who: object; what: object; change: object; know: object; wrong: object; look: object } }>",
      "description": "Host-supplied cases; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"caseExam\",\n  \"anchor\": \"exam\",\n  \"scene\": \"magnetic-particles\",\n  \"tag\": \"End of reading the work\",\n  \"minHeight\": 780,\n  \"title\": \"The six questions, put to ours.\",\n  \"lede\": \"For each of the four pieces of work on this site, which of the six questions are answered, which only partly, and which are not said at all. Written plainly, because the gaps are the point.\",\n  \"questions\": [\n    {\n      \"id\": \"who\",\n      \"text\": \"Who was it for?\",\n      \"why\": \"A named client, a kind of client, or no one in particular?\"\n    },\n    {\n      \"id\": \"what\",\n      \"text\": \"What does it actually do?\",\n      \"why\": \"In terms you could check.\"\n    },\n    {\n      \"id\": \"change\",\n      \"text\": \"What changed because of it?\",\n      \"why\": \"The question case studies exist to answer.\"\n    },\n    {\n      \"id\": \"know\",\n      \"text\": \"How does anyone know?\",\n      \"why\": \"A number, a comparison, a person.\"\n    },\n    {\n      \"id\": \"wrong\",\n      \"text\": \"What went wrong, or was hard?\",\n      \"why\": \"Every project had a bad week.\"\n    },\n    {\n      \"id\": \"look\",\n      \"text\": \"Can I look for myself?\",\n      \"why\": \"Seeing beats being told.\"\n    }\n  ],\n  \"cases\": [\n    {\n      \"id\": \"musebase\",\n      \"name\": \"Musebase\",\n      \"answers\": {\n        \"who\": {\n          \"status\": \"partly\",\n          \"text\": \"Described by purpose, as a coordination application for people, time and information. No customer is named.\"\n        },\n        \"what\": {\n          \"status\": \"said\",\n          \"text\": \"Scheduling, communication and records in one environment, with access scoped to each role.\"\n        },\n        \"change\": {\n          \"status\": \"not\",\n          \"text\": \"No result is claimed.\"\n        },\n        \"know\": {\n          \"status\": \"not\",\n          \"text\": \"No measurement, comparison or testimonial.\"\n        },\n        \"wrong\": {\n          \"status\": \"not\",\n          \"text\": \"Not covered. The page describes the work; it is not a post-mortem.\"\n        },\n        \"look\": {\n          \"status\": \"partly\",\n          \"text\": \"Three small experiments with the idea behind it are on the page. They are not the application.\"\n        }\n      }\n    },\n    {\n      \"id\": \"yk\",\n      \"name\": \"YK Engine\",\n      \"answers\": {\n        \"who\": {\n          \"status\": \"not\",\n          \"text\": \"Not stated. The page says what the engine is, not who uses it.\"\n        },\n        \"what\": {\n          \"status\": \"said\",\n          \"text\": \"A 2D engine with an editor, a standalone player and project export tooling.\"\n        },\n        \"change\": {\n          \"status\": \"not\",\n          \"text\": \"No result is claimed.\"\n        },\n        \"know\": {\n          \"status\": \"partly\",\n          \"text\": \"The page’s own frame-time graph is measured live from the demonstration in your browser, not from the engine.\"\n        },\n        \"wrong\": {\n          \"status\": \"not\",\n          \"text\": \"Not covered.\"\n        },\n        \"look\": {\n          \"status\": \"said\",\n          \"text\": \"A public repository, linked from the page. The editor and player on the page are illustrations.\"\n        }\n      }\n    },\n    {\n      \"id\": \"customer\",\n      \"name\": \"Customer product\",\n      \"answers\": {\n        \"who\": {\n          \"status\": \"partly\",\n          \"text\": \"A customer-facing product around shopping and transactions. Unnamed by design.\"\n        },\n        \"what\": {\n          \"status\": \"said\",\n          \"text\": \"The path from a first look to a confirmed purchase, described in five frames.\"\n        },\n        \"change\": {\n          \"status\": \"not\",\n          \"text\": \"No result is claimed.\"\n        },\n        \"know\": {\n          \"status\": \"not\",\n          \"text\": \"No measurement or testimonial.\"\n        },\n        \"wrong\": {\n          \"status\": \"not\",\n          \"text\": \"Not covered.\"\n        },\n        \"look\": {\n          \"status\": \"not\",\n          \"text\": \"Described, not displayed. The page shows abstract wireframes, not screenshots, and says so. The product is not public.\"\n        }\n      }\n    },\n    {\n      \"id\": \"crm\",\n      \"name\": \"Internal CRM\",\n      \"answers\": {\n        \"who\": {\n          \"status\": \"partly\",\n          \"text\": \"An internal system, for the people who run an operation. Not a public product.\"\n        },\n        \"what\": {\n          \"status\": \"said\",\n          \"text\": \"Designed for very large data sets. The page demonstrates the idea with synthetic rows made in your browser; no speed or size of the real system is claimed.\"\n        },\n        \"change\": {\n          \"status\": \"not\",\n          \"text\": \"No result is claimed.\"\n        },\n        \"know\": {\n          \"status\": \"not\",\n          \"text\": \"No measurement or testimonial.\"\n        },\n        \"wrong\": {\n          \"status\": \"not\",\n          \"text\": \"Not covered.\"\n        },\n        \"look\": {\n          \"status\": \"not\",\n          \"text\": \"Internal by design. It is not public.\"\n        }\n      }\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"All work\",\n      \"to\": \"/work\"\n    },\n    {\n      \"label\": \"Frequently asked questions\",\n      \"to\": \"/company/faq\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"caseExam\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
