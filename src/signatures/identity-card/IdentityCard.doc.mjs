/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Hero object for the Company page: a card that leans toward the pointer and turns over on click / Enter / Space. Front: the mark and status. Back: the company and its development team, each one a link.",
  "props": [
    {
      "name": "back",
      "type": "Array<{ label: string; line: string; to: string }>",
      "description": "Host-supplied back; see the complete working data example below."
    },
    {
      "name": "hint",
      "type": "string",
      "description": "Host-supplied hint; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through hero.aside",
      "code": "import { PageHero } from 'hanoryx-components/page';\n<PageHero hero={{\n  \"scene\": \"network-constellation\",\n  \"intensity\": \"hero\",\n  \"eyebrow\": \"Company / Overview\",\n  \"title\": \"The company behind the systems.\",\n  \"intro\": \"Hanoryx Systems designs and builds online systems, software platforms and the interfaces people use to work in them. Hanoryx North is its development team.\",\n  \"code\": \"CMP.00\",\n  \"status\": \"LIVE\",\n  \"actions\": [\n    {\n      \"label\": \"Selected work\",\n      \"to\": \"/work\"\n    },\n    {\n      \"label\": \"How we decide\",\n      \"to\": \"/company/principles\",\n      \"variant\": \"outline\"\n    }\n  ],\n  \"aside\": {\n    \"kind\": \"identityCard\",\n    \"hint\": \"Turn the card over\",\n    \"back\": [\n      {\n        \"label\": \"Principles\",\n        \"line\": \"How decisions get made\",\n        \"to\": \"/company/principles\"\n      },\n      {\n        \"label\": \"Security approach\",\n        \"line\": \"Starting at the boundary\",\n        \"to\": \"/company/security\"\n      },\n      {\n        \"label\": \"Timeline\",\n        \"line\": \"The company, told in phases\",\n        \"to\": \"/company/timeline\"\n      },\n      {\n        \"label\": \"Careers\",\n        \"line\": \"The areas of work\",\n        \"to\": \"/company/careers\"\n      },\n      {\n        \"label\": \"Hanoryx North\",\n        \"line\": \"The development team\",\n        \"to\": \"/north\"\n      }\n    ]\n  }\n}} />"
    }
  ],
  "notes": [
    "Registered as hero.aside, kind=\"identityCard\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
