export const docs = {
  "origin": "new",
  "summary": "Message state, announce and polite live-region props; render the message in that region.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "Message state, announce and polite live-region props; render the message in that region.",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { useAnnounce } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst { message, announce, liveProps } = useAnnounce();\n// Render message inside an element with liveProps. Call announce('Saved') from an event."
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {
    "useDevWarning": {
      "origin": "new",
      "summary": "Emits a development warning only when the condition and enabled flag are true.",
      "notes": [
        "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
      ],
      "returns": "void",
      "keyboard": [],
      "examples": [
        {
          "title": "Hook contract",
          "code": "import { useDevWarning } from 'hanoryx-components/kit';\n\n// Inside a React component:\nuseDevWarning(invalidConfiguration, 'Missing project id', { enabled: true });"
        }
      ],
      "sizing": {
        "rules": []
      }
    }
  }
};
