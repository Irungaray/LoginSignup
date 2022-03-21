// Ext modules
import { render } from 'preact'
import { ThemeProvider } from '@mui/material/styles'

// Int modules
import { App } from './App'

import { theme } from './styles/theme'
import './styles/index.css'

const Main = () => (
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
)

const root = document.getElementById('root')

render(<Main />, root)
