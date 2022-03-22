// Ext comps
import { Box, Typography } from "@mui/material"

// Int comps
import { PasswordInput } from "./components/atoms/PasswordInput/PasswordInput"

const App = () => {
    return (
        <Box>
            <Typography variant="h1" >Hello Vite + Preact + MUI!</Typography>
            <PasswordInput />
        </Box>
    )
}

export { App }
