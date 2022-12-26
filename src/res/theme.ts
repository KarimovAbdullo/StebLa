import { DefaultTheme } from '@react-navigation/native'

const theme = {
  light: {
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      // Default background color, prevents flickering
      backroundPrimary: '#fafafa',
      backroundSecondary: '#eeeeee',

      textPrimary: '#0B1F35',
      textSecondary: '#6D7986',
      textTertiary: '#B0B6BE',

      iconPrimary: '#0B1F35',
      iconSecondary: '#6D7986',
      iconLine: '#BCBCBC',
    },
  },
  dark: {
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      // Default background color, prevents flickering
      backroundPrimary: '#fafafa',
      backroundSecondary: '#eeeeee',

      textPrimary: '#0B1F35',
      textSecondary: '#6D7986',
      textTertiary: '#B0B6BE',

      iconPrimary: '#0B1F35',
      iconSecondary: '#6D7986',
      iconLine: '#BCBCBC',
    },
  },
}

export type TTheme = typeof theme.light & typeof theme.dark
export type TThemeColors = typeof theme.light.colors & typeof theme.dark.colors

export default theme
