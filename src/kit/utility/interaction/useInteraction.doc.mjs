export const docs = {
  "origin": "new",
  "summary": "A callback ref that assigns the same DOM node to supplied function and object refs.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "A callback ref that assigns the same DOM node to supplied function and object refs.",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { useMergedRefs } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst local = useRef(null);\nconst ref = useMergedRefs(local, forwardedRef); // attach ref to the input"
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {
    "useHotkeys": {
      "origin": "new",
      "summary": "Window shortcut bindings with modifier matching and editable-field exclusion by default.",
      "notes": [
        "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
      ],
      "returns": "void",
      "keyboard": [],
      "examples": [
        {
          "title": "Hook contract",
          "code": "import { useHotkeys } from 'hanoryx-components/kit';\n\n// Inside a React component:\nuseHotkeys({ 'mod+shift+y': () => setOpen(true) });"
        }
      ],
      "sizing": {
        "rules": []
      }
    },
    "useLongPress": {
      "origin": "new",
      "summary": "Pointer and keyboard hold bindings with cancellation and unmount cleanup.",
      "notes": [
        "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
      ],
      "returns": "Pointer and keyboard hold bindings with cancellation and unmount cleanup.",
      "keyboard": [],
      "examples": [
        {
          "title": "Hook contract",
          "code": "import { useLongPress } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst pressProps = useLongPress(() => setCount(value => value + 1), { delay: 500 });"
        }
      ],
      "sizing": {
        "rules": []
      }
    },
    "usePressFeedback": {
      "origin": "new",
      "summary": "Pressed state and pointer/keyboard bindings for visual feedback.",
      "notes": [
        "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
      ],
      "returns": "Pressed state and pointer/keyboard bindings for visual feedback.",
      "keyboard": [],
      "examples": [
        {
          "title": "Hook contract",
          "code": "import { usePressFeedback } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst { pressed, pressProps } = usePressFeedback();"
        }
      ],
      "sizing": {
        "rules": []
      }
    },
    "useClickableContainer": {
      "origin": "new",
      "summary": "Button-role keyboard and pointer activation that avoids nested native controls.",
      "notes": [
        "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
      ],
      "returns": "Button-role keyboard and pointer activation that avoids nested native controls.",
      "keyboard": [],
      "examples": [
        {
          "title": "Hook contract",
          "code": "import { useClickableContainer } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst buttonProps = useClickableContainer(() => setOpen(true));"
        }
      ],
      "sizing": {
        "rules": []
      }
    },
    "useInteractiveRole": {
      "origin": "new",
      "summary": "Role, tab stop and disabled semantics for a host-rendered custom control.",
      "notes": [
        "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
      ],
      "returns": "Role, tab stop and disabled semantics for a host-rendered custom control.",
      "keyboard": [],
      "examples": [
        {
          "title": "Hook contract",
          "code": "import { useInteractiveRole } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst roleProps = useInteractiveRole({ role: 'button', disabled: true });"
        }
      ],
      "sizing": {
        "rules": []
      }
    },
    "useMenuPress": {
      "origin": "new",
      "summary": "Click and ArrowDown bindings for a host-owned menu trigger.",
      "notes": [
        "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
      ],
      "returns": "Click and ArrowDown bindings for a host-owned menu trigger.",
      "keyboard": [],
      "examples": [
        {
          "title": "Hook contract",
          "code": "import { useMenuPress } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst triggerProps = useMenuPress(() => setOpen(true));"
        }
      ],
      "sizing": {
        "rules": []
      }
    }
  }
};
