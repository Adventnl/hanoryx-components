/* Documentation for ToastProvider. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "ToastProvider",
  "area": "kit",
  "family": "feedback",
  "summary": "Brief messages in a corner that leave by themselves. Announced politely, never take focus, pause while the pointer or keyboard is on them, and can always be dismissed.",
  "props": [
    {
      "name": "title",
      "description": "The message."
    },
    {
      "name": "body",
      "description": "The message."
    },
    {
      "name": "tone",
      "type": "\"info\" | \"success\" | \"danger\"",
      "default": "\"info\"",
      "description": "Icon and border."
    },
    {
      "name": "duration",
      "type": "number",
      "default": "5000",
      "description": "Milliseconds before it leaves; 0 keeps it until dismissed."
    },
    {
      "name": "max (provider)",
      "type": "number",
      "default": "4",
      "description": "How many show at once; older ones leave first."
    }
  ],
  "keyboard": [
    {
      "key": "Tab",
      "does": "To a toast’s dismiss button; focusing a toast stops its timer."
    }
  ],
  "notes": [
    "A toast is for something that needs no answer. Anything that does is a dialog.",
    "Outside a provider, useToast returns a function that does nothing — so a component that toasts never has to know."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "// once, near the top of the app:\n<ToastProvider>…</ToastProvider>\n\n// anywhere below it:\nconst toast = useToast();\ntoast({ title: 'Copied', body: 'The address is on your clipboard.', tone: 'success' });"
    }
  ]
};
