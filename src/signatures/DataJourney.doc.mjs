/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "\"What leaves your browser?\" Choose something you might do on this site and the diagram shows which connections are made — and which are not. Every statement here describes what the site's own code does;",
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
      "name": "actions",
      "type": "Array<{ id: string; label: string; summary: string; reach: Array<string>; sends: Array<object>; stays: Array<string> }>",
      "description": "Host-supplied actions; see the complete working data example below."
    },
    {
      "name": "dests",
      "type": "Array<{ id: string; title: string; line: string; glyph: string }>",
      "description": "Host-supplied dests; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"dataJourney\",\n  \"anchor\": \"journey\",\n  \"railLabel\": \"What leaves your browser\",\n  \"scene\": \"architectural-grid\",\n  \"minHeight\": 640,\n  \"eyebrow\": \"What leaves your browser\",\n  \"title\": \"Pick something to do.\",\n  \"intro\": \"The diagram shows which connections are made when you do it, and which are not.\",\n  \"dests\": [\n    {\n      \"id\": \"site\",\n      \"title\": \"This site\",\n      \"line\": \"Where the page comes from\",\n      \"glyph\": \"cube\"\n    },\n    {\n      \"id\": \"fonts\",\n      \"title\": \"Google Fonts\",\n      \"line\": \"Where the typefaces come from\",\n      \"glyph\": \"ruler\"\n    },\n    {\n      \"id\": \"mail\",\n      \"title\": \"Your mail app\",\n      \"line\": \"On your own device\",\n      \"glyph\": \"doc\"\n    }\n  ],\n  \"actions\": [\n    {\n      \"id\": \"open\",\n      \"label\": \"Open any page\",\n      \"summary\": \"Your browser asks this site for the page and its files, and asks Google Fonts for the typefaces.\",\n      \"reach\": [\n        \"site\",\n        \"fonts\"\n      ],\n      \"sends\": [\n        {\n          \"to\": \"site\",\n          \"what\": \"Page files: markup, scripts, styles and images.\"\n        },\n        {\n          \"to\": \"fonts\",\n          \"what\": \"Font files for the three typefaces.\"\n        }\n      ],\n      \"stays\": [\n        \"Whether the intro has played, so it is not repeated in this tab.\"\n      ]\n    },\n    {\n      \"id\": \"search\",\n      \"label\": \"Search the site\",\n      \"summary\": \"Search runs in your browser against page text that is already loaded. Nothing you type is sent anywhere.\",\n      \"reach\": [],\n      \"sends\": [],\n      \"stays\": [\n        \"The last few pages you opened from the search, so it can offer them first next time.\"\n      ]\n    },\n    {\n      \"id\": \"music\",\n      \"label\": \"Press START (music)\",\n      \"summary\": \"The intro track is a file served by this site. Whether the music is on is remembered for the tab.\",\n      \"reach\": [\n        \"site\"\n      ],\n      \"sends\": [\n        {\n          \"to\": \"site\",\n          \"what\": \"The music file.\"\n        }\n      ],\n      \"stays\": [\n        \"Whether the music is on or off.\"\n      ]\n    },\n    {\n      \"id\": \"write\",\n      \"label\": \"Write on the contact page\",\n      \"summary\": \"What you type lives only in the page while you type it. There is no server behind the form.\",\n      \"reach\": [],\n      \"sends\": [],\n      \"stays\": [\n        \"What you type, in the page’s memory only. It is gone when you leave.\"\n      ]\n    },\n    {\n      \"id\": \"mail\",\n      \"label\": \"Open it in your mail app\",\n      \"summary\": \"The page hands your subject and message to your own mail app through a mail link. Your mail app sends it, not this site.\",\n      \"reach\": [\n        \"mail\"\n      ],\n      \"sends\": [\n        {\n          \"to\": \"mail\",\n          \"what\": \"Your subject and message, passed to the app on your device.\"\n        }\n      ],\n      \"stays\": []\n    }\n  ],\n  \"note\": \"Accurate to the site’s code at the time of writing. Your browser, your network and the service that delivers the site’s files have practices of their own, which this page does not speak for.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"dataJourney\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
