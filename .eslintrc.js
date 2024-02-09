module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
    },
    plugins: [
      '@typescript-eslint/eslint-plugin',
      'unicorn',
      'simple-import-sort',
      'import'
    ],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'plugin:unicorn/all'
    ],
    root: true,
    env: {
      node: true,
      jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "unicorn/filename-case": [
        "error",
        {
          "case": "camelCase"
        }
      ],
      "unicorn/prevent-abbreviations": [
        "error",
        {
          "ignore": [
            ".e2e",
            ".args"
          ]
        }
      ]
    },
  };
  