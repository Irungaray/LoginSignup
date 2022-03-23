// Utils & conf
import { useFormData, useRequest } from "../../../hooks"

import { login } from "../../../helpers/requests/auth"

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
        email: "vamoave@asd.com",
        password: "pasdsadasd12342a"
    })

    const [ handleSubmit ] = useRequest(
        () => login(formData.email, formData.password)
    )

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
