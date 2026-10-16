import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'node_modules', '.scratch', 'site/public/generated']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  {
    // Node-side tooling: the CLI, generators and measuring scripts.
    files: ['bin/**', 'scripts/**', '**/*.doc.mjs', '**/*.mjs'],
    languageOptions: { globals: globals.node },
  },
  {
    // Specimens and the stage helpers export data (items, shared helpers) beside components.
    files: ['src/specimens/**/*.{js,jsx}', 'src/stage/**/*.{js,jsx}', 'site/src/preview/**/*.{js,jsx}', 'site/src/recipes/**/*.{js,jsx}'],
    rules: { 'react-refresh/only-export-components': 'off' },
  },
])
