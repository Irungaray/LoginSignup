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
    Text,
    Link
} from "../../atoms"

import { useSx } from "./styles"

const LoginForm = () => {
    const { customBox } = useSx()
    const [ formData, setFormData ] = useFormData({
        email: "vamoave@asd.com",
        password: "pasdsadasd12342a"
    })

    const [ handleLoginReq, data, error, loading ] = useRequest(
        () => login(formData.email, formData.password),
        () => console.log("Te logeaste capo"),
        () => console.log("Error capo", error.data)
    )

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

            {loading &&
                <Text v="body2" text="Loading" />
            }

            {error &&
                <Text v="body2" color="error" text={error.data} />
            }

            <Box sx={customBox}>
                <Link v="body2" text="Register" to="#" />

                <Button
                    text="Login"
                    onClick={handleLoginReq}
                    variant="contained"
                    sx={{ width: 100 }}
                />
            </Box>
        </>
    )
}

export { LoginForm }
