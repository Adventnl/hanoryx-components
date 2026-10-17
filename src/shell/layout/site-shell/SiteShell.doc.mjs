/* Documentation for SiteShell. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "SiteShell",
  "area": "shell",
  "family": "layout",
  "summary": "The frame around every page: skip link, navbar, mobile menu, footer, search, shortcuts, cursor, film-grain and scanline veils, route transitions and the boot intro. Wrap the routes in it once.",
  "keywords": [
    "layout",
    "frame",
    "app",
    "root"
  ],
  "props": [
    {
      "name": "children",
      "description": "The routed page."
    }
  ],
  "usage": {
    "bestPractices": [
      {
        "do": true,
        "text": "Render it once, inside a router and `HanoryxProvider`, around your routes."
      },
      {
        "do": false,
        "text": "Nest it, or use it for an embedded widget — it fixes elements to the viewport and locks scroll during the intro."
      }
    ]
  },
  "sizing": {
    "rules": [
      "Fills the viewport. The content column is `100%` wide; pages add their own `.container`. The navbar is fixed, `--nav-h` (72px) tall."
    ]
  },
  "notes": [
    "The boot intro shows once per browser session; set `sessionStorage[\"hnx.boot.complete\"] = \"1\"` to skip it (embeds, tests).",
    "The page cannot scroll while the intro is mounted."
  ],
  "related": [
    "HanoryxProvider",
    "PageTemplate",
    "AdvancedNavbar",
    "Footer"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<BrowserRouter>\n  <HanoryxProvider>\n    <SiteShell><AppRoutes /></SiteShell>\n  </HanoryxProvider>\n</BrowserRouter>"
    }
  ]
};
