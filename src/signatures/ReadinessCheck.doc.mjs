/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Twenty questions to ask before something goes live, in five groups. Answer Yes, Partly, No or Not applicable; the gaps come back as a list to act on, which can be copied or downloaded. Nothing is kept once you leave.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"readinessCheck\",\n  \"anchor\": \"tool\",\n  \"railLabel\": \"The check\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 1000,\n  \"eyebrow\": \"The check\",\n  \"title\": \"Twenty honest answers.\",\n  \"intro\": \"Choose Yes, Partly, No or Not applicable for each question. Tap the same answer again to unset it. Download or copy the result when you are done.\",\n  \"note\": \"A starting point for a conversation, not a certification. A high score does not mean something is safe, and a low one does not mean it is doomed. Nothing you choose here is stored.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"readinessCheck\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
