/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "An orbit-shaped site navigator. Four routes circle a brand core; the whole object leans toward the pointer; hovering or focusing a node freezes the orbit and the core reads out where it leads. Touch simply taps through.",
  "props": [],
  "examples": [
    {
      "title": "Compose through hero.aside",
      "code": "import { PageHero } from 'hanoryx-components/page';\n<PageHero hero={{\n  \"scene\": \"home-core\",\n  \"intensity\": \"hero\",\n  \"eyebrow\": \"Hanoryx Systems / Live\",\n  \"title\": \"Software systems, made visible.\",\n  \"intro\": \"We build online systems, platforms and interfaces. Explore the work, the systems behind it, and the team that builds them.\",\n  \"code\": \"SYS.CORE\",\n  \"status\": \"LIVE\",\n  \"actions\": [\n    {\n      \"label\": \"Explore selected work\",\n      \"to\": \"/work\"\n    },\n    {\n      \"label\": \"Play system sequence\",\n      \"action\": \"system-synthesis\",\n      \"variant\": \"outline\"\n    }\n  ],\n  \"aside\": {\n    \"kind\": \"orbitNav\"\n  }\n}} />"
    }
  ],
  "notes": [
    "Registered as hero.aside, kind=\"orbitNav\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
