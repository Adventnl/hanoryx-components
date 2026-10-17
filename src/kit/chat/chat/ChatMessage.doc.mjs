export const docs = {
  "origin": "new",
  "summary": "One transcript item; author names are visible, and role is never only a colour.",
  "props": [
    {
      "name": "author"
    },
    {
      "name": "children",
      "type": "ReactNode",
      "description": "Content rendered in this part."
    },
    {
      "name": "metadata"
    },
    {
      "name": "role",
      "type": "'user' | 'assistant' | 'system'",
      "description": "Speaker identity used for layout, separate from the HTML/ARIA role."
    }
  ],
  "notes": [
    "New library family. The host owns message history, transport, streaming, attachment storage and tool execution.",
    "Composer input and send parts must be nested inside ChatComposer. Other parts use semantic sections, ordered lists and disclosures.",
    "Must be inside ChatMessageList. author is visible; metadata accepts ChatMessageMetadata."
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
    "ChatMessageList": {
      "origin": "new",
      "summary": "An ordered transcript. Announcements are opt-in to avoid rereading history.",
      "props": [
        {
          "name": "children",
          "type": "ReactNode",
          "description": "Content rendered in this part."
        },
        {
          "name": "label",
          "type": "string",
          "description": "Visible or accessible name. Keep it meaningful in the page context."
        },
        {
          "name": "announce"
        },
        {
          "name": "ref"
        }
      ],
      "notes": [
        "New library family. The host owns message history, transport, streaming, attachment storage and tool execution.",
        "Composer input and send parts must be nested inside ChatComposer. Other parts use semantic sections, ordered lists and disclosures.",
        "Use ChatMessage and ChatSystemMessage as direct list children. announce defaults to false; enable it only for new live messages."
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
    "ChatMessageBubble": {
      "origin": "new",
      "summary": "The content surface inside a transcript message.",
      "props": [
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
    },
    "ChatMessageMetadata": {
      "origin": "new",
      "summary": "A message footer, optionally using a semantic time element.",
      "props": [
        {
          "name": "children",
          "type": "ReactNode",
          "description": "Content rendered in this part."
        },
        {
          "name": "dateTime"
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
    "ChatSystemMessage": {
      "origin": "new",
      "summary": "A transcript item whose system role is written out visibly.",
      "props": [
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
    },
    "ChatToolCalls": {
      "origin": "new",
      "summary": "Tool calls stay inspectable as native disclosures; arguments are rendered as text.",
      "props": [
        {
          "name": "calls",
          "type": "Array<{id: string, name: string, status: string, arguments?: unknown, output?: unknown}>",
          "description": "Host-supplied tool execution records. Text is escaped; no tool executes in this component."
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
