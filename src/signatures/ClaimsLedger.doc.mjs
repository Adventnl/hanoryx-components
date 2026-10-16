/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The trust centre's ledger: three columns — what the site does, what it does not claim, and what is still open — each row a disclosure that says how you can check it for yourself and links to the page that proves it.",
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
      "name": "columns",
      "type": "Array<{ id: string; title: string; lede: string; items: Array<object> }>",
      "description": "Host-supplied columns; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"claimsLedger\",\n  \"anchor\": \"ledger\",\n  \"railLabel\": \"The ledger\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 760,\n  \"eyebrow\": \"The ledger\",\n  \"title\": \"Three columns: does, doesn’t claim, still open.\",\n  \"intro\": \"Open any row. It says how you can check it, and links to the page that shows it.\",\n  \"columns\": [\n    {\n      \"id\": \"does\",\n      \"title\": \"What the site does\",\n      \"lede\": \"Things you can verify from your own browser.\",\n      \"items\": [\n        {\n          \"title\": \"Sets no cookies\",\n          \"how\": \"The cookie jar for this site is empty. The cookies and storage page reads it live, and the self-audit below checks it again.\",\n          \"to\": \"/legal/cookies\",\n          \"toLabel\": \"Cookies & storage\"\n        },\n        {\n          \"title\": \"Has no analytics, advertising or tracking scripts\",\n          \"how\": \"Every script on the page is served by the site itself. The self-audit lists any that are not.\",\n          \"to\": \"/trust/third-parties\",\n          \"toLabel\": \"Third-party services\"\n        },\n        {\n          \"title\": \"Keeps no visitor records on a server\",\n          \"how\": \"There are no accounts and no database. The retention schedule lists each thing the site touches and when it goes.\",\n          \"to\": \"/legal/retention\",\n          \"toLabel\": \"Data retention\"\n        },\n        {\n          \"title\": \"Says what it connects to\",\n          \"how\": \"The third-party services page names every host your browser is asked to contact, what it receives, and whether you can avoid it.\",\n          \"to\": \"/trust/third-parties\",\n          \"toLabel\": \"Third-party services\"\n        },\n        {\n          \"title\": \"Respects reduced motion and works from the keyboard\",\n          \"how\": \"Switch on reduced motion in your system and reload, then use Tab, Enter and the arrow keys. The accessibility statement lists what is known to fall short.\",\n          \"to\": \"/legal/accessibility\",\n          \"toLabel\": \"Accessibility statement\"\n        },\n        {\n          \"title\": \"Tests every page for accessibility problems\",\n          \"how\": \"Each page goes through axe-core at a desktop and a phone width before a change is accepted. How the work is checked is described on the quality page.\",\n          \"to\": \"/north/quality\",\n          \"toLabel\": \"How we check the work\"\n        },\n        {\n          \"title\": \"Lists everything it is built with\",\n          \"how\": \"The licences page names every library and typeface, its version and its licence, and can produce a notices file.\",\n          \"to\": \"/trust/licences\",\n          \"toLabel\": \"Licences & notices\"\n        }\n      ]\n    },\n    {\n      \"id\": \"doesnt\",\n      \"title\": \"What it doesn’t claim\",\n      \"lede\": \"Things you might assume, and should not.\",\n      \"items\": [\n        {\n          \"title\": \"Conformance with WCAG or any other standard\",\n          \"how\": \"Automated checks are not an audit. The accessibility statement says so plainly.\",\n          \"to\": \"/legal/accessibility\",\n          \"toLabel\": \"Accessibility statement\"\n        },\n        {\n          \"title\": \"Any security certification or independent audit\",\n          \"how\": \"None is claimed. If one is ever held, it will be named here with who issued it.\",\n          \"to\": \"/company/security\",\n          \"toLabel\": \"Security approach\"\n        },\n        {\n          \"title\": \"A promised uptime or response time\",\n          \"how\": \"The status page measures your own visit and says nothing about availability for anyone else. The complaints procedure promises no response times.\",\n          \"to\": \"/trust/status\",\n          \"toLabel\": \"Live status\"\n        },\n        {\n          \"title\": \"That a lawyer has read the legal documents\",\n          \"how\": \"None has, and each document says so. The legal centre shows where each stands.\",\n          \"to\": \"/legal\",\n          \"toLabel\": \"Legal centre\"\n        },\n        {\n          \"title\": \"Results, clients or outcomes for the company’s work\",\n          \"how\": \"The work is described in general terms. The site names no clients and quotes no measured results.\",\n          \"to\": \"/work\",\n          \"toLabel\": \"Selected work\"\n        }\n      ]\n    },\n    {\n      \"id\": \"open\",\n      \"title\": \"Still open\",\n      \"lede\": \"Work that has not been done yet.\",\n      \"items\": [\n        {\n          \"title\": \"A manual accessibility audit\",\n          \"how\": \"Screen-reader passes, a keyboard-only walk of every demonstration and checks on touch hardware are still to be done.\",\n          \"to\": \"/north/accessibility\",\n          \"toLabel\": \"Accessible by default\"\n        },\n        {\n          \"title\": \"Legal review of the documents\",\n          \"how\": \"The ten documents in the legal centre have been written and checked against the site, not read by a lawyer.\",\n          \"to\": \"/legal\",\n          \"toLabel\": \"Legal centre\"\n        },\n        {\n          \"title\": \"The company’s registered details\",\n          \"how\": \"The terms cannot name the governing law, or the privacy notice a registered address, until those details are published.\",\n          \"to\": \"/legal/terms\",\n          \"toLabel\": \"Terms\"\n        },\n        {\n          \"title\": \"Measurements on real phones\",\n          \"how\": \"Performance numbers so far come from a software-rendered browser. The engineering page measures live on your device instead.\",\n          \"to\": \"/engineering\",\n          \"toLabel\": \"Site engineering\"\n        }\n      ]\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"claimsLedger\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
