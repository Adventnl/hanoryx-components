/* Documentation for TagInput. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "TagInput",
  "area": "kit",
  "family": "inputs",
  "summary": "Type a word, press Enter or a comma and it becomes a tag. Each tag has its own remove button, and adding or removing is announced.",
  "props": [
    {
      "name": "value",
      "description": "onChange receives the new list."
    },
    {
      "name": "defaultValue",
      "description": "onChange receives the new list."
    },
    {
      "name": "onChange",
      "description": "onChange receives the new list."
    },
    {
      "name": "max",
      "type": "number",
      "default": "8",
      "description": "The most tags; the box is disabled once reached."
    },
    {
      "name": "placeholder",
      "type": "string",
      "default": "\"Add a tag…\"",
      "description": "Shown while there is room."
    }
  ],
  "keyboard": [
    {
      "key": "Enter / ,",
      "does": "Turn what you typed into a tag."
    },
    {
      "key": "Backspace",
      "does": "In an empty box, takes the last tag back."
    },
    {
      "key": "Tab",
      "does": "Moves through each remove button."
    }
  ],
  "notes": [
    "Duplicates (ignoring case) are refused with a spoken message.",
    "Leaving the box with text in it adds the tag rather than losing the text."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<TagInput label=\"Topics\" value={tags} onChange={setTags} max={6} />"
    }
  ]
};
