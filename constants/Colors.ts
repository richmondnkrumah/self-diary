/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

interface NOTE_COLOR {
    main_color: string,
    highlight_color: string
  
}

export const PRIMARY_COLOR = '#0E0213'
export const HIGHLIGHT_GRAY_COLOR = '#D6D6D6'

const MAIN_RED = '#FFEBEB'
const HIGHLIGHT_RED = '#FF8585' 

const MAIN_YELLOW = '#FFE1C2'
const HIGHLIGHT_YELLOW = '#FFB870'

const MAIN_GREEN = '#D6FFD6'
const HIGHLIGHT_GREEN = '#ADFFAD'

const MAIN_ORANGE = '#FFEBD6'
const HIGHLIGHT_ORANGE = '#FFD8AD'

const MAIN_BLUE = '#D6D6FF'
const HIGHLIGHT_BLUE = '#C2C2FF'

const MAIN_INDIGO = '#EDD6FF'
const HIGHLIGHT_INDIGO = '#DCADFF'

export const NOTE_COLORS: NOTE_COLOR[] = [
  {
    main_color: MAIN_RED,
    highlight_color: HIGHLIGHT_RED
  },
  {
    main_color: MAIN_YELLOW,
    highlight_color: HIGHLIGHT_YELLOW
  },
  {
    main_color: MAIN_BLUE,
    highlight_color: HIGHLIGHT_BLUE
  },
  {
    main_color: MAIN_GREEN,
    highlight_color: HIGHLIGHT_GREEN
  },
  {
    main_color: MAIN_INDIGO,
    highlight_color: HIGHLIGHT_INDIGO
  },
  {
    main_color: MAIN_ORANGE,
    highlight_color: HIGHLIGHT_ORANGE
  }
]