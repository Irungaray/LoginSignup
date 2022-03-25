// Ext modules
import { render } from 'preact'
import { ThemeProvider, CssBaseline } from '@mui/material'

// Int modules
import { App } from './App'

// Styles
import { theme } from './styles/theme'
import './styles/index.css'

const Main = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />

        <App />
    </ThemeProvider>
)

const root = document.getElementById('root')

render(<Main />, root)
