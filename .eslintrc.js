/* eslint-disable @typescript-eslint/no-magic-numbers */
module.exports = {
  env: {
    // Глобальные переменные браузера
    'browser': true,
    // Глобальные переменные ECMAScript 2022
    'es2022': true,
    // Глобальные переменные Node.js
    'node': false,
    // Глобальные переменные CommonJS
    'commonjs': false,
    // Глобальные переменные общие для Node.js и браузера
    'shared-node-browser': false,
    // Глобальные переменные Jest
    'jest': false,
    // Глобальные переменные веб-воркеров
    'worker': false,
    // Определение require() и define() как глобальных переменных в соответствии со спецификацией amd
    'amd': false,
    // Глобальные переменные Mocha
    'mocha': false,
    // Глобальные переменные Jasmine
    'jasmine': false,
    // Глобальные переменные PhantomJS
    'phantomjs': false,
    // Глобальные переменные Protractor
    'protractor': false,
    // Глобальные переменные QUnit
    'qunit': false,
    // Глобальные переменные jQuery
    'jquery': false,
    // Глобальные переменные Prototype.js
    'prototypejs': false,
    // Глобальные переменные ShellJS
    'shelljs': false,
    // Глобальные переменные Meteor
    'meteor': false,
    // Глобальные переменные MongoDB
    'mongo': false,
    // Глобальные переменные AppleScript
    'applescript': false,
    // Глобальные переменные Java 8 Nashorn
    'nashorn': false,
    // Глобальные переменные Service Worker
    'serviceworker': false,
    // Глобальные переменные Atom
    'atomtest': false,
    // Глобальные переменные Ember
    'embertest': false,
    // Глобальные переменные WebExtensions
    'webextensions': false,
    // Глобальные переменные GreaseMonkey
    'greasemonkey': false,
  },
  globals: {
    module: true,
  },
  extends: [
    'next/core-web-vitals',
    // Рекомендованный набор правил от eslint
    'eslint:recommended',
    // Рекомендованный набор правил от @typescript-eslint
    'plugin:@typescript-eslint/recommended',
    // Рекомендованный набор правил для проверки типов от @typescript-eslint
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // Рекомендованный набор правил prettier
    'plugin:prettier/recommended',
    // Правила ESLint
    './eslint-rules.config',
    // Правила Typescript ESLint
    './eslint-typescript-rules.config',
    // Правила prettier
    './eslint-prettier-rules.config',
  ],
  overrides: [
    {
      files: ['./*.config.js', './*.config.ts'],
      rules: {
        'no-undef': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        'import/no-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/no-anonymous-default-export': 'off',
      },
    },
    {
      files: ['./*.eslintrc.js'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: '.',
    project: ['tsconfig.json'],
  },
  plugins: [
    // Плагин с наборами правил для TypeScript
    '@typescript-eslint',
    // Плагин для prettier
    'prettier',
  ],
  root: true,
  rules: {},
};
