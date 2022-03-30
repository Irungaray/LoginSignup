// Utils & conf
import { useContext } from "preact/hooks"
import { Redirect } from "react-router-dom";

// Int modules
import { useFormData, useRequest } from "../../../hooks"
import { SessionContext } from "../../../context/SessionContext"
import { validateSignup } from "../../../helpers/utils/validateSignup"
import { signup, login } from "../../../helpers/requests/auth"

// Int comps
import { Button, Input, PasswordInput, Text, Link } from "../../atoms"
import { CustomStack } from "../../containers"

const SignupForm = () => {
    const { isLogged, setIsLogged } = useContext(SessionContext);

    const [formData, setFormData] = useFormData({
        email: "",
        password: "",
        passwordConfirmation: "",
        name: "",
    })
    const { email, password, passwordConfirmation, name } = formData
    const disabled = validateSignup(email, password, passwordConfirmation, name)

    const [handleSignupReq, signupLoading, signupRes, signupErr] = useRequest(
        () => signup(email, password, passwordConfirmation, name),
        () => handleSuccesfulSignup(),
        () => console.log("Error on signup", signupErr)
    )

    const [handleLoginReq, loginLoading, loginRes, loginErr] = useRequest(
        () => login(email, password),
        () => handleSuccesfulLogin(),
        () => console.log("Error on login", loginErr)
    )

    const handleSuccesfulSignup = () => {
        console.log("Successful signup", signupRes)
        handleLoginReq()
    }

    const handleSuccesfulLogin = () => {
        console.log("Successful login", loginRes)
        setIsLogged(true)
    }

    if (isLogged) return <Redirect to="/home" />

    // Fix: This could be a warning toast
    // if (isLogged) return (
    //     <>
    //         <Text v="h4" text="You are already logged in." />
    //         <Text v="h4" text="Please, logout in order to register." sx={{ mt: 2 }} />
    //     </>
    // )

    return (
        <>
            <Text v="h4" text="Register" />

            <Input
                name="name"
                label="Name"
                onChange={setFormData}
            />

            {/* Fix endpoint for this */}
            <Input
                name="lastName"
                label="Last name"
                onChange={setFormData}
            />

            <Input
                name="email"
                type="email"
                label="Email"
                onChange={setFormData}
            />

            <PasswordInput
                name="password"
                onChange={setFormData}
            />

            <PasswordInput
                name="passwordConfirmation"
                label="Password confirmation"
                onChange={setFormData}
            />

            {signupErr && signupErr.data.map((err) => (
                <Text v="h6" color="error" text={err.message} />
            ))}

            {loginErr &&
                <Text v="h6" color="error" text={loginErr.data} />
            }


            <CustomStack>
                <Link v="body1" text="Login" to="/" />

                <Button
                    text="Register"
                    disabled={disabled}
                    loading={signupLoading}
                    onClick={handleSignupReq}
                    variant="contained"
                    sx={{ width: 100 }}
                />
            </CustomStack>
        </>
    )
}

export { SignupForm }
