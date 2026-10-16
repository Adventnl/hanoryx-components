/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Live numbers from THIS page on THIS device: frames per second, how many background scenes are actually running (against the cap), how many animation loops are subscribed and the current quality tier.",
  "props": [
    {
      "name": "framed",
      "type": "boolean",
      "description": "Host-supplied framed; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through hero.aside",
      "code": "import { PageHero } from 'hanoryx-components/page';\n<PageHero hero={{\n  \"scene\": \"network-constellation\",\n  \"intensity\": \"hero\",\n  \"eyebrow\": \"Development / Site engineering\",\n  \"title\": \"Engineering, visible in the system.\",\n  \"intro\": \"This website is a working example: a scene registry, a shared animation scheduler, a quality budget and route-level code splitting. The panel on the right is live.\",\n  \"code\": \"ENG.01\",\n  \"status\": \"IMPLEMENTED HERE\",\n  \"actions\": [\n    {\n      \"label\": \"Explore the lab\",\n      \"to\": \"/lab\"\n    },\n    {\n      \"label\": \"Motion systems\",\n      \"to\": \"/north/motion-systems\",\n      \"variant\": \"outline\"\n    }\n  ],\n  \"aside\": {\n    \"kind\": \"liveBudget\",\n    \"framed\": true\n  }\n}} />"
    }
  ],
  "notes": [
    "Registered as hero.aside, kind=\"liveBudget\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
