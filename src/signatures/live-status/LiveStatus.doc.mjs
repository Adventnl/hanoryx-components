/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Not a status page for the company — a status page for YOUR visit.",
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
      "name": "note",
      "type": "string",
      "description": "Host-supplied note; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"liveStatus\",\n  \"anchor\": \"board\",\n  \"railLabel\": \"The board\",\n  \"scene\": \"architectural-grid\",\n  \"minHeight\": 760,\n  \"eyebrow\": \"The board\",\n  \"title\": \"Measured on your device, right now.\",\n  \"intro\": \"It starts sampling when it scrolls into view and stops when it leaves.\",\n  \"note\": \"Every figure is measured by your browser on your device. It describes this visit and nothing else: not the site’s availability for anyone else, not the company’s systems. The only request the page ever makes is the optional connection test, and it goes to the site’s own host.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"liveStatus\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
