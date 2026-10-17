/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The hero object of a guide: its drawing, large. It draws itself in once, and again whenever you point at it.",
  "props": [
    {
      "name": "art",
      "type": "string",
      "description": "Host-supplied art; see the complete working data example below."
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
      "code": "import { PageHero } from 'hanoryx-components/page';\n<PageHero hero={{\n  \"scene\": \"trigger-action-pulse\",\n  \"intensity\": \"hero\",\n  \"eyebrow\": \"Insights / Reliability\",\n  \"title\": \"Three ways to start work, and who decides when.\",\n  \"intro\": \"A clock, a pile of jobs, or something that happened: each of these can start the same piece of work, and each fails in its own way. This guide compares them on a burst of jobs you can resize, then sets out how to choose.\",\n  \"code\": \"INS.05\",\n  \"status\": \"GUIDE · AUTOMATION\",\n  \"actions\": [\n    {\n      \"label\": \"Compare them\",\n      \"to\": \"/insights/triggers#try\"\n    },\n    {\n      \"label\": \"Read the guide\",\n      \"to\": \"/insights/triggers#guide\",\n      \"variant\": \"outline\"\n    }\n  ],\n  \"aside\": {\n    \"kind\": \"articleArt\",\n    \"art\": \"lanes\",\n    \"caption\": \"Three lanes, three kinds of starting gun.\"\n  }\n}} />"
    }
  ],
  "notes": [
    "Registered as hero.aside, kind=\"articleArt\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
