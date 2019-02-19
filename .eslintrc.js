module.exports = {
  env: {
    'cypress/globals': true,
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['cypress'],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
