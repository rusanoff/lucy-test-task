module.exports = {
  rules: {
    // region Supported Rules

    // Требовать `[]` или `Array<>` в зависимости от ситуации
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
        readonly: 'array-simple',
      },
    ],

    // Запретить комментарии "tslint:..."
    '@typescript-eslint/ban-tslint-comment': 'error',

    // Требовать поля с модификатором только для чтения вместо геттеров, возвращающих литералы
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],

    // Требовать указывать тип в конструкторе, а не для переменной
    '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],

    // Требовать `Record` вместо `{ [key: string]: unknown }`
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],

    // Предупреждать о предпочтении указывать тип перед объявлением, а не после
    '@typescript-eslint/consistent-type-assertions': [
      'warn',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never',
      },
    ],

    // Предупреждать о предпочтении использовать `type` вместо `interface`
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],

    // Отключить проверку на стиль импорта типов
    '@typescript-eslint/consistent-type-imports': 'off',

    // Отключить проверку на указание явных возвращаемых типов для функций и методов класса
    '@typescript-eslint/explicit-function-return-type': 'off',

    // Предупреждать о модификаторах доступа к свойствам и методам класса
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      {
        accessibility: 'no-public',
      },
    ],

    // Отключить проверку на указание типа возвращаемого значения в экспортируемых функциях
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Отключить правило по рекомендации @typescript-eslint
    '@typescript-eslint/member-delimiter-style': 'off',

    // Предупреждать о порядке объявления свойств класса
    '@typescript-eslint/member-ordering': 'warn',

    // Предупреждать о предпочтении указывать тип метода через стрелочную функцию
    '@typescript-eslint/method-signature-style': ['warn', 'property'],

    // Запретить ненулевое утверждение в местах, которые могут сбивать с толку
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    // Запретить дубликаты в `enum`
    '@typescript-eslint/no-duplicate-enum-values': 'error',

    // Запретить удалять динамические свойства
    '@typescript-eslint/no-dynamic-delete': 'error',

    // Отключить правило на использование классов в качестве пространств имен.
    '@typescript-eslint/no-extraneous-class': 'off',

    // Отключить правило (deprecated)
    '@typescript-eslint/no-implicit-any-catch': 'off',

    // Предупреждать о `void`, но не для `this` и дженериков
    '@typescript-eslint/no-invalid-void-type': [
      'warn',
      {
        allowInGenericTypeArguments: true,
        allowAsThisParameter: true,
      },
    ],

    // Предупреждать о ненулевом утверждении в левом операнде нулевого оператора объединения
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',

    // Отключить правило (deprecated)
    '@typescript-eslint/no-parameter-properties': 'off',

    // Запретить импорт через `require`
    '@typescript-eslint/no-require-imports': 'error',

    // Отключить проверку на псевдонимы типов
    '@typescript-eslint/no-type-alias': 'off',

    // Запретить слияние небезопасных объявлений
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',

    // Запретите пустой экспорт, который ничего не меняет в файле модуля
    '@typescript-eslint/no-useless-empty-export': 'error',

    // Отключить проверку на свойства параметров в конструкторах классов
    '@typescript-eslint/parameter-properties': 'off',

    // Предупреждать о том, чтобы каждое значение члена перечисления было явно инициализировано
    '@typescript-eslint/prefer-enum-initializers': 'warn',

    // Предупреждать о предпочтении цикла `for-of` там, где это возможно
    '@typescript-eslint/prefer-for-of': 'warn',

    // Требовать использование типов функций вместо интерфейсов с сигнатурами вызовов.
    '@typescript-eslint/prefer-function-type': 'error',

    // Требовать, чтобы все члены перечисления были литеральными значениями
    '@typescript-eslint/prefer-literal-enum-member': 'error',

    // Требовать optional chain expressions
    '@typescript-eslint/prefer-optional-chain': 'error',

    // Отключить проверку на использование `@ts-expect-error` вместо `@ts-ignore`
    '@typescript-eslint/prefer-ts-expect-error': 'off',

    // Отключить проверку на сортировку типов union/intersection в алфавитном порядке
    '@typescript-eslint/sort-type-constituents': 'off',

    // Отключить правило (deprecated)
    '@typescript-eslint/sort-type-union-intersection-members': 'off',

    // Отключить правило по рекомендации @typescript-eslint
    '@typescript-eslint/type-annotation-spacing': 'off',

    // Отключить правило на проверку аннотации типа в определенных местах
    '@typescript-eslint/typedef': 'off',

    // Запретить две перегрузки, которые можно объединить в одну с помощью объединения или необязательного параметра
    '@typescript-eslint/unified-signatures': 'error',

    // endregion Supported Rules

    // region Extension Rules

    // Требовать один тип фигурных скобок для блоков и функций
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false,
      },
    ],

    // Требовать запятые в конце
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],

    // Требовать постоянный интервал после запятых, но не до
    '@typescript-eslint/comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // Требовать использование параметров по-умолчанию только после явных параметров
    '@typescript-eslint/default-param-last': 'error',

    // Запретить интервалы между идентификаторами функций и их вызовами
    '@typescript-eslint/func-call-spacing': ['error', 'never'],

    // Требовать 2 пробела для вложенности
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],

    // Отключить проверку на способ инициализации переменных
    '@typescript-eslint/init-declarations': 'off',

    // Требовать интервал до и после ключевых слов
    '@typescript-eslint/keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],

    // Запретить пустую строку между однострочными свойствами класса
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],

    // Запретить повторяющиеся члены класса
    '@typescript-eslint/no-dupe-class-members': 'error',

    // Отключить правило (deprecated) | использовать `import/no-duplicates`
    '@typescript-eslint/no-duplicate-imports': 'off',

    // Отключить проверку на ненужные скобки
    '@typescript-eslint/no-extra-parens': 'off',

    // Запретить использование `this` в контекстах, где значение `this` не определено
    '@typescript-eslint/no-invalid-this': 'error',

    // Запретить объявления функций, которые содержат небезопасные ссылки внутри операторов цикла
    '@typescript-eslint/no-loop-func': 'error',

    // Запретить использование магических чисел
    '@typescript-eslint/no-magic-numbers': [
      'warn',
      {
        ignore: [0, 1, 24, 60, 1000],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        ignoreClassFieldInitialValues: true,
        enforceConst: false,
        detectObjects: false,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignoreTypeIndexes: true,
      },
    ],

    // Запретить повторно объявлять переменные
    '@typescript-eslint/no-redeclare': 'error',

    // Отключить правило для запретных модулей для импорта
    '@typescript-eslint/no-restricted-imports': 'off',

    // Запретить объявления переменных с тем же именем во внешней области
    '@typescript-eslint/no-shadow': 'error',

    // Запретить неиспользуемые выражения
    '@typescript-eslint/no-unused-expressions': 'error',

    // Запретить использование переменных до их определения (кроме функций)
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        ignoreTypeReferences: false,
      },
    ],

    // Запретить ненужные конструкторы
    '@typescript-eslint/no-useless-constructor': 'error',

    // Требовать интервал внутри фигурных скобок
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],

    // Отключить проверку на заполнение строк между операторами
    '@typescript-eslint/padding-line-between-statements': 'off',

    // Требовать использование одинарных кавычек
    '@typescript-eslint/quotes': ['error', 'single'],

    // Требовать `;`
    '@typescript-eslint/semi': 'error',

    // Требовать пробел перед блоками
    '@typescript-eslint/space-before-blocks': ['error', 'always'],

    // Запретить пробел перед скобками функции (кроме `async`)
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // Требовать пробелы вокруг инфиксных операторов
    '@typescript-eslint/space-infix-ops': 'error',

    // endregion Extension Rules
  },
};
