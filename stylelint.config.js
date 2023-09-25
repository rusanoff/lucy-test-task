module.exports = {
  customSyntax: 'postcss-scss',
  rules: {
    /** region Avoid errors */

    // region Descending

    // Запретить селекторам с более низкой специфичностью появляться после переопределения селекторов
    // с более высокой специфичностью
    'no-descending-specificity': true,

    // endregion Descending

    // region Duplicate

    // Запретить дублирование пользовательских свойств в блоках объявлений
    'declaration-block-no-duplicate-custom-properties': true,

    // Запретить повторяющиеся свойства в блоках объявления
    'declaration-block-no-duplicate-properties': true,

    // Запретить повторяющиеся имена семейств шрифтов
    'font-family-no-duplicate-names': true,

    // Запретить повторяющиеся селекторы в блоках анимации
    'keyframe-block-no-duplicate-selectors': true,

    // Запретить дублирование правил @import
    'no-duplicate-at-import-rules': true,

    // Запретить повторяющиеся селекторы
    'no-duplicate-selectors': true,

    // endregion Duplicate

    // region Empty

    // Запретить пустые блоки
    'block-no-empty': true,

    // Запретить пустые комментарии
    'comment-no-empty': true,

    // Запретить пустые файлы
    'no-empty-source': true,

    // endregion Empty

    // region Invalid

    // Запретить недопустимые шестнадцатеричные значения цвета
    'color-no-invalid-hex': true,

    // Запретить оператор без пробелов в функции `calc()`
    'function-calc-no-unspaced-operator': true,

    // Запретить !important в анимации
    'keyframe-declaration-no-important': true,

    // Запретить недопустимые именованные области сетки
    'named-grid-areas-no-invalid': true,

    // Запретить комментарии с двойной косой чертой (//...), которые не поддерживаются CSS
    'no-invalid-double-slash-comments': true,

    // Запретить @import ниже описания правил стиля
    'no-invalid-position-at-import-rule': true,

    // Запретить неэкранированный перенос строки
    'string-no-newline': true,

    // endregion Invalid

    // region Irregular

    // Запретить неправильные пробелы
    'no-irregular-whitespace': true,

    // endregion Irregular

    // region Missing

    // Запретить отсутствующую функцию var для пользовательских свойств
    'custom-property-no-missing-var-function': true,

    // Запретить отсутствие родовых семейств в списках семейств шрифтов
    'font-family-no-missing-generic-family-keyword': true,

    // endregion Missing

    // region Non-standard

    // Запретить значения направления в вызовах `linear-gradient()`, недопустимые по стандартному синтаксису
    'function-linear-gradient-no-nonstandard-direction': true,

    // endregion Non-standard

    // region Overrides

    // Запретить сокращённые свойства, которые переопределяют связанные полные свойства
    'declaration-block-no-shorthand-property-overrides': true,

    // endregion Overrides

    // region Unknown

    // Запретить неизвестные аннотации
    'annotation-no-unknown': true,

    // Запретить неизвестные правила
    'at-rule-no-unknown': true,

    // Запретить неизвестные функции
    'function-no-unknown': true,

    // Запретить неизвестные имена медиа функций
    'media-feature-name-no-unknown': true,

    // Запретить неизвестные анимации
    'no-unknown-animations': true,

    // Запретить неизвестные свойства
    'property-no-unknown': true,

    // Запретить неизвестные селекторы псевдоклассов
    'selector-pseudo-class-no-unknown': true,

    // Запретить неизвестные селекторы псевдоэлементов
    'selector-pseudo-element-no-unknown': true,

    // Запретить селекторы неизвестного типа
    'selector-type-no-unknown': true,

    // Запретить неизвестные единицы измерения
    'unit-no-unknown': true,

    // endregion Unknown

    /** endregion Avoid errors */

    /* -------------------------------------------------------------------- */

    /** region Enforce non-stylistic conventions */

    // region Allowed, disallowed & required

    // Не отслеживать список разрешённых at-правил
    'at-rule-allowed-list': null,

    // Не отслеживать список запрещённых at-правил
    'at-rule-disallowed-list': null,

    // Запретить префиксы для at-правил
    'at-rule-no-vendor-prefix': true,

    // Не отслеживать список необходимых свойств для at-правила
    'at-rule-property-required-list': null,

    // Запретить альфа-канал для шестнадцатеричных цветов
    'color-hex-alpha': 'never',

    // Запретить именованные цвета
    'color-named': 'never',

    // Разрешить шестнадцатеричные цвета
    'color-no-hex': false,

    // Не отслеживать список запрещённых слов в комментариях
    'comment-word-disallowed-list': null,

    // Запретить !important в объявлениях
    'declaration-no-important': [
      true,
      {
        severity: 'warning',
      },
    ],

    // Не отслеживать список разрешённых пар свойств и единиц измерения
    'declaration-property-unit-allowed-list': null,

    // Не отслеживать список запрещённых пар свойств и единиц измерения
    'declaration-property-unit-disallowed-list': null,

    // Не отслеживать список разрешённых пар свойств и значений
    'declaration-property-value-allowed-list': null,

    // Не отслеживать список запрещённых пар свойств и значений
    'declaration-property-value-disallowed-list': null,

    // Не отслеживать разрешение на css функции
    'function-allowed-list': null,

    // Не отслеживать запрет на css функции
    'function-disallowed-list': null,

    // Запретить URL-адреса, относящиеся к схеме
    'function-url-no-scheme-relative': true,

    // Не отслеживать разрешённые схемы в url адресах
    'function-url-scheme-allowed-list': null,

    // Не отслеживать запрещённые схемы в url адресах
    'function-url-scheme-disallowed-list': null,

    // Запретить единицы измерения для нуля
    'length-zero-no-unit': true,

    // Не отслеживать список разрешённых имен медиа функций
    'media-feature-name-allowed-list': null,

    // Не отслеживать список запрещённых имен медиа функций
    'media-feature-name-disallowed-list': null,

    // Разрешить префиксы поставщиков для имен медиа функций
    'media-feature-name-no-vendor-prefix': true,

    // Не отслеживать список разрешённых пар имени и значения медиа функции
    'media-feature-name-value-allowed-list': null,

    // Не отслеживать список разрешённых свойств
    'property-allowed-list': null,

    // Не отслеживать список запрещённых свойств
    'property-disallowed-list': null,

    // Запретить префиксы для свойств
    'property-no-vendor-prefix': true,

    // Не отслеживать список запрещённых свойств для селекторов в правилах
    'rule-selector-property-disallowed-list': null,

    // Не отслеживать список запрещённых имён атрибутов
    'selector-attribute-name-disallowed-list': null,

    // Не отслеживать список разрешённых операторов атрибутов
    'selector-attribute-operator-allowed-list': null,

    // Не отслеживать список запрещённых операторов атрибутов
    'selector-attribute-operator-disallowed-list': null,

    // Не отслеживать список разрешённых комбинаторов
    'selector-combinator-allowed-list': null,

    // Не отслеживать список запрещённых комбинаторов
    'selector-combinator-disallowed-list': null,

    // Не отслеживать список запрещённых селекторов
    'selector-disallowed-list': null,

    // Запретить квалификацию селектора по тегу
    'selector-no-qualifying-type': true,

    // Разрешить префиксы для селекторов
    'selector-no-vendor-prefix': false,

    // Не отслеживать список разрешённых селекторов псевдоклассов
    'selector-pseudo-class-allowed-list': null,

    // Не отслеживать список запрещённых селекторов псевдоклассов
    'selector-pseudo-class-disallowed-list': null,

    // Не отслеживать список разрешённых селекторов псевдоэлементов
    'selector-pseudo-element-allowed-list': null,

    // Не отслеживать список запрещённых селекторов псевдоэлементов
    'selector-pseudo-element-disallowed-list': null,

    // Не отслеживать список разрешённых единиц
    'unit-allowed-list': null,

    // Не отслеживать список запрещённых единиц
    'unit-disallowed-list': null,

    // Запретить префиксы поставщиков для значений
    'value-no-vendor-prefix': true,

    // endregion Allowed, disallowed & required

    // region Max & min

    // Ограничить количество свойств в однострочном блоке
    'declaration-block-single-line-max-declarations': 1,

    // Не отслеживать количество значений для списка свойств
    'declaration-property-max-values': null,

    // Ограничить глубину вложенности.
    'max-nesting-depth': 3,

    // Максимальное количество знаков после точки в дробных значениях
    'number-max-precision': 3,

    // Ограничить количество атрибутов в селекторе
    'selector-max-attribute': 1,

    // Ограничить количество классов в селекторе
    'selector-max-class': 3,

    // Ограничить количество комбинаторов в селекторе
    'selector-max-combinators': 2,

    // Ограничить количество составных селекторов
    'selector-max-compound-selectors': 3,

    // Ограничить количество селекторов ID
    'selector-max-id': 0,

    // Ограничить количество псевдоклассов в селекторе
    'selector-max-pseudo-class': 3,

    // Не отслеживать ограничение специфичности селекторов
    'selector-max-specificity': null,

    // Ограничить количество селекторов тегов
    'selector-max-type': 0,

    // Ограничить количество универсального селектора
    'selector-max-universal': 1,

    // Минимальное значение для миллисекунд
    'time-min-milliseconds': 16,

    // endregion Max & min

    // region Notation

    // Числовое обозначение для альфа-значений
    'alpha-value-notation': 'number',

    // Старая нотация для функций цвета
    'color-function-notation': 'legacy',

    // Разрешить только короткие обозначения для шестнадцатеричных цветов
    'color-hex-length': 'short',

    // Значение `font-weight` должно быть числовым
    'font-weight-notation': 'numeric',

    // Угловое обозначение для оттенков в градусах
    'hue-degree-notation': 'angle',

    // Разрешить только строку (без `url()`) для правил @import
    'import-notation': 'string',

    // Разрешить указывать только процентное обозначение для селекторов анимации
    'keyframe-selector-notation': 'percentage',

    // Разрешить только сложную нотацию для псевдоклассов `:not()` (например: `:not(:last-child)`)
    'selector-not-notation': 'complex',

    // Укажите двойное двоеточие для псевдоэлементов
    'selector-pseudo-element-colon-notation': 'double',

    // endregion Notation

    // region Pattern

    // Не отслеживать шаблон для комментариев
    'comment-pattern': null,

    // Не отслеживать шаблон для имен пользовательских медиазапросов
    'custom-media-pattern': null,

    // Не отслеживать шаблон пользовательских свойств
    'custom-property-pattern': null,

    // Не отслеживать шаблон имени анимации
    'keyframes-name-pattern': null,

    // Не отслеживать шаблон для селекторов классов
    'selector-class-pattern': null,

    // Не отслеживать шаблон селектора по id
    'selector-id-pattern': null,

    // Не отслеживать шаблон для вложенных селекторов
    'selector-nested-pattern': null,

    // endregion Pattern

    // region Quotes

    // Требовать кавычки вокруг каждого имени семейства шрифтов, которое не является ключевым словом
    'font-family-name-quotes': 'always-unless-keyword',

    // Требовать кавычки для url адресов
    'function-url-quotes': 'always',

    // Требовать кавычки для значений атрибутов
    'selector-attribute-quotes': 'always',

    // endregion Quotes

    // region Redundant

    // Запретить сокращённые свойства, которые можно объединить в одно сокращённое свойство
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        // Игнорировать свойства:
        ignoreShorthands: ['font'],
      },
    ],

    // Запретить избыточные значения в сокращённых свойствах
    'shorthand-property-no-redundant-values': true,

    // endregion Redundant

    /** endregion Enforce non-stylistic conventions */

    /* -------------------------------------------------------------------- */

    /** region Enforce stylistic conventions */

    // region Not handled by pretty printers

    // Разрешить только строчные буквы для значений ключевых слов
    'value-keyword-case': 'lower',

    // Разрешить только строчные буквы для названий функций
    'function-name-case': 'lower',

    // Запрещать пустую строку перед пользовательскими свойствами
    'custom-property-empty-line-before': 'never',

    // Разрешить только строчные буквы для селекторов тегов
    'selector-type-case': 'lower',

    // Требовать пустую строку перед правилами
    'rule-empty-line-before': [
      'always',
      {
        except: [
          // Отменить для вложенных правил и первого дочернего элемента их родительского узла
          'first-nested',
        ],
        ignore: [
          // Игнорировать правила, следующие за комментарием
          'after-comment',
        ],
      },
    ],

    // Требовать пустую строку между блоками
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else'],
      },
    ],

    // Требовать пустую строку перед комментариями.
    'comment-empty-line-before': [
      'always',
      {
        ignore: [
          // Игнорировать комментарии команд stylelint-а
          'stylelint-commands',
          // Игнорировать комментарии, следующие после комментариев
          'after-comment',
        ],
      },
    ],

    // Требовать пробелы внутри маркеров комментариев
    'comment-whitespace-inside': 'always',

    // endregion Not handled by pretty printers

    // region Handled by pretty printers

    // Разрешить только строчные буквы для шестнадцатеричных цветов
    'color-hex-case': 'lower',

    // Запретить в многострочных функциях перенос строки после запятыми
    'function-comma-newline-after': 'never-multi-line',

    // Запретить в многострочных функциях перенос строки перед запятыми
    'function-comma-newline-before': 'never-multi-line',

    // Требовать в функциях после запятой пробел
    'function-comma-space-after': 'always',

    // Запретить в функциях перед запятой пробел
    'function-comma-space-before': 'never',

    // Ограничить количество соседних пустых строк внутри функций
    'function-max-empty-lines': 0,

    // Разрешить новую строку и пробелы внутри круглых скобок многострочных функций
    'function-parentheses-newline-inside': 'never-multi-line',

    // Запретить пробелы внутри скобок функций
    'function-parentheses-space-inside': 'never',

    // Требовать пробелы между функциями
    'function-whitespace-after': 'always',

    // Запретить начальный нуль для дробных чисел меньше 1
    'number-leading-zero': 'never',

    // Запретить ненужные нули в дробных значениях
    'number-no-trailing-zeros': true,

    // Строки должны быть в одинарных кавычках
    'string-quotes': 'single',

    // Разрешить только строчные буквы для единиц измерения
    'unit-case': 'lower',

    // Разрешить новую строку и пробелы после запятых в списках значений
    'value-list-comma-newline-after': 'never-multi-line',

    // Разрешить новую строку и пробелы перед запятыми в списках значений
    'value-list-comma-newline-before': 'never-multi-line',

    // Требовать один пробел после запятых в списках значений
    'value-list-comma-space-after': 'always',

    // Запретить пробел после запятых в списках значений
    'value-list-comma-space-before': 'never',

    // Ограничить количество соседних пустых строк в списках значений
    'value-list-max-empty-lines': 0,

    // Требовать только строчные буквы для свойств
    'property-case': 'lower',

    // Запретить пробел после символа `!`
    'declaration-bang-space-after': 'never',

    // Требовать пробел перед символом `!`
    'declaration-bang-space-before': 'always',

    // Требовать новую строку после двоеточия, если значение объявления многострочное
    'declaration-colon-newline-after': 'always-multi-line',

    // Требовать пробел после двоеточия
    'declaration-colon-space-after': 'always',

    // Запретить пробел перед двоеточием
    'declaration-colon-space-before': 'never',

    // Запретить пустые строки между правилами
    'declaration-empty-line-before': 'never',

    // Требовать после точки с запятой перенос строки
    'declaration-block-semicolon-newline-after': 'always',

    // Запретить в многострочных правилах пробелы перед точками с запятой
    'declaration-block-semicolon-newline-before': 'never-multi-line',

    // Запретить пробелы после точек с запятой в блоках объявлений
    'declaration-block-semicolon-space-after': 'off',

    // Запретить пробелы перед точками с запятой в блоках объявлений
    'declaration-block-semicolon-space-before': 'never',

    // Требовать точку с запятой после последнего правила
    'declaration-block-trailing-semicolon': 'always',

    // Запретить пустую строку перед закрывающей скобкой в блоке
    'block-closing-brace-empty-line-before': 'never',

    // Требовать после закрывающей скобки символ новой строки
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else'],
      },
    ],

    // Требовать перед закрывающей скобкой символ новой строки
    'block-closing-brace-newline-before': 'always-multi-line',

    // Требовать пробел после закрывающей скобки в однострочных блоках
    'block-closing-brace-space-after': 'always-single-line',

    // Требовать пробел перед закрывающей скобки в однострочных блоках
    'block-closing-brace-space-before': 'always-single-line',

    // Требовать новую строку после открывающей скобки в многострочных блоках
    'block-opening-brace-newline-after': 'always-multi-line',

    // Запретить новую строку перед открывающей скобки в многострочных блоках
    'block-opening-brace-newline-before': 'never-single-line',

    // Требовать один пробел после открывающей фигурной скобки в однострочных блоках
    'block-opening-brace-space-after': 'always-single-line',

    // Требовать один пробел перед открывающей фигурной скобкой
    'block-opening-brace-space-before': 'always',

    // Запретить пробелы внутри скобок в селекторах атрибутов
    'selector-attribute-brackets-space-inside': 'never',

    // Запретить пробелы после операторов в селекторах атрибутов
    'selector-attribute-operator-space-after': 'never',

    // Запретить пробелы перед операторами в селекторах атрибутов
    'selector-attribute-operator-space-before': 'never',

    // Требовать пробел после комбинаторов селекторов
    'selector-combinator-space-after': 'always',

    // Требовать пробел перед комбинатором селекторов
    'selector-combinator-space-before': 'always',

    // Запретить не пробельные символы для потомков селекторов
    'selector-descendant-combinator-no-non-space': true,

    // Ограничить количество соседних пустых строк в селекторах
    'selector-max-empty-lines': 0,

    // Разрешить только строчные буквы для селекторов псевдоклассов
    'selector-pseudo-class-case': 'lower',

    // Запретить пробелы внутри круглых скобок в селекторах псевдоклассов
    'selector-pseudo-class-parentheses-space-inside': 'never',

    // Разрешить только строчные буквы для селекторов псевдоэлементов
    'selector-pseudo-element-case': 'lower',

    // Требовать новую строку после запятой в списках селекторов
    'selector-list-comma-newline-after': 'always',

    // Запретить пробелы перед запятыми в многострочных списках селекторов
    'selector-list-comma-newline-before': 'never-multi-line',

    // Требовать пробел после запятых в однострочных списках селекторов
    'selector-list-comma-space-after': 'always-single-line',

    // Запретить пробелы перед запятыми в списках селекторов
    'selector-list-comma-space-before': 'never',

    // Требовать пробел после двоеточия в медиа функциях
    'media-feature-colon-space-after': 'always',

    // Запретить пробел перед двоеточием в медиа функциях
    'media-feature-colon-space-before': 'never',

    // Разрешить только строчные буквы для имен медиа функций
    'media-feature-name-case': 'lower',

    // Запретить пробелы внутри круглых скобок в медиа функциях
    'media-feature-parentheses-space-inside': 'never',

    // Требовать пробел после оператора диапазона в медиа функциях
    'media-feature-range-operator-space-after': 'always',

    // Требовать пробел перед оператором диапазона в медиа функциях
    'media-feature-range-operator-space-before': 'always',

    // Требовать новую строку после запятых в многострочных списках медиазапросов
    'media-query-list-comma-newline-after': 'always-multi-line',

    // Запретить пробелы перед запятыми в многострочных списках медиазапросов
    'media-query-list-comma-newline-before': 'never-multi-line',

    // Требовать пробел после запятых в однострочных списках медиа-запросов
    'media-query-list-comma-space-after': 'always-single-line',

    // Запретить пробелы перед запятыми в списках медиазапросов
    'media-query-list-comma-space-before': 'never',

    // Разрешить только строчные буквы для имён at-правил
    'at-rule-name-case': 'lower',

    // Не отслеживать новую строку после имён at-правил
    'at-rule-name-newline-after': null,

    // Требовать пробел после имен однострочных at-правил
    'at-rule-name-space-after': 'always-single-line',

    // Требовать новую строку после точки с запятой at-правил
    'at-rule-semicolon-newline-after': 'always',

    // Запретить пробел перед точкой с запятой в at-правилах
    'at-rule-semicolon-space-before': 'never',

    // Количество пробелов в отступе вложенности
    'indentation': 2,

    // Разрешить разрывы строк только unix
    'linebreaks': 'unix',

    // Ограничить количество соседних пустых строк
    'max-empty-lines': 1,

    // Ограничить длину строки
    'max-line-length': 120,

    // Запретить пустуй строку в начале кода
    'no-empty-first-line': true,

    // Запретить пробелы в конце строки
    'no-eol-whitespace': true,

    // Запретить лишние точки с запятой
    'no-extra-semicolons': true,

    // Требовать символ новой строки в конце кода
    'no-missing-end-of-source-newline': true,

    // Запретить знак порядка байтов Unicode
    'unicode-bom': 'never',

    // endregion Handled by pretty printers

    /** endregion Enforce stylistic conventions */
  },
};
