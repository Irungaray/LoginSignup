import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#00b8d4',
    },
    background: {
      default: '#111111',
      paper: '#565656',
    },
    secondary: {
      main: '#ffea00',
    },
    text: {
      primary: '#fdf8f8',
    },
    error: {
      main: '#ff1744',
    },
    info: {
      main: '#43a047',
    },
  },
  typography: {
    fontFamily: 'Ubuntu Mono',
    color: '#fdf8f8',
    button: {
      fontWeight: 900,
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
})

export { theme }
