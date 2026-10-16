/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The company's phases as strata under a horizon: the oldest lies deepest, the newest sits just beneath the surface, and above the line is the part that has not been told yet. Hover or focus a layer to read it.",
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
      "name": "phases",
      "type": "Array<{ id: string; code: string; name: string; line: string; body: string }>",
      "description": "Host-supplied phases; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"horizon\",\n  \"scene\": \"timeline-pulse\",\n  \"tag\": \"End of the timeline\",\n  \"minHeight\": 600,\n  \"title\": \"Where the story stands.\",\n  \"lede\": \"The oldest phase lies deepest; the newest sits just under the surface. Above the line is what has not been told.\",\n  \"phases\": [\n    {\n      \"id\": \"foundations\",\n      \"code\": \"PHASE.01\",\n      \"name\": \"Foundations\",\n      \"line\": \"Structure first.\",\n      \"body\": \"Online systems begin beneath the surface: the data model, the boundaries and the roles. The interface comes after the foundations are settled.\"\n    },\n    {\n      \"id\": \"coordination\",\n      \"code\": \"PHASE.02\",\n      \"name\": \"Coordination\",\n      \"line\": \"Musebase.\",\n      \"body\": \"An advanced coordination application that brings people, time and information into one shared environment.\"\n    },\n    {\n      \"id\": \"customer-experience\",\n      \"code\": \"PHASE.03\",\n      \"name\": \"Customer experience\",\n      \"line\": \"A product for customers.\",\n      \"body\": \"A customer-facing product shaped around the shopping and transaction experience, from first look to confirmation.\"\n    },\n    {\n      \"id\": \"data-at-scale\",\n      \"code\": \"PHASE.04\",\n      \"name\": \"Data at scale\",\n      \"line\": \"An internal data system.\",\n      \"body\": \"An internal CRM and data system designed for very large data sets — kept internal, and kept quiet.\"\n    },\n    {\n      \"id\": \"engine\",\n      \"code\": \"PHASE.05\",\n      \"name\": \"Engine\",\n      \"line\": \"YK Engine.\",\n      \"body\": \"A proprietary 2D engine with an editor, a standalone player and export tooling.\"\n    },\n    {\n      \"id\": \"now\",\n      \"code\": \"PHASE.06\",\n      \"name\": \"Now\",\n      \"line\": \"Live.\",\n      \"body\": \"The company, its work and this site are live. New phases are added here as they are ready to be told.\"\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Selected work\",\n      \"to\": \"/work\"\n    },\n    {\n      \"label\": \"Release notes\",\n      \"to\": \"/resources/changelog\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"horizon\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
