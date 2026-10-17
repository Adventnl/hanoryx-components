/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Slide how much an account may do and watch the blast radius — what a stolen password or a slip of the mouse could reach — grow with it. The job needs the first three. Everything past that is risk that buys nothing.",
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
      "name": "job",
      "type": "string",
      "description": "Host-supplied job; see the complete working data example below."
    },
    {
      "name": "powers",
      "type": "Array<{ name: string; risk: string }>",
      "description": "Host-supplied powers; see the complete working data example below."
    },
    {
      "name": "needed",
      "type": "number",
      "description": "Host-supplied needed; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"leastPrivilege\",\n  \"anchor\": \"least\",\n  \"scene\": \"permission-orbit\",\n  \"tag\": \"End of permissions\",\n  \"minHeight\": 640,\n  \"title\": \"How far could it reach?\",\n  \"lede\": \"Slide to give a job more powers. The ring shows how much a stolen password, or a slip, could touch. The job only ever needed the first three.\",\n  \"job\": \"the nightly stock report\",\n  \"needed\": 3,\n  \"powers\": [\n    {\n      \"name\": \"Read stock levels\",\n      \"risk\": \"\"\n    },\n    {\n      \"name\": \"Read product names\",\n      \"risk\": \"\"\n    },\n    {\n      \"name\": \"Write one report file\",\n      \"risk\": \"\"\n    },\n    {\n      \"name\": \"Read customer records\",\n      \"risk\": \"A stolen key could now read personal data the report never touches.\"\n    },\n    {\n      \"name\": \"Edit stock levels\",\n      \"risk\": \"A bug, or a thief, could change what the business believes it holds.\"\n    },\n    {\n      \"name\": \"Issue refunds\",\n      \"risk\": \"Money could leave the business.\"\n    },\n    {\n      \"name\": \"Create other accounts\",\n      \"risk\": \"An attacker could make themselves a way back in.\"\n    },\n    {\n      \"name\": \"Change permissions\",\n      \"risk\": \"It could grant itself anything else.\"\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Audit trails that answer questions\",\n      \"to\": \"/insights/audit-trails\"\n    },\n    {\n      \"label\": \"Security approach\",\n      \"to\": \"/company/security\"\n    },\n    {\n      \"label\": \"All insights\",\n      \"to\": \"/insights\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"leastPrivilege\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
