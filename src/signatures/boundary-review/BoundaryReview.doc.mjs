/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A review aid. Work through the questions for a system you are building; the ring and each group's bar fill as you answer. It does not assess any real system and stores nothing — ticks live in this page only.",
  "props": [
    {
      "name": "eyebrow",
      "type": "string",
      "description": "Host-supplied eyebrow; see the complete working data example below."
    },
    {
      "name": "title",
      "type": "string",
      "description": "Host-supplied title; see the complete working data example below."
    },
    {
      "name": "intro",
      "type": "string",
      "description": "Host-supplied intro; see the complete working data example below."
    },
    {
      "name": "groups",
      "type": "Array<{ label: string; items: Array<string> }>",
      "description": "Host-supplied groups; see the complete working data example below."
    },
    {
      "name": "note",
      "type": "string",
      "description": "Host-supplied note; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"boundaryReview\",\n  \"anchor\": \"review\",\n  \"railLabel\": \"Review checklist\",\n  \"scene\": \"permission-orbit\",\n  \"minHeight\": 640,\n  \"eyebrow\": \"Design checklist\",\n  \"title\": \"Questions for an implementation review.\",\n  \"intro\": \"Work through them for a system you are building. These are review prompts: their presence here does not assert that any particular product has passed them.\",\n  \"groups\": [\n    {\n      \"label\": \"Access\",\n      \"items\": [\n        \"Is authorization enforced at the service boundary?\",\n        \"Are privileged roles and elevation paths explicit?\",\n        \"Can access be revoked without relying on interface state?\"\n      ]\n    },\n    {\n      \"label\": \"Data\",\n      \"items\": [\n        \"Does each record have a defined owner?\",\n        \"Are reads scoped before data reaches a client?\",\n        \"Are retention and deletion requirements documented?\"\n      ]\n    },\n    {\n      \"label\": \"Operations\",\n      \"items\": [\n        \"Are sensitive actions traceable to an actor and time?\",\n        \"Are secrets kept outside published source and client bundles?\",\n        \"Can the system recover safely from a failed change?\"\n      ]\n    }\n  ],\n  \"note\": \"A thinking aid. It does not assess any real system, and nothing you tick is stored or sent.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"boundaryReview\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
