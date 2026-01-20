import js from '@eslint/js';
import globals from 'globals';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';
import prettier from 'eslint-config-prettier/flat';

// Função para remover regras inválidas de um config
function filterInvalidRules(config) {
  if (!config.rules) return config;
  const filteredRules = {};
  for (const [key, value] of Object.entries(config.rules)) {
    // Pular regras react-refresh que não têm plugin instalado
    if (key.startsWith('react-refresh/')) {
      continue;
    }
    filteredRules[key] = value;
  }
  return { ...config, rules: filteredRules };
}

export default [
  // Ignores
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**', '.eslintrc.cjs'],
  },

  // Configurações base do ESLint
  js.configs.recommended,

  // Configurações do TypeScript ESLint (flat config)
  ...tsPlugin.configs['flat/recommended'],

  // Configurações do TypeScript com parser e opções específicas
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.node,
        React: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },

  // Configurações do React
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.node,
        React: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },

  // Configurações do Storybook (filtrando regras inválidas)
  ...storybook.configs['flat/recommended'].map(filterInvalidRules),

  // Override para desabilitar regras react-refresh explicitamente
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },

  // Prettier (deve ser o último para desabilitar regras conflitantes)
  prettier,
];
