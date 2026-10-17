/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Write a definition of done. Choose what must be true before work counts as finished; the list becomes a card you can print or paste. It nudges you toward a short list, because a long one is a list nobody checks.",
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
      "name": "groups",
      "type": "Array<{ name: string; items: Array<object> }>",
      "description": "Host-supplied groups; see the complete working data example below."
    },
    {
      "name": "start",
      "type": "Array<string>",
      "description": "Host-supplied start; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"doneBuilder\",\n  \"anchor\": \"done\",\n  \"scene\": \"build-pipeline\",\n  \"tag\": \"End of the handbook\",\n  \"minHeight\": 760,\n  \"title\": \"Write your definition of done.\",\n  \"lede\": \"Choose what must be true before work counts as finished. The list becomes a card to print or paste. Keep it short enough that it is really checked.\",\n  \"start\": [\n    \"t1\",\n    \"r1\",\n    \"o1\",\n    \"d1\"\n  ],\n  \"groups\": [\n    {\n      \"name\": \"The change\",\n      \"items\": [\n        {\n          \"id\": \"c1\",\n          \"text\": \"It does what the problem statement asked, and nothing it was told to leave out.\"\n        },\n        {\n          \"id\": \"c2\",\n          \"text\": \"The unhappy paths have been decided and tried, not only the happy one.\"\n        },\n        {\n          \"id\": \"c3\",\n          \"text\": \"It is as small as it can be while still being a whole change.\"\n        }\n      ]\n    },\n    {\n      \"name\": \"The checks\",\n      \"items\": [\n        {\n          \"id\": \"t1\",\n          \"text\": \"The automated checks pass on the branch.\"\n        },\n        {\n          \"id\": \"t2\",\n          \"text\": \"New behaviour has a test that would fail without it.\"\n        },\n        {\n          \"id\": \"t3\",\n          \"text\": \"It has been used with a keyboard alone.\"\n        }\n      ]\n    },\n    {\n      \"name\": \"The review\",\n      \"items\": [\n        {\n          \"id\": \"r1\",\n          \"text\": \"Someone other than the author has read it and said so.\"\n        },\n        {\n          \"id\": \"r2\",\n          \"text\": \"Every blocker has been answered, and nits are decided either way.\"\n        }\n      ]\n    },\n    {\n      \"name\": \"The release\",\n      \"items\": [\n        {\n          \"id\": \"o1\",\n          \"text\": \"It has been released, and the way back has been checked.\"\n        },\n        {\n          \"id\": \"o2\",\n          \"text\": \"It has been watched for a while after release.\"\n        },\n        {\n          \"id\": \"o3\",\n          \"text\": \"Monitoring or alerts have been updated if the change needed it.\"\n        }\n      ]\n    },\n    {\n      \"name\": \"The record\",\n      \"items\": [\n        {\n          \"id\": \"d1\",\n          \"text\": \"The README and any runbook the change touches are up to date.\"\n        },\n        {\n          \"id\": \"d2\",\n          \"text\": \"A decision record exists if the choice would surprise a newcomer.\"\n        },\n        {\n          \"id\": \"d3\",\n          \"text\": \"One line is in the release notes, in plain words.\"\n        }\n      ]\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"How we check the work\",\n      \"to\": \"/north/quality\"\n    },\n    {\n      \"label\": \"Designing for handover\",\n      \"to\": \"/insights/handover\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"doneBuilder\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
