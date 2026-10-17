export const docs = {
  "origin": "new",
  "summary": "An attachment or context token with an optional named remove action.",
  "props": [
    {
      "name": "children",
      "type": "ReactNode",
      "description": "Content rendered in this part."
    },
    {
      "name": "onRemove"
    },
    {
      "name": "label",
      "type": "string",
      "description": "Visible or accessible name. Keep it meaningful in the page context."
    }
  ],
  "notes": [
    "New library family. The host owns message history, transport, streaming, attachment storage and tool execution.",
    "Composer input and send parts must be nested inside ChatComposer. Other parts use semantic sections, ordered lists and disclosures.",
    "Supply label when children is not text, so the remove button has a meaningful accessible name."
  ],
  "sizing": {
    "rules": [
      "The chat fills its parent; ChatLayout owns border and padding. Its transcript scrolls after maxHeight (default 32rem).",
      "Transcript and composer parts are measured in a complete conversation context."
    ]
  },
  "keyboard": [
    {
      "key": "Tab / Shift+Tab",
      "does": "Move between composer input, disclosures and buttons."
    },
    {
      "key": "Enter / Space",
      "does": "Activate buttons. Enter in the textarea inserts a newline; Send submits."
    }
  ],
  "examples": [
    {
      "title": "Working composition",
      "code": "import { Chat, ChatMessageList, ChatMessage, ChatMessageBubble, ChatComposer } from 'hanoryx-components/kit';\n\n<Chat>\n  <ChatMessageList>\n    <ChatMessage author=\"Assistant\"><ChatMessageBubble>Ready to build.</ChatMessageBubble></ChatMessage>\n  </ChatMessageList>\n  <ChatComposer onSend={async (text) => { await saveMessage(text); }} />\n</Chat>"
    }
  ],
  "subcomponents": {
    "ChatDictationButton": {
      "origin": "new",
      "summary": "Dictation is supplied by the host so browser support and consent remain explicit.",
      "props": [
        {
          "name": "active"
        },
        {
          "name": "onToggle"
        },
        {
          "name": "disabled",
          "type": "boolean",
          "description": "Disables editing and activation."
        }
      ],
      "notes": [
        "New library family. The host owns message history, transport, streaming, attachment storage and tool execution.",
        "Composer input and send parts must be nested inside ChatComposer. Other parts use semantic sections, ordered lists and disclosures.",
        "Requires a host onToggle callback. This component does not request microphone access or implement speech recognition."
      ],
      "sizing": {
        "rules": [
          "The chat fills its parent; ChatLayout owns border and padding. Its transcript scrolls after maxHeight (default 32rem).",
          "Transcript and composer parts are measured in a complete conversation context."
        ]
      },
      "keyboard": [
        {
          "key": "Tab / Shift+Tab",
          "does": "Move between composer input, disclosures and buttons."
        },
        {
          "key": "Enter / Space",
          "does": "Activate buttons. Enter in the textarea inserts a newline; Send submits."
        }
      ],
      "examples": [
        {
          "title": "Working composition",
          "code": "import { Chat, ChatMessageList, ChatMessage, ChatMessageBubble, ChatComposer } from 'hanoryx-components/kit';\n\n<Chat>\n  <ChatMessageList>\n    <ChatMessage author=\"Assistant\"><ChatMessageBubble>Ready to build.</ChatMessageBubble></ChatMessage>\n  </ChatMessageList>\n  <ChatComposer onSend={async (text) => { await saveMessage(text); }} />\n</Chat>"
        }
      ]
    },
    "ChatTokenizedText": {
      "origin": "new",
      "summary": "Render tokenized text safely as React text; tokens can carry a visible label.",
      "props": [
        {
          "name": "tokens"
        }
      ],
      "notes": [
        "New library family. The host owns message history, transport, streaming, attachment storage and tool execution.",
        "Composer input and send parts must be nested inside ChatComposer. Other parts use semantic sections, ordered lists and disclosures."
      ],
      "sizing": {
        "rules": [
          "The chat fills its parent; ChatLayout owns border and padding. Its transcript scrolls after maxHeight (default 32rem).",
          "Transcript and composer parts are measured in a complete conversation context."
        ]
      },
      "keyboard": [
        {
          "key": "Tab / Shift+Tab",
          "does": "Move between composer input, disclosures and buttons."
        },
        {
          "key": "Enter / Space",
          "does": "Activate buttons. Enter in the textarea inserts a newline; Send submits."
        }
      ],
      "examples": [
        {
          "title": "Working composition",
          "code": "import { Chat, ChatMessageList, ChatMessage, ChatMessageBubble, ChatComposer } from 'hanoryx-components/kit';\n\n<Chat>\n  <ChatMessageList>\n    <ChatMessage author=\"Assistant\"><ChatMessageBubble>Ready to build.</ChatMessageBubble></ChatMessage>\n  </ChatMessageList>\n  <ChatComposer onSend={async (text) => { await saveMessage(text); }} />\n</Chat>"
        }
      ]
    }
  }
};
