// Utils & conf
import { useFormData, useRequest } from "../../../hooks"
import { validateLogin } from "../../../helpers/utils/validateLogin"
import { login } from "../../../helpers/requests/auth"

// Ext comps
import { Box } from "@mui/material"

// Int comps
import {
    Button,
    Input,
    PasswordInput,
    Text,
    Link
} from "../../atoms"

import { useSx } from "./styles"

const LoginForm = () => {
    const { customBox } = useSx()
    const [ formData, setFormData ] = useFormData({
        email: "",
        password: ""
    })

    const { email, password } = formData

    const [ handleLoginReq, loading, data, error, setError ] = useRequest(
        () => login(email, password),
        () => console.log("Te logeaste capo"),
        () => console.log("Error capo", error)
    )

    const disabled = validateLogin(email, password)

    return (
        <>
            <Text v="h4" text="Login" />

            <Input
                name="email"
                type="email"
                label="Email"
                autoFocus
                onChange={setFormData}
            />

            <PasswordInput onChange={setFormData} />

            {error &&
                <Text v="body2" color="error" text={error} />
            }

            <Box sx={customBox}>
                <Link v="body1" text="Register" to="/register" />

                <Button
                    text="Login"
                    disabled={disabled}
                    loading={loading}
                    onClick={handleLoginReq}
                    variant="contained"
                    sx={{ width: 100 }}
                />
            </Box>
        </>
    )
}

export { LoginForm }
