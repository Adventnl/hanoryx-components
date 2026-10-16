/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A departure board for the careers hero. Two fixed rows state the facts — nothing is listed, introductions are welcome — and a third row flips through the areas of work. Click the third row to flip to the next area yourself.",
  "props": [
    {
      "name": "rows",
      "type": "Array<{ label: string; value: string }>",
      "description": "Host-supplied rows; see the complete working data example below."
    },
    {
      "name": "cycle",
      "type": "{ label: string; values: Array<string> }",
      "description": "Host-supplied cycle; see the complete working data example below."
    },
    {
      "name": "caption",
      "type": "string",
      "description": "Host-supplied caption; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through hero.aside",
      "code": "import { PageHero } from 'hanoryx-components/page';\n<PageHero hero={{\n  \"scene\": \"glyph-field\",\n  \"intensity\": \"hero\",\n  \"eyebrow\": \"Company / Careers\",\n  \"title\": \"People who like hard systems.\",\n  \"intro\": \"No roles are listed right now. This page describes the kinds of work the company does, for anyone who would like to introduce themselves.\",\n  \"code\": \"CMP.04\",\n  \"status\": \"INTRODUCTIONS\",\n  \"actions\": [\n    {\n      \"label\": \"Introduce yourself\",\n      \"to\": \"/contact?type=careers\"\n    }\n  ],\n  \"aside\": {\n    \"kind\": \"splitFlap\",\n    \"rows\": [\n      {\n        \"label\": \"Roles listed\",\n        \"value\": \"None\"\n      },\n      {\n        \"label\": \"Introductions\",\n        \"value\": \"Welcome\"\n      }\n    ],\n    \"cycle\": {\n      \"label\": \"Areas of work\",\n      \"values\": [\n        \"Interfaces\",\n        \"Systems\",\n        \"Data at scale\",\n        \"Engines\",\n        \"Automation\"\n      ]\n    },\n    \"caption\": \"Press the last row to flip to the next area.\"\n  }\n}} />"
    }
  ],
  "notes": [
    "Registered as hero.aside, kind=\"splitFlap\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
