/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Plan the end while you are building the start. Choose what applies to the system you are retiring and how much notice people get; out comes an ordered plan counted back from the day it is switched off.",
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
      "name": "onward",
      "type": "Array<{ label: string; to: string }>",
      "description": "Host-supplied onward; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through closer block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"sunsetPlan\",\n  \"anchor\": \"end\",\n  \"scene\": \"redacted-timeline-branch\",\n  \"tag\": \"End of the lifecycle\",\n  \"minHeight\": 780,\n  \"title\": \"Plan the end now.\",\n  \"lede\": \"Choose what applies to a system you might one day retire, and how much notice people get. Out comes an ordered plan, counted back from the day it is switched off.\",\n  \"groups\": [\n    {\n      \"name\": \"People\",\n      \"items\": [\n        {\n          \"id\": \"p1\",\n          \"text\": \"Tell everyone who uses it, and say what replaces it.\",\n          \"when\": 1,\n          \"default\": true\n        },\n        {\n          \"id\": \"p2\",\n          \"text\": \"Give people a place to ask questions.\",\n          \"when\": 1,\n          \"default\": true\n        },\n        {\n          \"id\": \"p3\",\n          \"text\": \"Remind them again, closer to the day.\",\n          \"when\": 0.25,\n          \"default\": true\n        }\n      ]\n    },\n    {\n      \"name\": \"Data\",\n      \"items\": [\n        {\n          \"id\": \"d1\",\n          \"text\": \"Offer every user an export of their own data.\",\n          \"when\": 0.7,\n          \"default\": true\n        },\n        {\n          \"id\": \"d2\",\n          \"text\": \"Decide what must be kept, and for how long.\",\n          \"when\": 1,\n          \"default\": true\n        },\n        {\n          \"id\": \"d3\",\n          \"text\": \"Move or archive what must be kept, and check that it can be read.\",\n          \"when\": 0.4,\n          \"default\": true\n        },\n        {\n          \"id\": \"d4\",\n          \"text\": \"Delete what must not be kept, and record that you did.\",\n          \"when\": -0.1,\n          \"default\": false\n        }\n      ]\n    },\n    {\n      \"name\": \"Access\",\n      \"items\": [\n        {\n          \"id\": \"a1\",\n          \"text\": \"List every integration that talks to it.\",\n          \"when\": 1,\n          \"default\": true\n        },\n        {\n          \"id\": \"a2\",\n          \"text\": \"Tell the owners of those integrations.\",\n          \"when\": 0.9,\n          \"default\": true\n        },\n        {\n          \"id\": \"a3\",\n          \"text\": \"Revoke accounts, keys and tokens.\",\n          \"when\": 0,\n          \"default\": true\n        },\n        {\n          \"id\": \"a4\",\n          \"text\": \"Remove service accounts and firewall rules.\",\n          \"when\": -0.1,\n          \"default\": false\n        }\n      ]\n    },\n    {\n      \"name\": \"Traffic\",\n      \"items\": [\n        {\n          \"id\": \"t1\",\n          \"text\": \"Put a notice page where it used to be.\",\n          \"when\": 0,\n          \"default\": true\n        },\n        {\n          \"id\": \"t2\",\n          \"text\": \"Redirect old addresses to what replaces them.\",\n          \"when\": 0,\n          \"default\": false\n        },\n        {\n          \"id\": \"t3\",\n          \"text\": \"Watch for requests still arriving.\",\n          \"when\": -0.2,\n          \"default\": true\n        }\n      ]\n    },\n    {\n      \"name\": \"Record\",\n      \"items\": [\n        {\n          \"id\": \"r1\",\n          \"text\": \"Write down why it was retired and what was learned.\",\n          \"when\": -0.1,\n          \"default\": true\n        },\n        {\n          \"id\": \"r2\",\n          \"text\": \"Archive the documentation and decision records.\",\n          \"when\": -0.1,\n          \"default\": true\n        },\n        {\n          \"id\": \"r3\",\n          \"text\": \"Update the list of systems the company runs.\",\n          \"when\": -0.1,\n          \"default\": false\n        }\n      ]\n    },\n    {\n      \"name\": \"Cost\",\n      \"items\": [\n        {\n          \"id\": \"c1\",\n          \"text\": \"Cancel hosting, licences and domains, in that order.\",\n          \"when\": -0.2,\n          \"default\": true\n        },\n        {\n          \"id\": \"c2\",\n          \"text\": \"Confirm the final bill.\",\n          \"when\": -0.4,\n          \"default\": false\n        }\n      ]\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Data retention\",\n      \"to\": \"/legal/retention\"\n    },\n    {\n      \"label\": \"Designing for handover\",\n      \"to\": \"/insights/handover\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"sunsetPlan\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
