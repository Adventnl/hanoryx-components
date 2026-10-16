/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The \"before a first conversation\" sheet: what is worth having to hand. A take-away list, ticked as you go and copied as Markdown.",
  "props": [],
  "examples": [
    {
      "title": "Compose through closer block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"prepSheet\",\n  \"anchor\": \"prep\",\n  \"scene\": \"build-pipeline\",\n  \"tag\": \"End of how we work\",\n  \"minHeight\": 640,\n  \"title\": \"Before a first conversation.\",\n  \"lede\": \"Not a form. A sheet of the things worth having to hand, so the first hour is spent on the problem. Tick as you go, copy it, or print it.\",\n  \"sheetTitle\": \"First-conversation sheet\",\n  \"groups\": [\n    {\n      \"name\": \"The problem\",\n      \"items\": [\n        {\n          \"id\": \"p1\",\n          \"text\": \"In two sentences: what is going wrong, or what is missing?\"\n        },\n        {\n          \"id\": \"p2\",\n          \"text\": \"Who feels it, and how often?\"\n        },\n        {\n          \"id\": \"p3\",\n          \"text\": \"What happens if nothing changes?\"\n        }\n      ]\n    },\n    {\n      \"name\": \"The setting\",\n      \"items\": [\n        {\n          \"id\": \"s1\",\n          \"text\": \"The systems, tools and data involved today\"\n        },\n        {\n          \"id\": \"s2\",\n          \"text\": \"Who owns each of them\"\n        },\n        {\n          \"id\": \"s3\",\n          \"text\": \"Anything that cannot change, and why\"\n        }\n      ]\n    },\n    {\n      \"name\": \"Done\",\n      \"items\": [\n        {\n          \"id\": \"d1\",\n          \"text\": \"What would you see if this had worked?\"\n        },\n        {\n          \"id\": \"d2\",\n          \"text\": \"Who would have to say so?\"\n        },\n        {\n          \"id\": \"d3\",\n          \"text\": \"What would make you stop?\"\n        }\n      ]\n    },\n    {\n      \"name\": \"Practicalities\",\n      \"items\": [\n        {\n          \"id\": \"x1\",\n          \"text\": \"Who can decide, and who only needs to be asked\"\n        },\n        {\n          \"id\": \"x2\",\n          \"text\": \"Anything confidential, and how it may be shared\"\n        },\n        {\n          \"id\": \"x3\",\n          \"text\": \"Dates that are real, and dates that are hopes\"\n        }\n      ]\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Insights\",\n      \"to\": \"/insights\"\n    },\n    {\n      \"label\": \"The readiness check\",\n      \"to\": \"/resources/tools/readiness\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"prepSheet\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
