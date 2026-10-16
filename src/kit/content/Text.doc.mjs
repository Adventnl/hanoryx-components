/* Documentation for Text. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Text",
  "area": "kit",
  "family": "content",
  "origin": "new",
  "summary": "Text in one of the three voices: body, lead, small, caption, or the mono uppercase label. Tone is an opacity of white (strong, default, dim) or red. New in this library.",
  "keywords": [
    "paragraph",
    "body",
    "label",
    "caption",
    "type"
  ],
  "props": [
    {
      "name": "variant",
      "type": "'body' | 'lead' | 'small' | 'caption' | 'label'",
      "default": "'body'"
    },
    {
      "name": "tone",
      "type": "'default' | 'strong' | 'dim' | 'red'",
      "default": "'default'"
    },
    {
      "name": "measure",
      "type": "boolean",
      "default": "false",
      "description": "Cap the line at 62ch."
    },
    {
      "name": "as",
      "description": "`p` by default, `span` for `label`."
    }
  ],
  "usage": {
    "bestPractices": [
      {
        "do": true,
        "text": "Use `measure` for any paragraph wider than a column."
      },
      {
        "do": false,
        "text": "Use `dim` for anything a reader needs: 50 % white is for captions."
      }
    ]
  },
  "sizing": {
    "rules": [
      "Block-level (`label` is inline)."
    ]
  },
  "related": [
    "Heading",
    "Prose"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<Text variant=\"lead\" measure>The sentence under a title.</Text>"
    }
  ]
};
