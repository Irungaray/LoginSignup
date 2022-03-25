// Ext comps
import { Box, Link } from "@mui/material"
import { CustomButton } from "../../atoms/CustomButton/CustomButton"

// Int comps
import { Input } from "../../atoms/Input"
import { PasswordInput } from "../../atoms/PasswordInput"
import { Typhy } from "../../atoms/Typhy/Typhy"

import { useSx } from "./styles"

const LoginForm = () => {

    const { customBox } = useSx()

    const handleChange = (e) => {}

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <Typhy v="h4" text="Login" />

            <Input
                type="email"
                label="Email"
                autoFocus
                onChange={handleChange}
            />

            <PasswordInput onChange={handleChange} />

            <Box sx={customBox}>
                <Link variant="body2" underline="hover" color="text" ml={2}>Register</Link>

                <CustomButton
                    text="Login"
                    onClick={handleSubmit}
                    variant="contained"
                    sx={{ width: 100 }}
                />
            </Box>
        </>
    )
}

export { LoginForm }
