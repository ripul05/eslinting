const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...compat.extends([
    "eslint:recommended",
    "plugin:diff/diff",     // Include the diff plugin here
    "plugin:sonarjs/recommended"
  ]),
  {
    env: {
      node: true,
      es6: true,
      mocha: true,
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {
      'no-magic-numbers': 'warn',
      'no-unused-vars': 'warn',
      'eqeqeq': 'warn',
      'no-console': 'warn',
      'curly': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single']
    },
    parser: "@babel/eslint-parser"
  }
];
