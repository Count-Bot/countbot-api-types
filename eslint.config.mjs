import globals from 'globals';
import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import ts from 'typescript-eslint';

export default ts.config(eslint.configs.recommended, ts.configs.recommendedTypeChecked, {
  files: ['**/*.{ts,js}'],
  languageOptions: {
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      projectService: true,
    },
    globals: {
      ...globals.node,
    },
  },
  plugins: {
    import: importPlugin,
  },
  rules: {
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'index', 'sibling', 'parent'],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
});
