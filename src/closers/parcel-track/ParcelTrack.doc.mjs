/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A tracking line for a report: four stations, a parcel that travels to the one you choose, and who handles that stage. No timings are promised or implied — only the order things happen in.",
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
      "name": "stages",
      "type": "Array<{ id: string; label: string; line: string; who: string }>",
      "description": "Host-supplied stages; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"parcelTrack\",\n  \"scene\": \"workflow-river\",\n  \"tag\": \"End of complaints\",\n  \"minHeight\": 560,\n  \"title\": \"Follow a report through.\",\n  \"lede\": \"Four stages, no promises about how long each takes. Step through to see what happens at each.\",\n  \"stages\": [\n    {\n      \"id\": \"received\",\n      \"label\": \"Received\",\n      \"line\": \"It lands in the company’s mailbox like any email.\",\n      \"who\": \"Automatic\"\n    },\n    {\n      \"id\": \"read\",\n      \"label\": \"Read\",\n      \"line\": \"Someone reads it and, if it describes a fault, tries to reproduce it.\",\n      \"who\": \"A person at the company\"\n    },\n    {\n      \"id\": \"answered\",\n      \"label\": \"Answered\",\n      \"line\": \"You are told what was found and what will change, or why nothing will.\",\n      \"who\": \"A person at the company\"\n    },\n    {\n      \"id\": \"followed\",\n      \"label\": \"Followed up\",\n      \"line\": \"The fix goes into the site, and the accessibility statement or documents are updated if they need it.\",\n      \"who\": \"The development team\"\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Accessibility statement\",\n      \"to\": \"/legal/accessibility\"\n    },\n    {\n      \"label\": \"Security disclosure\",\n      \"to\": \"/trust/disclosure\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"parcelTrack\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
