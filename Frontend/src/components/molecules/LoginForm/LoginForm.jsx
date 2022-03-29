// Utils & conf
import { useContext } from "preact/hooks"
import { Redirect } from "react-router-dom";

// Int modules
import { useFormData, useRequest } from "../../../hooks"
import { SessionContext } from "../../../context/SessionContext"
import { validateLogin } from "../../../helpers/utils/validateLogin"
import { login } from "../../../helpers/requests/auth"

// Int comps
import { Button, Input, PasswordInput, Text, Link } from "../../atoms"
import { CustomStack } from "../../containers/"

const LoginForm = () => {
    const { isLogged, setIsLogged } = useContext(SessionContext);

    const [ formData, setFormData ] = useFormData({
        email: "test@test.com",
        password: "testpass"
    })
    const { email, password } = formData
    const disabled = validateLogin(email, password)

    const [ handleLoginReq, loading, data, error, setError ] = useRequest(
        () => login(email, password),
        () => setIsLogged(true),
        () => console.log("Error capo", error)
    )

    if (isLogged) return <Redirect to="/home" />

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
