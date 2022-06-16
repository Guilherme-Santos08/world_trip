import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,

  colors: {
    highlight: '#FFBA08',
    white: '#FFFFFF',
    headingsAndText: '#F5F8FA',
    info: '#DADADA',
  },

  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },

  styles: {
    global: {
      body: {},
    },
  },
})
