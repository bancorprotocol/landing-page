// eslint-disable-next-line @typescript-eslint/no-var-requires
const merge = require('lodash/merge')

const defaultOptions = (theme) => {
  return {
    btnStyle: {
      fontWeight: theme('fontWeight.600'),
      height: '40px',
      '@apply flex items-center font-poppins px-10 text-base rounded-full border-2 transition-all duration-300 focus:outline-none outline-none focus:ring-4':
        '',
    },
    sizes: {
      xs: {
        fontSize: theme('fontSize.xs'),
        padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
      },
      sm: {
        fontSize: theme('fontSize.sm'),
        padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
      },
      lg: {
        fontSize: theme('fontSize.lg'),
        padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
      },
      xl: {
        fontSize: theme('fontSize.xl'),
        padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
      },
    },
  }
}
module.exports = function (options = {}, extend = true) {
  return function ({ addComponents, theme }) {
    if (extend) options = merge(options, defaultOptions(theme))

    const button = {
      // '.btn': options.btnStyle,
    }

    Object.keys(options.sizes).forEach((key) => {
      button[`.btn-${key}`] = options.sizes[key]
    })

    Object.keys(theme('colors')).forEach((key) => {
      if (!theme(`colors.${key}.500`) || !theme(`colors.${key}.500`)) return
      button[`.btn-${key}`] = {
        ...options.btnStyle,
        backgroundColor: theme(`colors.${key}.500`),
        color: theme('colors.white'),
        borderColor: theme(`colors.${key}.500`),
        [`@apply focus:ring-${key}-500 focus:ring-opacity-50`]: '',
        '&:hover': {
          backgroundColor: theme(`colors.${key}.800`),
          borderColor: theme(`colors.${key}.800`),
        },
        '&:active': {
          backgroundColor: theme(`colors.${key}.400`),
          borderColor: theme(`colors.${key}.400`),
        },
        '&:disabled': {
          backgroundColor: theme(`colors.${key}.500`),
          borderColor: theme(`colors.${key}.500`),
          opacity: 0.7,
          cursor: 'not-allowed',
        },
      }
    })

    Object.keys(theme('colors')).forEach((key) => {
      if (!theme(`colors.${key}.500`) || !theme(`colors.${key}.500`)) return
      button[`.btn-outline-${key}`] = {
        ...options.btnStyle,
        backgroundColor: theme(`colors.transparent`),
        borderColor: theme(`colors.${key}.500`),
        color: theme(`colors.${key}.500`),
        [`@apply focus:ring-${key}-400 focus:ring-offset-2`]: '',
        '&:hover': {
          backgroundColor: theme(`colors.${key}.500`),
          color: theme(`colors.white`),
        },
        '&:active': {
          backgroundColor: theme(`colors.${key}.700`),
          color: theme(`colors.white`),
          borderColor: theme(`colors.${key}.700`),
        },
        '&:disabled': {
          backgroundColor: theme(`colors.transparent`),
          borderColor: theme(`colors.${key}.300`),
          color: theme(`colors.${key}.500`),
          cursor: 'not-allowed',
        },
      }
    })
    addComponents(button)
  }
}
