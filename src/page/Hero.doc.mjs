/* Documentation for PageHero. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "PageHero",
  "area": "page",
  "family": "template",
  "summary": "The scene-backed full-screen hero: a pointer-reactive headline, an intro, actions and — when `hero.aside` names a signature — an interactive object in the right half.",
  "props": [
    {
      "name": "hero",
      "type": "{ scene, intensity, eyebrow, title, intro, code, status, actions[], aside }",
      "required": true
    },
    {
      "name": "accent",
      "description": "Page accent colour."
    }
  ],
  "sizing": {
    "rules": [
      "Full-viewport stage (`min-height: 100svh`), content vertically centred. The aside takes the right half on desktop and stacks under 900px."
    ]
  },
  "notes": [
    "`hero.actions` are `[{ label, to|href, variant }]`. `hero.aside` is `{ kind, …props }` where `kind` is a signature registered as an aside (see Signatures)."
  ],
  "related": [
    "PageTemplate",
    "HeroTitle"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<PageHero accent=\"#ff3333\" hero={{ scene: 'polar-radar', eyebrow: 'Systems', title: 'Operational platforms.', intro: 'What we build.' }} />"
    }
  ]
};
