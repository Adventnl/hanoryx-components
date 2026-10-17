/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A long-form document reader — for legal text, policies, handbooks and articles.",
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
      "name": "variant",
      "description": "Optional variant. Refer to the source defaults and working composition."
    },
    {
      "name": "version",
      "type": "string",
      "description": "Host-supplied version; see the complete working data example below."
    },
    {
      "name": "summaryLabel",
      "description": "Optional summaryLabel. Refer to the source defaults and working composition."
    },
    {
      "name": "summary",
      "type": "Array<string>",
      "description": "Host-supplied summary; see the complete working data example below."
    },
    {
      "name": "meta",
      "type": "Array<{ k: string; v: string }>",
      "description": "Host-supplied meta; see the complete working data example below."
    },
    {
      "name": "sections",
      "type": "Array<{ id: string; title: string; plain: string; body: Array<string> }>",
      "description": "Host-supplied sections; see the complete working data example below."
    },
    {
      "name": "terms",
      "type": "{ cookie: string; session storage: string; local storage: string; IP address: string; request log: string; third party: string; mail link: string; static site: string; Google Fonts: string; assistive technology: string; screen reader: string; reduced motion: string; WCAG: string; axe-core: string; canvas: string; personal data: string; hosting: string; retention period: string; cache: string; browser history: string; VPN: string; robots file: string; user-agent: string; redirect: string; client-rendered: string; landmark: string; focus ring: string; contrast ratio: string; screen magnifier: string; voice control: string; switch control: string; ARIA: string; reflow: string; data-protection authority: string; infringement: string; licence: string; warranty: string; open source: string; browser tool: string }",
      "description": "Host-supplied terms; see the complete working data example below."
    },
    {
      "name": "note",
      "type": "string",
      "description": "Host-supplied note; see the complete working data example below."
    },
    {
      "name": "endLabel",
      "description": "Optional endLabel. Refer to the source defaults and working composition."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"document\",\n  \"anchor\": \"policy\",\n  \"railLabel\": \"The policy\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 900,\n  \"eyebrow\": \"The policy\",\n  \"title\": \"Security disclosure policy.\",\n  \"intro\": \"Scope, how to report, what to expect, and what this policy cannot promise.\",\n  \"version\": \"Draft 1.0\",\n  \"summary\": [\n    \"Report weaknesses in **this website** through the contact page, and give the company a fair chance to fix them before you share the details.\",\n    \"Show the problem; **do not go further** than you need to, and do not touch other people’s data.\",\n    \"This policy is not a legal permission. It **cannot speak for** the hosting platform or any other third party.\"\n  ],\n  \"meta\": [\n    {\n      \"k\": \"Applies to\",\n      \"v\": \"This website\"\n    },\n    {\n      \"k\": \"Status\",\n      \"v\": \"Plain-language draft\"\n    }\n  ],\n  \"terms\": {\n    \"cookie\": \"A small note a website asks your browser to keep and send back with later requests. This site’s own code sets none.\",\n    \"session storage\": \"A small store in your browser that belongs to one tab. The browser clears it when the tab closes.\",\n    \"local storage\": \"A store in your browser that stays until it is cleared. This site does not use it.\",\n    \"IP address\": \"The network address your connection appears to come from. Every website you visit receives it, because it is how a reply finds its way back.\",\n    \"request log\": \"A record a web server keeps of the requests it receives: usually the time, the address asked for and the sender’s IP address.\",\n    \"third party\": \"Someone other than you and the company: here, the services your browser is asked to contact so that the page can be shown.\",\n    \"mail link\": \"A link that opens your own email app with a message already started. Your email app, not this site, sends it.\",\n    \"static site\": \"A website made of ready-made files. It has no database and no accounts; the browser does the work of showing it.\",\n    \"Google Fonts\": \"A service that serves typefaces to websites. Using it means your browser contacts Google’s font servers.\",\n    \"assistive technology\": \"Software or devices that help people use a computer, such as screen readers, switch controls or magnifiers.\",\n    \"screen reader\": \"Software that reads what is on screen aloud, or shows it on a braille display.\",\n    \"reduced motion\": \"A setting in your device that asks websites to use less animation.\",\n    \"WCAG\": \"The Web Content Accessibility Guidelines: a widely used international standard for accessible web content.\",\n    \"axe-core\": \"An open-source engine that tests a page against accessibility rules automatically.\",\n    \"canvas\": \"A part of a web page that a script draws on. The animated backgrounds on this site are canvases.\",\n    \"personal data\": \"Information that identifies you or could be used to identify you, such as your name, your email address or your IP address.\",\n    \"hosting\": \"The service that stores the site’s files and delivers them to visitors’ browsers.\",\n    \"retention period\": \"How long a piece of information is kept before it is deleted.\",\n    \"cache\": \"A copy of something your browser keeps so it does not have to fetch it again, such as a font file or a script. It is the browser’s own store, outside the site’s code.\",\n    \"browser history\": \"The list of pages your browser remembers you visited. It is kept by your browser on your device, not by the site.\",\n    \"VPN\": \"A service that sends your connection through another network, so websites see that network’s address instead of yours.\",\n    \"robots file\": \"A plain file at the root of a site (robots.txt) that tells automated visitors which parts to leave alone.\",\n    \"user-agent\": \"The short description of itself that a browser or tool sends with every request, such as its name and version.\",\n    \"redirect\": \"An instruction that sends a visitor from one address to another.\",\n    \"client-rendered\": \"A site whose pages are assembled by JavaScript in your browser rather than delivered as finished pages.\",\n    \"landmark\": \"A named region of a page, such as the header, the navigation or the main content, that assistive technology can jump between.\",\n    \"focus ring\": \"The outline that shows which control the keyboard is on.\",\n    \"contrast ratio\": \"How much lighter or darker text is than its background, as a number from 1:1 to 21:1. Higher is easier to read.\",\n    \"screen magnifier\": \"Software that enlarges part of the screen.\",\n    \"voice control\": \"Software that lets people operate a computer by speaking, often by saying the names of the buttons and links they can see.\",\n    \"switch control\": \"A way of operating a computer with one or two buttons, for people who cannot use a keyboard or a pointer.\",\n    \"ARIA\": \"A set of attributes that tell assistive technology the role and state of page elements when plain HTML cannot.\",\n    \"reflow\": \"Text and layout rearranging themselves to fit a narrow window or a large text size, instead of scrolling sideways.\",\n    \"data-protection authority\": \"A public body in a country that oversees how personal data is handled and hears complaints about it.\",\n    \"infringement\": \"Using something protected by copyright or a trademark in a way the owner has not allowed and the law does not permit.\",\n    \"licence\": \"Permission, with conditions, to use something that belongs to someone else.\",\n    \"warranty\": \"A promise that something is as described or will work as stated.\",\n    \"open source\": \"Software whose source code is published under a licence that lets other people use and change it.\",\n    \"browser tool\": \"One of the small utilities in the Resources section, such as the contrast checker. It runs in your browser and sends nothing anywhere.\"\n  },\n  \"sections\": [\n    {\n      \"id\": \"purpose\",\n      \"title\": \"Purpose\",\n      \"plain\": \"To make reporting a problem easy and safe.\",\n      \"body\": [\n        \"This policy tells you how to report a security problem with the website of **Hanoryx Systems**, so that it can be fixed. In this policy, “the company” means Hanoryx Systems and “the site” means this website.\",\n        {\n          \"note\": \"This is a plain-language policy written for this site. It is not legal advice and it has not been reviewed by a lawyer.\",\n          \"tone\": \"warn\",\n          \"label\": \"Please read\"\n        }\n      ]\n    },\n    {\n      \"id\": \"scope\",\n      \"title\": \"What is in scope\",\n      \"plain\": \"The website itself.\",\n      \"body\": [\n        \"The site at its public address, including its pages, scripts, styles and the way it is delivered to your browser.\",\n        {\n          \"list\": [\n            \"Ways to run script of your choosing in another visitor’s browser through the site.\",\n            \"Ways to read or change anything that is not meant to be public.\",\n            \"Mistakes in how the site handles links, redirects or the information in its address.\",\n            \"Anything in the site’s code that sends visitor information somewhere it should not.\"\n          ]\n        }\n      ]\n    },\n    {\n      \"id\": \"out-of-scope\",\n      \"title\": \"What is out of scope\",\n      \"plain\": \"Other people’s systems, and anything that harms visitors.\",\n      \"body\": [\n        {\n          \"list\": [\n            \"The hosting platform, the font service, GitHub, or any other service the site depends on. Report problems with those to their owners.\",\n            \"Attacks that only overload the site or its network (denial of service).\",\n            \"Social engineering of the company’s people, and physical attacks.\",\n            \"Spam, or reports that only say a security header or setting could be stricter, without a way it could be abused.\",\n            \"Findings that depend on a visitor’s own device or browser already being compromised.\"\n          ]\n        }\n      ]\n    },\n    {\n      \"id\": \"how\",\n      \"title\": \"How to report\",\n      \"plain\": \"Use the contact page and say it is a security report.\",\n      \"body\": [\n        \"Use the contact page and choose the topic that fits best, then begin your message with “Security report”. Please include the details listed in a good report: what you found, where, how to see it, what you saw, and that you stopped there.\",\n        \"Please do not post the details publicly, or send them to anyone else, before the company has had a fair chance to fix the problem.\"\n      ]\n    },\n    {\n      \"id\": \"conduct\",\n      \"title\": \"How to test responsibly\",\n      \"plain\": \"Show the problem; stop there.\",\n      \"body\": [\n        {\n          \"list\": [\n            \"Use only your own browser, device and, where one is needed, your own account on a service. The site has no accounts.\",\n            \"Do not access, change or delete anything that belongs to someone else.\",\n            \"Do not run automated scans at a rate that could slow the site for others.\",\n            \"Stop as soon as you have shown there is a problem. Do not look for more.\"\n          ]\n        },\n        \"The acceptable use policy has the general rules.\"\n      ]\n    },\n    {\n      \"id\": \"expect\",\n      \"title\": \"What to expect\",\n      \"plain\": \"A real reading, an answer, and a fix where one is needed.\",\n      \"body\": [\n        {\n          \"steps\": [\n            {\n              \"title\": \"Receipt\",\n              \"body\": \"Your report arrives in the company’s mailbox like any email.\"\n            },\n            {\n              \"title\": \"Assessment\",\n              \"body\": \"Someone reads it and tries to reproduce what you describe.\"\n            },\n            {\n              \"title\": \"Reply\",\n              \"body\": \"You are told what was found and what, if anything, will change.\"\n            },\n            {\n              \"title\": \"Fix\",\n              \"body\": \"Where there is a real problem, the site is changed. The company will tell you when it has been, if you left an address.\"\n            }\n          ]\n        },\n        \"This policy does not promise response times, because the company is not in a position to promise ones it cannot keep.\"\n      ]\n    },\n    {\n      \"id\": \"credit\",\n      \"title\": \"Credit\",\n      \"plain\": \"Thanks, and a name if you want one.\",\n      \"body\": [\n        \"If you would like to be thanked by name for a report that led to a fix, say so in the report. If you would rather not be named, say that. Neither affects how the report is handled. The company does not run a reward programme.\"\n      ]\n    },\n    {\n      \"id\": \"limits\",\n      \"title\": \"What this policy cannot promise\",\n      \"plain\": \"It is not a legal permission.\",\n      \"body\": [\n        \"This policy describes how the company would like to hear about problems. It cannot give you legal permission to do anything the law does not already allow, and it cannot speak for the hosting platform or any other third party whose systems the site depends on.\",\n        \"The company intends to treat people who follow this policy in good faith fairly. That is an intention, not a legal guarantee.\"\n      ]\n    },\n    {\n      \"id\": \"changes\",\n      \"title\": \"Changes\",\n      \"plain\": \"The version on this page is the current one.\",\n      \"body\": [\n        \"This policy may change. The version on this page is the current one.\"\n      ]\n    }\n  ],\n  \"note\": \"A plain-language policy written for this site. It is not legal advice and it has not been reviewed by a lawyer.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"document\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
