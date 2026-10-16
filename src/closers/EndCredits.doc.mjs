/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Roll credits for the company: not people, but the disciplines, the work and the parts it is made from. It scrolls only while it is on screen, slows to a stop under the pointer, and is a plain list under reduced motion.",
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
      "name": "credits",
      "type": "Array<{ role: string; names: Array<string> }>",
      "description": "Host-supplied credits; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"endCredits\",\n  \"scene\": \"network-constellation\",\n  \"tag\": \"End of the company overview\",\n  \"minHeight\": 560,\n  \"title\": \"Roll the credits.\",\n  \"lede\": \"Not people: the disciplines, the work and the parts the company is made from.\",\n  \"credits\": [\n    {\n      \"role\": \"A systems company\",\n      \"names\": [\n        \"Hanoryx Systems\"\n      ]\n    },\n    {\n      \"role\": \"Development\",\n      \"names\": [\n        \"Hanoryx North\"\n      ]\n    },\n    {\n      \"role\": \"Architecture\",\n      \"names\": [\n        \"Boundaries\",\n        \"Data models\",\n        \"Orchestration\"\n      ]\n    },\n    {\n      \"role\": \"Interface\",\n      \"names\": [\n        \"Components\",\n        \"Interaction\",\n        \"Motion\"\n      ]\n    },\n    {\n      \"role\": \"Work shown\",\n      \"names\": [\n        \"Musebase\",\n        \"YK Engine\",\n        \"A customer-facing product\",\n        \"An internal data system\"\n      ]\n    },\n    {\n      \"role\": \"Held to\",\n      \"names\": [\n        \"Controlled complexity\",\n        \"Interfaces before noise\",\n        \"Motion with purpose\"\n      ]\n    },\n    {\n      \"role\": \"Set in\",\n      \"names\": [\n        \"Cormorant Garamond\",\n        \"Inter\",\n        \"JetBrains Mono\"\n      ]\n    },\n    {\n      \"role\": \"Built with\",\n      \"names\": [\n        \"React\",\n        \"GSAP\",\n        \"Motion\",\n        \"Lenis\"\n      ]\n    },\n    {\n      \"role\": \"And\",\n      \"names\": [\n        \"Everyone who read this far.\"\n      ]\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"How we work\",\n      \"to\": \"/company/how-we-work\"\n    },\n    {\n      \"label\": \"Principles\",\n      \"to\": \"/company/principles\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"endCredits\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
