/** @type {import("stylelint").Config} */
const animation = [
  'transition',
  'transition-delay',
  'transition-timing-function',
  'transition-duration',
  'transition-property',
  'animation',
  'animation-name',
  'animation-duration',
  'animation-play-state',
  'animation-timing-function',
  'animation-delay',
  'animation-iteration-count',
  'animation-direction',
  'animation-fill-mode',
]
const border = [
  'border',
  'border-color',
  'border-style',
  'border-width',
  'border-top',
  'border-top-color',
  'border-top-width',
  'border-top-style',
  'border-right',
  'border-right-color',
  'border-right-width',
  'border-right-style',
  'border-bottom',
  'border-bottom-color',
  'border-bottom-width',
  'border-bottom-style',
  'border-left',
  'border-left-color',
  'border-left-width',
  'border-left-style',
  'border-radius',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-bottom-right-radius',
  'border-bottom-left-radius',
  'border-image',
  'border-image-source',
  'border-image-slice',
  'border-image-width',
  'border-image-outset',
  'border-image-repeat',
  'border-collapse',
  'border-spacing',
]

const boxModelPartOne = [
  'display',
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'grid',
  'grid-area',
  'grid-auto-rows',
  'grid-auto-columns',
  'grid-auto-flow',
  'grid-gap',
  'grid-row',
  'grid-row-start',
  'grid-row-end',
  'grid-row-gap',
  'grid-column',
  'grid-column-start',
  'grid-column-end',
  'grid-column-gap',
  'grid-template',
  'grid-template-areas',
  'grid-template-rows',
  'grid-template-columns',
  'gap',
  'align-content',
  'align-items',
  'align-self',
  'justify-content',
  'justify-items',
  'justify-self',
  'place-content',
  'place-items',
  'place-self',
  'order',
  'float',
  'clear',
  'box-sizing',
  'width',
  'min-width',
  'max-width',
  'height',
  'min-height',
  'max-height',
  'margin',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
]

const boxModelPartTwo = [
  'object-fit',
  'object-position',
  'overflow',
  'overflow-x',
  'overflow-y',
]

const boxModel = ({ borderProps }) =>
  [].concat(boxModelPartOne, borderProps ? border : [], boxModelPartTwo)

const misc = [
  'appearance',
  'content',
  'clip',
  'clip-path',
  'counter-reset',
  'counter-increment',
  'resize',
  'user-select',
  'nav-index',
  'nav-up',
  'nav-right',
  'nav-down',
  'nav-left',
  'pointer-events',
  'quotes',
  'touch-action',
  'will-change',
  'zoom',
  'fill',
  'fill-rule',
  'clip-rule',
  'stroke',
]

const positioning = ['position', 'top', 'right', 'bottom', 'left', 'z-index']

const special = ['composes', '@import', '@extend', '@mixin', '@at-root']

const typography = [
  'color',
  'font',
  'font-weight',
  'font-size',
  'font-family',
  'font-style',
  'font-variant',
  'font-size-adjust',
  'font-stretch',
  'font-effect',
  'font-emphasize',
  'font-emphasize-position',
  'font-emphasize-style',
  'font-smooth',
  'line-height',
  'direction',
  'letter-spacing',
  'white-space',
  'text-align',
  'text-align-last',
  'text-transform',
  'text-decoration',
  'text-emphasis',
  'text-emphasis-color',
  'text-emphasis-style',
  'text-emphasis-position',
  'text-indent',
  'text-justify',
  'text-outline',
  'text-wrap',
  'text-overflow',
  'text-overflow-ellipsis',
  'text-overflow-mode',
  'text-orientation',
  'text-shadow',
  'vertical-align',
  'word-wrap',
  'word-break',
  'word-spacing',
  'overflow-wrap',
  'tab-size',
  'hyphens',
  'unicode-bidi',
  'columns',
  'column-count',
  'column-fill',
  'column-gap',
  'column-rule',
  'column-rule-color',
  'column-rule-style',
  'column-rule-width',
  'column-span',
  'column-width',
  'page-break-after',
  'page-break-before',
  'page-break-inside',
  'src',
]

