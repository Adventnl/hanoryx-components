/* Documentation for ConfirmDialog. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "ConfirmDialog",
  "area": "kit",
  "family": "overlays",
  "summary": "“Are you sure?” done properly: the title says what will happen, the buttons say what they do, and for something that cannot be undone the safe choice has focus.",
  "props": [
    {
      "name": "title",
      "description": "What will happen."
    },
    {
      "name": "children",
      "description": "What will happen."
    },
    {
      "name": "confirmLabel",
      "description": "Say what the buttons do."
    },
    {
      "name": "cancelLabel",
      "description": "Say what the buttons do."
    },
    {
      "name": "danger",
      "type": "boolean",
      "default": "false",
      "description": "Red confirm button; focus starts on Cancel."
    },
    {
      "name": "onConfirm",
      "description": "Both required."
    },
    {
      "name": "onCancel",
      "description": "Both required."
    }
  ],
  "keyboard": [
    {
      "key": "Tab",
      "does": "Between the two buttons."
    },
    {
      "key": "Esc",
      "does": "Same as Cancel."
    }
  ],
  "notes": [
    "Avoid “OK” and “Yes”: a button’s label should still make sense out of context."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<ConfirmDialog open={open} title=\"Delete this draft?\" confirmLabel=\"Delete the draft\" cancelLabel=\"Keep it\" danger onConfirm={remove} onCancel={close}>It cannot be recovered.</ConfirmDialog>"
    }
  ]
};
