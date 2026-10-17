export const docs = {
  "origin": "new",
  "summary": "Composable conversation regions, transcript items and a message composer with asynchronous send handling.",
  "props": [
    {
      "name": "label",
      "type": "string",
      "description": "Visible or accessible name. Keep it meaningful in the page context."
    },
    {
      "name": "children",
      "type": "ReactNode",
      "description": "Content rendered in this part."
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
  ],
  "subcomponents": {
    "ChatLayout": {
      "origin": "new",
      "summary": "A bounded conversation viewport with a separate composer slot.",
      "props": [
        {
          "name": "children",
          "type": "ReactNode",
          "description": "Content rendered in this part."
        },
        {
          "name": "composer"
        },
        {
          "name": "label",
          "type": "string",
          "description": "Visible or accessible name. Keep it meaningful in the page context."
        },
        {
          "name": "maxHeight"
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
    },
    "ChatLayoutScrollButton": {
      "origin": "new",
      "summary": "Scroll the supplied message-list ref to its latest message without moving focus.",
      "props": [
        {
          "name": "targetRef"
        },
        {
          "name": "children",
          "type": "ReactNode",
          "description": "Content rendered in this part."
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
