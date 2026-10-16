/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Finding one row among millions. Three ways, with the number of steps each takes as the table grows, and then the real thing: the page builds half a million rows in your browser and times each method for you.",
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
      "name": "onward",
      "type": "Array<{ label: string; to: string }>",
      "description": "Host-supplied onward; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through closer block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"lookupRace\",\n  \"anchor\": \"race\",\n  \"scene\": \"data-rain\",\n  \"tag\": \"End of the internal CRM\",\n  \"minHeight\": 720,\n  \"title\": \"Finding one row among millions.\",\n  \"lede\": \"Three ways, with the number of steps each takes as the table grows. Then the real thing: the page builds half a million rows in your browser and times each method for you.\",\n  \"onward\": [\n    {\n      \"label\": \"Data interfaces\",\n      \"to\": \"/systems/data-interfaces\"\n    },\n    {\n      \"label\": \"All work\",\n      \"to\": \"/work\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"lookupRace\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
