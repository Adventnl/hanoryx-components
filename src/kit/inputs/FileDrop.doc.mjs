/* Documentation for FileDrop. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "FileDrop",
  "area": "kit",
  "family": "inputs",
  "summary": "A drop zone that is also a file button: drag files onto it, or press it and choose. It lists what was picked and uploads nothing itself.",
  "props": [
    {
      "name": "label",
      "description": "The two lines inside the zone."
    },
    {
      "name": "hint",
      "description": "The two lines inside the zone."
    },
    {
      "name": "accept",
      "type": "string",
      "description": "File types, as the input’s accept attribute."
    },
    {
      "name": "multiple",
      "type": "boolean",
      "default": "true",
      "description": "Allow several files."
    },
    {
      "name": "onFiles",
      "type": "function",
      "description": "Called with an array of File objects."
    }
  ],
  "keyboard": [
    {
      "key": "Enter / Space",
      "does": "Open the file picker (the real input sits inside the zone)."
    }
  ],
  "notes": [
    "The list of chosen files is a polite live region.",
    "Dragging gives a visual cue; the picker is always there for people who cannot or do not drag."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<FileDrop label=\"Choose files\" accept=\".csv\" onFiles={(files) => read(files)} />"
    }
  ]
};
