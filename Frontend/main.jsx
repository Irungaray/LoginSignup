// Ext modules
import { render } from 'preact'
import { ThemeProvider, CssBaseline } from '@mui/material'

// Int modules
import { Router } from './src/Router'

// Styles
import { theme } from './src/styles/theme'
import './src/styles/index.css'

const Main = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />

        <Router />
    </ThemeProvider>
)

const root = document.getElementById('root')

render(<Main />, root)
