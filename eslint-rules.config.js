module.exports = {
  rules: {
    // region Possible Problems

    // Требовать `return` в callback-ах методов массива
    'array-callback-return': [
      'error',
      {
        // Запретить `return` без результата (`return;`)
        allowImplicit: false,
        // Запретить `return` с результатом в `[].forEach()`
        checkForEach: true,
      },
    ],

    // Запретить `await` в цикле
    'no-await-in-loop': 'error',

    // Запретить константы, в которых операция не влияет на результат (e.g. `+x == null`)
    'no-constant-binary-expression': 'error',

    // Запретить `return` с результатом в конструкторах
    'no-constructor-return': 'error',

    // Запретить управляющие символы в регулярных выражениях
    'no-control-regex': 'error',

    // Отключить правило в пользу @typescript-eslint
    'no-duplicate-imports': 'off',

    // Запретить оператор `new` с глобальными функциями, не являющимися конструкторами
    'no-new-native-nonconstructor': 'error',

    // Отключить в пользу @typescript-eslint
    'no-dupe-class-members': 'off',

    // Запретить возвращаемые значения из функций-исполнителей промисов
    'no-promise-executor-return': 'error',

    // Запретить сравнение одинаковых значений
    'no-self-compare': 'error',

    // Запретить синтаксис заполнителя литерала шаблона в обычных строках
    'no-template-curly-in-string': 'error',

    // Запретить неизменяемые условия цикла
    'no-unmodified-loop-condition': 'error',

    // Предупреждать о циклах с 1 итерацией
    'no-unreachable-loop': 'warn',

    // Предупреждать о неиспользуемых приватных свойствах класса
    'no-unused-private-class-members': 'warn',

    // Отключить в пользу @typescript-eslint
    'no-use-before-define': 'off',

    // Запретить назначения, которые могут привести к условиям гонки из-за использования await или yield
    'require-atomic-updates': [
      'error',
      {
        // Включить и для свойств объектов
        allowProperties: false,
      },
    ],

    // endregion Possible Problems

    // region Suggestions

    // Предупреждать о том, что сеттер не имеет геттеров
    'accessor-pairs': 'warn',

    // Требовать фигурные скобки вокруг тела стрелочной функции
    'arrow-body-style': ['error', 'always'],

    // Предупреждать о том, что использование переменных должно быть в той области, в которой они определены
    'block-scoped-var': 'error',

    // Запретить названия, отличные от соглашения 'camelCase'
    'camelcase': 'error',

    // Запретить нижний регистр для первой буквы в комментарии
    'capitalized-comments': [
      'error',
      'always',
      {
        ignorePattern: 'eslint|global|globals|region|endregion|stylelint',
        ignoreConsecutiveComments: true,
      },
    ],

    // Требовать использование `this` в методах класса
    'class-methods-use-this': 'error',

    // Отключить проверку предела цикломатической сложности
    'complexity': 'off',

    // Запретить использование `return;` и `return value;` в одной функции
    'consistent-return': 'error',

    // Требовать называть переменную `self` для присвоения `this`
    'consistent-this': ['error', 'self'],

    // Требовать фигурные скобки для всех операторов
    'curly': 'error',

    // Требовать `default` в операторе `switch-case`
    'default-case': 'error',

    // Требовать `default` в конце оператора `switch-case`
    'default-case-last': 'error',

    // Отключить в пользу @typescript-eslint
    'default-param-last': 'off',

    // Требовать применение точечной нотации везде, где это возможно
    'dot-notation': 'error',

    // Требовать использование `===` и `!==`
    'eqeqeq': 'error',

    // Требовать, чтобы имена функций совпадали с именем переменной или свойства, которым они назначены
    'func-name-matching': 'error',

    // Отключить проверку на именованные функциональные выражения
    'func-names': 'off',

    // Требовать использование декларативного создания функции
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],

    // Предупреждать, чтобы была группировка средств доступа в литералах объектов и классах в порядке:
    // геттер -> сеттер
    'grouped-accessor-pairs': ['warn', 'getBeforeSet'],

    // Предупреждать, что в цикле for-in нужна проверка
    'guard-for-in': 'warn',

    // Отключить проверку на специфичные названия переменных
    'id-denylist': 'off',

    // Отключить проверку на длину названия переменной
    'id-length': 'off',

    // Отключить проверку на названия сущностей
    'id-match': 'off',

    // Отключить проверку на способ инициализации переменных
    'init-declarations': 'off',

    // Отключить проверку на сокращение логического оператора присваивания
    'logical-assignment-operators': 'off',

    // Требовать объявление только 1 класса в файле
    'max-classes-per-file': ['error', 1],

    // Отключить проверку на глубину вложенности кода
    'max-depth': 'off',

    // Отключить проверку на количество строк в файле
    'max-lines': 'off',

    // Отключить проверку на количество строк в функции
    'max-lines-per-function': 'off',

    // Отключить проверку на глубину вложенных callback-ов
    'max-nested-callbacks': 'off',

    // Предупреждать о количестве параметров функции, если их больше 2
    'max-params': ['warn', 2],

    // Отключить проверку на количество операторов в функциональных блоках
    'max-statements': 'off',

    // Отключить проверку на стиль многострочных комментариев
    'multiline-comment-style': 'off',

    // Требовать, чтобы имена конструкторов начинались с заглавной буквы
    'new-cap': 'error',

    // Запретить использование `alert()`, `confirm()` и `prompt()`
    'no-alert': 'error',

    // Отключить проверку на использование конструктора массива
    'no-array-constructor': 'off',

    // Запретить использование побитовых операторов
    'no-bitwise': 'error',

    // Запретить использование `arguments.caller` и `arguments.callee`
    'no-caller': 'error',

    // Предупреждать о стрелочных функциях, которые можно спутать со сравнениями
    'no-confusing-arrow': 'warn',

    // Запретить вызывать `console.log()` и `console.warn()`, но не `console.error()`
    'no-console': [
      'error',
      {
        allow: ['error'],
      },
    ],

    // Запретить использование `continue`
    'no-continue': 'error',

    // Запретить операторы деления в начале регулярных выражений
    'no-div-regex': 'error',

    // Запретить блоки `else` после операторов `return` в операторах `if`
    'no-else-return': 'error',

    // Запретить пустые функции кроме стрелочных и конструкторов
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions'],
      },
    ],

    // Запретить пустые статические блоки
    'no-empty-static-block': 'error',

    // Вместо этого правила есть правило 'eqeqeq'
    'no-eq-null': 'off',

    // Запретить использование `eval()`
    'no-eval': 'error',

    // Запретить расширение нативных типов
    'no-extend-native': 'error',

    // Предупреждать о лишнем вызове `bind()`
    'no-extra-bind': 'warn',

    // Запретить лишние ярлыки
    'no-extra-label': 'error',

    // Запретить начальные или конечные десятичные точки в числовых литералах
    'no-floating-decimal': 'error',

    // Запретить сокращенные привидения типов
    'no-implicit-coercion': 'error',

    // Запретить объявления в глобальной области видимости
    'no-implicit-globals': 'error',

    // Запретить использование методов, подобных `eval()`
    'no-implied-eval': 'error',

    // Запретить комментарии после кода на одной строке
    'no-inline-comments': 'error',

    // Отключить в пользу @typescript-eslint
    'no-invalid-this': 'off',

    // Запретить использование свойства `__iterator__`
    'no-iterator': 'error',

    // Запретить метки, имя которых совпадает с именем переменной
    'no-label-var': 'error',

    // Запретить помеченные операторы
    'no-labels': 'error',

    // Запретить ненужные вложенные блоки
    'no-lone-blocks': 'error',

    // Предупреждать об операторах `if`, которые единственные в блоках `else`
    'no-lonely-if': 'warn',

    // Отключить в пользу @typescript-eslint
    'no-loop-func': 'off',

    // Отключить в пользу @typescript-eslint
    'no-magic-numbers': 'off',

    // Предупреждать о смешанных бинарных операторах
    'no-mixed-operators': 'warn',

    // Запретить использование связанных выражений присваивания
    'no-multi-assign': 'error',

    // Запретить многострочные строки
    'no-multi-str': 'error',

    // Предупреждать об отрицательных условиях
    'no-negated-condition': 'warn',

    // Предупреждать о вложенных тернарных выражениях
    'no-nested-ternary': 'warn',

    // Запретить операторы `new` вне назначений или сравнений
    'no-new': 'error',

    // Запретить операторы `new` с объектом `Function`
    'no-new-func': 'error',

    // Запретить конструкторы объектов
    'no-new-object': 'error',

    // Запретить операторы `new` со строковыми, числовыми и логическими объектами
    'no-new-wrappers': 'error',

    // Запретить восьмеричные escape-последовательности в строковых литералах
    'no-octal-escape': 'error',

    // Запретить переназначение параметров функции
    'no-param-reassign': 'error',

    // Запретить унарные операторы `++` и `--` везде, кроме циклов
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],

    // Запретить использование свойства `__proto__`
    'no-proto': 'error',

    // Отключить в пользу @typescript-eslint
    'no-redeclare': 'off',

    // Отключить правило для запретных экспортируемых имён
    'no-restricted-exports': 'off',

    // Отключить правило для запретных имён глобальных переменных
    'no-restricted-globals': 'off',

    // Отключить в пользу @typescript-eslint
    'no-restricted-imports': 'off',

    // Отключить правило для запретных свойства для определенных объектов
    'no-restricted-properties': 'off',

    // Отключить правило для запретного синтаксиса
    'no-restricted-syntax': 'off',

    // Запретить операторы присваивания в операторах `return`
    'no-return-assign': ['error', 'always'],

    // Запретить ненужный `return await`
    'no-return-await': 'error',

    // Запретить JavaScript: URL
    'no-script-url': 'error',

    // Запретить использование запятых
    'no-sequences': 'error',

    // Отключить в пользу @typescript-eslint
    'no-shadow': 'off',

    // Отключить запрет на тернарные операторы
    'no-ternary': 'off',

    // Запретить создание литералов в качестве исключений
    'no-throw-literal': 'error',

    // Предупреждать о переменных, инициализированных как `undefined`
    'no-undef-init': 'warn',

    // Предупреждать об использовании `undefined` в качестве идентификатора
    'no-undefined': 'warn',

    // Предупреждать о нижних подчеркиваниях в идентификаторах
    'no-underscore-dangle': [
      'error',
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        allowAfterThisConstructor: false,
        enforceInMethodNames: false,
        enforceInClassFields: false,
        allowInArrayDestructuring: false,
        allowInObjectDestructuring: false,
        allowFunctionParams: false,
      },
    ],

    // Запретить ненужные тернарные операторы
    'no-unneeded-ternary': 'error',

    // Отключить в пользу @typescript-eslint
    'no-unused-expressions': 'off',

    // Запретить ненужные вызовы `.call()` и `.apply()`
    'no-useless-call': 'error',

    // Запретить ненужные вычисляемые ключи свойств в объектах и классах
    'no-useless-computed-key': 'error',

    // Запретить ненужную конкатенацию литералов или литералов шаблонов
    'no-useless-concat': 'error',

    // Отключить в пользу @typescript-eslint
    'no-useless-constructor': 'off',

    // Запретить переименование импортируемых, экспортных и деструктурированных назначений под одним и тем же именем
    'no-useless-rename': 'error',

    // Отключить проверку на избыточные операторы возврата
    'no-useless-return': 'off',

    // Требовать `let` или `const` вместо `var`
    'no-var': 'error',

    // Запретить операторы `void`
    'no-void': 'error',

    // Отключить проверку на предупреждения в комментариях
    'no-warning-comments': 'off',

    // Требовать сокращенный синтаксис методов и свойств для литералов объектов
    'object-shorthand': ['error', 'always'],

    // Требовать объявление переменных по отдельности в функциях
    'one-var': ['error', 'never'],

    // Отключить правило, так как есть правило `one-var`
    'one-var-declaration-per-line': 'off',

    // Требовать сокращение оператора присваивания, где это возможно
    'operator-assignment': ['error', 'always'],

    // Предупреждать о предпочтении использовать стрелочные функции для обратных вызовов
    'prefer-arrow-callback': 'warn',

    // Требовать объявления `const` для переменных, которые никогда не переназначаются после объявления
    'prefer-const': 'error',

    // Требовать деструктуризацию массивов и/или объектов
    'prefer-destructuring': 'error',

    // Запретить использование `Math.pow` в пользу оператора `**`
    'prefer-exponentiation-operator': 'error',

    // Отключить правило для принудительного использования именованной группы захвата в регулярном выражении
    'prefer-named-capture-group': 'off',

    // Предупреждать об использовании `parseInt()` и `Number.parseInt()` с 2, 8, 16-иричными литералами
    'prefer-numeric-literals': 'warn',

    // Требовать использование `Object.hasOwn()` вместо `.hasOwnProperty()`
    'prefer-object-has-own': 'error',

    // Требовать `spread` вместо `Object.assign()` с литералом объекта в качестве первого аргумента
    'prefer-object-spread': 'error',

    // Требовать использования объектов `Error` в качестве причин отклонения обещания
    'prefer-promise-reject-errors': 'error',

    // Запретить использование конструктора `RegExp` в пользу литералов регулярных выражений
    'prefer-regex-literals': 'error',

    // Требовать `rest` параметры вместо `arguments`
    'prefer-rest-params': 'error',

    // Требовать оператор спреда вместо `.apply()`
    'prefer-spread': 'error',

    // Требовать литералы шаблонов вместо конкатенации строк
    'prefer-template': 'error',

    // Требовать заключать в кавычки свойства объектов по необходимости и для всех свойств, если заключено хотя бы 1
    'quote-props': ['error', 'consistent-as-needed'],

    // Требовать указывать систему счисления в `parseInt()`
    'radix': 'error',

    // Запретить асинхронные функции, у которых нет выражения `await`
    'require-await': 'error',

    // Отключить проверку на обязательное указание `unicode` в регулярных выражениях
    'require-unicode-regexp': 'off',

    // Отключить проверку на алфавитный порядок импортов
    'sort-imports': 'off',

    // Отключить проверку на алфавитный порядок свойств объекта
    'sort-keys': 'off',

    // Отключить проверку на алфавитный порядок объявления переменных
    'sort-vars': 'off',

    // Требовать пробел после начала комментария
    'spaced-comment': ['error', 'always'],

    // Отключить проверку на `use strict`
    'strict': 'off',

    // Требовать описания символов
    'symbol-description': 'error',

    // Предупреждать о том, что переменные должны быть определены в верхней части области видимости
    'vars-on-top': 'warn',

    // Запретить условия 'Йода'
    'yoda': ['error', 'never'],

    // endregion Suggestions

    // region Layout & Formatting

    // Запретить перенос строк после/перед 1 скобкой массивов
    'array-bracket-newline': ['error', 'consistent'],

    // Запретить пробелы между скобками массивов
    'array-bracket-spacing': ['error', 'never'],

    // Отключить проверку на переносы строк между элементами массивов
    'array-element-newline': 'off',

    // Требовать круглые скобки вокруг аргументов стрелочной функции
    'arrow-parens': 'error',

    // Требовать пробелы вокруг стрелки в стрелочных функциях
    'arrow-spacing': 'error',

    // Требовать пробелы между скобками блоков
    'block-spacing': ['error', 'always'],

    // Отключить в пользу @typescript-elsint
    'brace-style': 'off',

    // Отключить в пользу @typescript-elsint
    'comma-dangle': 'off',

    // Отключить в пользу @typescript-elsint
    'comma-spacing': 'off',

    // Запретить пробелы вокруг вычисляемых свойств
    'computed-property-spacing': ['error', 'never'],

    // Требовать привязывать точку к свойству
    'dot-location': ['error', 'property'],

    // Требовать новую строку в конце файлов
    'eol-last': ['error', 'always'],

    // Отключить в пользу @typescript-eslint
    'func-call-spacing': 'off',

    // Запретить разрывы строк между аргументами вызова функции
    'function-call-argument-newline': ['error', 'never'],

    // Запретить разрывы строк внутри круглых скобок функций
    'function-paren-newline': ['error', 'never'],

    // Требовать `*` сразу после `function` в генераторах
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // Отключить проверку на расположение тел стрелочных функций
    'implicit-arrow-linebreak': 'off',

    // Отключить в пользу @typescript-eslint
    'indent': 'off',

    // Требовать использование двойных кавычек в атрибутах JSX
    'jsx-quotes': ['error', 'prefer-double'],

    // Требовать постоянный интервал перед значениями в свойствах литерала объекта
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],

    // Отключить в пользу @typescript-eslint
    'keyword-spacing': 'off',

    // Требовать комментарии только над строкой кода
    'line-comment-position': ['error', 'above'],

    // Требовать разрыв строки в стиле unix
    'linebreak-style': ['error', 'unix'],

    // Отключить проверку на пустые строки вокруг комментариев
    'lines-around-comment': 'off',

    // Отключить в пользу @typescript-eslint
    'lines-between-class-members': 'off',

    // Запретить строки кода больше 120 символов
    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreComments: false,
        ignorePattern: '^\\s*// eslint-',
      },
    ],

    // Требовать максимально допустимое количество операторов в строке, равное одному
    'max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],

    // Отключить проверку на переносы строк для тернарных операторов
    'multiline-ternary': 'off',

    // Требовать круглые скобки при вызове конструктора без аргументов
    'new-parens': ['error', 'always'],

    // Требовать новую строку после каждого вызова в цепочке методов
    'newline-per-chained-call': 'error',

    // Отключить в пользу @typescript-eslint
    'no-extra-parens': 'off',

    // Запретить несколько пробелов
    'no-multi-spaces': 'error',

    // Запретить несколько пустых строк
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],

    // Запретить использовать табы
    'no-tabs': 'error',

    // Запретить пробелы перед свойствами
    'no-whitespace-before-property': 'error',

    // Запретить завершающие пробелы в конце строк
    'no-trailing-spaces': 'error',

    // Отключить проверку на однострочные операторы
    'nonblock-statement-body-position': 'off',

    // Отключить проверку определения свойства объекта на отдельных строках
    'object-curly-newline': 'off',

    // Отключить в пользу @typescript-eslint
    'object-curly-spacing': 'off',

    // Требовать определять все свойства объекта на отдельных строках
    'object-property-newline': 'error',

    // Требовать разрыв строки перед операторами при многострочном использовании
    'operator-linebreak': ['error', 'before'],

    // Запретить отступы внутри блоков
    'padded-blocks': ['error', 'never'],

    // Отключить в пользу @typescript-eslint
    'padding-line-between-statements': 'off',

    // Отключить в пользу @typescript-eslint
    'quotes': 'off',

    // Запретить интервалы между `spread`
    'rest-spread-spacing': ['error', 'never'],

    // Отключить в пользу @typescript-eslint
    'semi': 'off',

    // Запретить пробел перед `;`
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // Требовать `;` только в конце
    'semi-style': ['error', 'last'],

    // Отключить в пользу @typescript-eslint
    'space-before-blocks': 'off',

    // Отключить в пользу @typescript-eslint
    'space-before-function-paren': 'off',

    // Запретить пробелы между аргументами функции
    'space-in-parens': ['error', 'never'],

    // Отключить в пользу @typescript-eslint
    'space-infix-ops': 'off',

    // Требовать пробел до или после унарных операторов
    'space-unary-ops': 'error',

    // Запретить пробел перед `:` в `switch-case`
    'switch-colon-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // Запретить пробелы внутри скобок в шаблонных строках
    'template-curly-spacing': ['error', 'never'],

    // Запретить пробел перед шаблонной строкой при вызове функции
    'template-tag-spacing': ['error', 'never'],

    // Отключить проверку метки unicode
    'unicode-bom': 'off',

    // Требовать шаблон IIFE: `(function(){})()`
    'wrap-iife': ['error', 'inside'],

    // Отключить проверку скобок вокруг регулярного выражения
    'wrap-regex': 'off',

    // Требовать `*` после `yield` без пробела
    'yield-star-spacing': ['error', 'after'],

    // endregion Layout & Formatting
  },
};
