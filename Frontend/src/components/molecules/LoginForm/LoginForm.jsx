// Utils & conf
import { useFormData } from "../../../hooks/useFormData"

// Ext comps
import { Box } from "@mui/material"

// Int comps
import {
    Button,
    Input,
    PasswordInput,
    Typhy,
    Link
} from "../../atoms"

import { useSx } from "./styles"

const LoginForm = () => {
    const { customBox } = useSx()
    const [ formData, setFormData ] = useFormData({
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formData)
    }

    return (
        <>
            <Typhy v="h4" text="Login" />

            <Input
                name="email"
                type="email"
                label="Email"
                autoFocus
                onChange={setFormData}
            />

            <PasswordInput onChange={setFormData} />

            <Box sx={customBox}>
                <Link v="body2" text="Register" to="#" />

                <Button
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
