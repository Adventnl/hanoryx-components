/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Every service your browser may be asked to contact for this site, one at a time: what it receives, when, whether you can avoid it, and what you would see if you did.",
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
      "name": "services",
      "type": "Array<{ id: string; name: string; hosts: Array<string>; role: string; when: string; receives: Array<string>; avoid: string; avoidNote: string; ifBlocked: string }>",
      "description": "Host-supplied services; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"serviceMap\",\n  \"anchor\": \"map\",\n  \"railLabel\": \"The map\",\n  \"scene\": \"architectural-grid\",\n  \"minHeight\": 640,\n  \"eyebrow\": \"The map\",\n  \"title\": \"Four services, one at a time.\",\n  \"intro\": \"Choose one. The wire to it lights, and the panel says what it needs.\",\n  \"services\": [\n    {\n      \"id\": \"host\",\n      \"name\": \"The site’s host\",\n      \"hosts\": [\n        \"hanoryx.com\"\n      ],\n      \"role\": \"Delivers the page and everything it is made of.\",\n      \"when\": \"Every visit, and every page you open. On the live status page, three tiny requests if you press the test button.\",\n      \"receives\": [\n        \"The address of the file asked for\",\n        \"Your IP address\",\n        \"Your browser’s user-agent and language settings\",\n        \"The referrer, if your browser sends one\"\n      ],\n      \"avoid\": \"No\",\n      \"avoidNote\": \"Not if you want the page: it is where the page comes from. The site is built to be delivered as static files by a hosting platform; at the time of writing its deployment is configured for Cloudflare’s Workers platform.\",\n      \"ifBlocked\": \"Nothing loads.\"\n    },\n    {\n      \"id\": \"fonts\",\n      \"name\": \"Google Fonts\",\n      \"hosts\": [\n        \"fonts.googleapis.com\",\n        \"fonts.gstatic.com\"\n      ],\n      \"role\": \"Delivers the three typefaces the site is set in.\",\n      \"when\": \"When a page first loads in a tab. Your browser may then keep the files in its own cache.\",\n      \"receives\": [\n        \"Which font files were asked for\",\n        \"Your IP address\",\n        \"Your browser’s user-agent\",\n        \"The page that asked for them\"\n      ],\n      \"avoid\": \"Yes\",\n      \"avoidNote\": \"Yes. A content blocker, a browser setting, or a network that blocks the service will stop the request.\",\n      \"ifBlocked\": \"The site is shown in your system’s own serif, sans-serif and monospace typefaces. Everything still works; only the look changes.\",\n      \"fonts\": {\n        \"real\": \"'Cormorant Garamond', 'Times New Roman', serif\",\n        \"fallback\": \"'Times New Roman', serif\"\n      }\n    },\n    {\n      \"id\": \"github\",\n      \"name\": \"GitHub\",\n      \"hosts\": [\n        \"github.com\"\n      ],\n      \"role\": \"Only if you follow the link from the YK Engine page.\",\n      \"when\": \"Only when you click the link. Nothing is contacted until then.\",\n      \"receives\": [\n        \"The page you are going to\",\n        \"Your IP address and user-agent\",\n        \"The referrer, depending on your browser’s settings\"\n      ],\n      \"avoid\": \"Yes\",\n      \"avoidNote\": \"Entirely your choice. The link leaves the site and opens a code repository under GitHub’s own terms.\",\n      \"ifBlocked\": \"The link will not open. Nothing else is affected.\"\n    },\n    {\n      \"id\": \"mail\",\n      \"name\": \"Your email app\",\n      \"hosts\": [\n        \"On your own device\"\n      ],\n      \"role\": \"Used by the contact page to start an email.\",\n      \"when\": \"Only if you choose to send a message from the contact page.\",\n      \"receives\": [\n        \"The subject and text you wrote, handed to your email app by your own device\",\n        \"Nothing is sent by the site itself\"\n      ],\n      \"avoid\": \"Yes\",\n      \"avoidNote\": \"You can copy the address instead and write from wherever you like.\",\n      \"ifBlocked\": \"The button opens nothing; the address can still be copied.\"\n    }\n  ],\n  \"note\": \"This is a description of the site’s code at the time of writing. The services named have practices of their own, which this page cannot speak for.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"serviceMap\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
