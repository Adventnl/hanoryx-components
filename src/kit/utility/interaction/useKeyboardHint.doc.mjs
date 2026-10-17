export const docs = {
  "origin": "new",
  "summary": "Whether a fine, hover-capable pointer is available for showing desktop keyboard hints.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "Whether a fine, hover-capable pointer is available for showing desktop keyboard hints.",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { useKeyboardHint } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst showKeyboardHint = useKeyboardHint();"
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {
    "useIndicatorFocusRing": {
      "origin": "new",
      "summary": "Focus state and focus/blur bindings for a host-rendered indicator.",
      "notes": [
        "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
      ],
      "returns": "Focus state and focus/blur bindings for a host-rendered indicator.",
      "keyboard": [],
      "examples": [
        {
          "title": "Hook contract",
          "code": "import { useIndicatorFocusRing } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst { focused, focusProps } = useIndicatorFocusRing();"
        }
      ],
      "sizing": {
        "rules": []
      }
    },
    "useInputContainer": {
      "origin": "new",
      "summary": "Invalid and disabled data attributes for a styled input group.",
      "notes": [
        "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
      ],
      "returns": "Invalid and disabled data attributes for a styled input group.",
      "keyboard": [],
      "examples": [
        {
          "title": "Hook contract",
          "code": "import { useInputContainer } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst groupProps = useInputContainer({ invalid: false, disabled: false });"
        }
      ],
      "sizing": {
        "rules": []
      }
    },
    "useInputStatusIcon": {
      "origin": "new",
      "summary": "A textual input-status descriptor for error, success or idle state.",
      "notes": [
        "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
      ],
      "returns": "A textual input-status descriptor for error, success or idle state.",
      "keyboard": [],
      "examples": [
        {
          "title": "Hook contract",
          "code": "import { useInputStatusIcon } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst { status, label } = useInputStatusIcon({ success: true });"
        }
      ],
      "sizing": {
        "rules": []
      }
    },
    "useImageMode": {
      "origin": "new",
      "summary": "Image or fallback mode derived from the presence of a source.",
      "notes": [
        "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
      ],
      "returns": "Image or fallback mode derived from the presence of a source.",
      "keyboard": [],
      "examples": [
        {
          "title": "Hook contract",
          "code": "import { useImageMode } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst mode = useImageMode({ src: imageUrl, fallback: 'placeholder' });"
        }
      ],
      "sizing": {
        "rules": []
      }
    }
  }
};
