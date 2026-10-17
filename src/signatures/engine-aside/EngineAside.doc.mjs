/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Hero object for YK Engine: a framed miniature viewport that leans toward the pointer. Decoration drawn to evoke an engine viewport — not engine output.",
  "props": [
    {
      "name": "caption",
      "type": "string",
      "description": "Host-supplied caption; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through hero.aside",
      "code": "import { PageHero } from 'hanoryx-components/page';\n<PageHero hero={{\n  \"scene\": \"isometric-infra\",\n  \"intensity\": \"hero\",\n  \"eyebrow\": \"Work / 02 · Primary project\",\n  \"title\": \"A proprietary 2D engine.\",\n  \"intro\": \"YK Engine is a proprietary 2D engine with an editor, a standalone player and project export tooling.\",\n  \"code\": \"WRK.02\",\n  \"status\": \"CASE STUDY\",\n  \"actions\": [\n    {\n      \"label\": \"View the repository\",\n      \"href\": \"https://github.com/Adventnl/YK-Engine\"\n    },\n    {\n      \"label\": \"All work\",\n      \"to\": \"/work\",\n      \"variant\": \"outline\"\n    }\n  ],\n  \"aside\": {\n    \"kind\": \"engineAside\",\n    \"caption\": \"Illustration of an engine viewport\"\n  }\n}} />"
    }
  ],
  "notes": [
    "Registered as hero.aside, kind=\"engineAside\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