const visualPartOne = [
  'list-style',
  'list-style-position',
  'list-style-type',
  'list-style-image',
  'table-layout',
  'empty-cells',
  'caption-side',
  'background',
  'background-color',
  'background-image',
  'background-repeat',
  'background-position',
  'background-position-x',
  'background-position-y',
  'background-size',
  'background-clip',
  'background-origin',
  'background-attachment',
  'background-blend-mode',
]

const visualPartTwo = [
  'outline',
  'outline-width',
  'outline-style',
  'outline-color',
  'outline-offset',
  'inset',
  'inset-block',
  'inset-block-start',
  'inset-block-end',
  'inset-inline',
  'inset-inline-start',
  'inset-inline-end',
  'box-shadow',
  'box-decoration-break',
  'transform',
  'transform-origin',
  'transform-style',
  'backface-visibility',
  'perspective',
  'perspective-origin',
  'visibility',
  'cursor',
  'opacity',
  'filter',
  'isolation',
  'backdrop-filter',
  'mix-blend-mode',
]

const visual = ({ borderProps }) =>
  [].concat(visualPartOne, borderProps ? border : [], visualPartTwo)

const borderInBoxModel = false
// 设置css属性顺序组间是否有空格
const emptyLineBetweenGroups = true

module.exports = {
  // extends: ['stylelint-config-rational-order'],
  // 开启html文件的stylelint校验，支持HTML和HTML-like（xml、vue、svelte、astro、php）[未测试]
  extends: ['stylelint-config-html'],
  plugins: ['stylelint-order'],
  ignoreFiles: ['**/*.js'],
  rules: {
    // 未知的@rule设置，https://www.stylelint.cn/user-guide/rules
    'at-rule-no-unknown': [
      true,
      {
        // 忽略@开头的下列规则，不是css属性写法 @if {} 或 @if ''
        ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin'],
      },
    ],
    // 空注释设置，https://www.stylelint.cn/user-guide/rules
    'comment-no-empty': true,
    // 双斜线的单行注释设置，https://www.stylelint.cn/user-guide/rules
    'no-invalid-double-slash-comments': true,
    // 注释前空行设置，目前无法配置到排序组内无空行而排序组间有空行，尽量不要让注释占据单行或者在组间进行注释，https://www.stylelint.cn/user-guide/rules
    'comment-empty-line-before': 'never',
    // 标准属性声明前空行设置，https://www.stylelint.cn/user-guide/rules
    'declaration-empty-line-before': [
      // 开启标准属性声明前空行设置，不包括自定义属性、less、sass变量等
      'always',
      // 忽略的情况 声明之后 第一行 注释之后
      { ignore: ['after-declaration', 'first-nested', 'after-comment'] },
    ],
    // 长度未零时的没有单位设置，https://www.stylelint.cn/user-guide/rules
    'length-zero-no-unit': true,
    // 未知css属性报错提醒，https://www.stylelint.cn/user-guide/rules
    'property-no-unknown': [
      // 开启未知css属性报错提醒
      true,
      {
        // 忽略未知的css属性报错提醒
        ignoreProperties: special,
      },
    ],
    // https://github.com/hudochenkov/stylelint-order/blob/3a6ece9e8fb346442b2d67237bc1854e9619c058/rules/order/README.md
    'order/order': ['dollar-variables', 'custom-properties', 'declarations'],
    // https://github.com/hudochenkov/stylelint-order/blob/HEAD/rules/properties-order/README.md
    'order/properties-order': [
      [
        ['Special', special],
        ['Positioning', positioning],
        ['Box Model', boxModel({ borderProps: borderInBoxModel })],
        ['Typography', typography],
        ['Visual', visual({ borderProps: !borderInBoxModel })],
        ['Animation', animation],
        ['Misc', misc],
      ].map(([groupName, properties]) => ({
        emptyLineBefore: emptyLineBetweenGroups ? 'always' : 'never',
        noEmptyLineBetween: true,
        properties,
        groupName,
      })),
      {
        // 未分组的css属性排在最底部，需要是css属性没列入上面的排序分组中，当有多个时排序不分先后
        unspecified: 'bottom',
        // 未分组的css属性前要有空行的条件
        emptyLineBeforeUnspecified: 'always',
        // 未分组的css属性前要有空行的阈值，即当上方设置为threshold且css属性超过4个时，未分组的css属性上方会有空行
        emptyLineMinimumPropertyThreshold: 4,
      },
    ],
  },
  // "fix": true
}
