import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>> {
  safelist: [
    'bg-line-1',
    'bg-line-2',
    'bg-line-4',
    'bg-line-5',
    'bg-line-11',
    'bg-line-12',
    'bg-line-13',
    'bg-line-14',
    'bg-line-15',
    'border-line-a',
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        line: {
          1: '#00ab4f',
          2: '#ff7d24',
          4: '#ffd939',
          5: '#0082ca',
          11: '#ff5f7b',
          12: '#ffdc82',
          13: '#909ece',
          14: '#52bfb5',
          15: '#d157a4',
          a: '#7dc647',
        },
        mode: {
          metro: '#009dd6',
          rem: {
            light: '#7dc647',
            dark: '#002f23',
          },
          train: '#df2f99',
          srb: '#00b183',
          bus: '#009f7b',
        },
      },
      fontFamily: {
        sans: ['Transit', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}

