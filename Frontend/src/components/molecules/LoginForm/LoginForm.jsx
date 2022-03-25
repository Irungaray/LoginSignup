// Utils & conf
import { useNavigate } from "react-router-dom";
import { useFormData, useRequest } from "../../../hooks"
import { validateLogin } from "../../../helpers/utils/validateLogin"
import { login } from "../../../helpers/requests/auth"

// Int comps
import {
    Button,
    Input,
    PasswordInput,
    Text,
    Link
} from "../../atoms"
import { CustomStack } from "../../containers/"
import { useEffect } from "preact/hooks";

const LoginForm = () => {
    let navigate = useNavigate();

    const [ formData, setFormData ] = useFormData({
        email: "test@test.com",
        password: "testpass"
    })

    const { email, password } = formData

    const handleLogin = () => {

        console.log("Te logeaste capo")

        navigate("/home")
    }


    const [ handleLoginReq, loading, data, error, setError ] = useRequest(
        () => login(email, password),
        () => handleLogin(),
        () => console.log("Error capo", error)
    )

    useEffect(() => {
        if (data) navigate("/home")
    }, [data])

    const disabled = validateLogin(email, password)

    return (
        <>
            <Text v="h4" text="Login" />

            <Input
                value={email}
                name="email"
                type="email"
                label="Email"
                autoFocus
                onChange={setFormData}
            />

            <PasswordInput value={password} onChange={setFormData} />

            {error &&
                <Text v="h6" color="error" text={error} />
            }

            <CustomStack>
                <Link v="body1" text="Register" to="/register" />

                <Button
                    text="Login"
                    disabled={disabled}
                    loading={loading}
                    onClick={handleLoginReq}
                    variant="contained"
                    sx={{ width: 100 }}
                />
            </CustomStack>
        </>
    )
}

export { LoginForm }
