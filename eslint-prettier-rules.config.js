module.exports = {
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        quoteProps: 'consistent',
        jsxSingleQuote: false,
        bracketSpacing: true,
        bracketSameLine: false,
        arrowParens: 'always',
        singleAttributePerLine: true,
      },
      {
        usePrettierrc: true,
      },
    ],
  },
};
