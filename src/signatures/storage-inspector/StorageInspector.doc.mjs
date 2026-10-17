/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A live look at what this site has stored in YOUR browser, read straight from cookies, local storage and session storage — not a description of them. Items with the site's own prefix are explained;",
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
      "name": "known",
      "type": "Array<{ key: string; purpose: string }>",
      "description": "Host-supplied known; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"storageInspector\",\n  \"anchor\": \"inspector\",\n  \"railLabel\": \"The live list\",\n  \"scene\": \"architectural-grid\",\n  \"minHeight\": 560,\n  \"eyebrow\": \"The live list\",\n  \"title\": \"Look in your own browser.\",\n  \"intro\": \"Cookies, local storage and session storage, read as you watch. Press START on the intro or run a search elsewhere, come back, and look again.\",\n  \"known\": [\n    {\n      \"key\": \"hnx.boot.complete\",\n      \"purpose\": \"Remembers that the intro has played in this tab, so it is not repeated.\"\n    },\n    {\n      \"key\": \"hnx.audio.on\",\n      \"purpose\": \"Remembers whether the music was switched on.\"\n    },\n    {\n      \"key\": \"hnx.search.recent\",\n      \"purpose\": \"The last few pages you opened from the search, so it can offer them first next time.\"\n    }\n  ],\n  \"note\": \"Session storage is cleared by the browser when the tab closes. Nothing listed here is sent to the site or to anyone else.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"storageInspector\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
