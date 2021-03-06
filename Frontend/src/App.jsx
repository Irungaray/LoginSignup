// Ext comps
import { Box } from "@mui/material"

// Int comps
import { LoginForm } from "./components/molecules/LoginForm/LoginForm"

import { useSx } from "./styles"

const App = () => {
    const { mainBox } = useSx()

    return (
        <Box sx={mainBox}>
            <LoginForm />
        </Box>
    )
}

export { App }
