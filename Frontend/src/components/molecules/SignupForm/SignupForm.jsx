// Utils & conf
import { useFormData, useRequest } from "../../../hooks"
import { validateSignup } from "../../../helpers/utils/validateSignup"
import { signup } from "../../../helpers/requests/auth"

// Int comps
import { Button, Input, PasswordInput, Text, Link } from "../../atoms"
import { CustomStack } from "../../containers"

const SignupForm = () => {
    const [formData, setFormData] = useFormData({
        email: "",
        password: "",
        passwordConfirmation: "",
        name: "",
    })

    const { email, password, passwordConfirmation, name } = formData

    const [handleSignupReq, loading, data, error, setError] = useRequest(
        () => signup(email, password, passwordConfirmation, name),
        () => console.log("Succesfully signup"),
        () => console.log("Error on signup", error)
    )

    const disabled = validateSignup(email, password, passwordConfirmation, name)

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
                autoFocus
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

            {error && <Text v="h6" color="error" text={error} />}

            <CustomStack>
                <Link v="body1" text="Login" to="/" />

                <Button
                    text="Register"
                    disabled={disabled}
                    loading={loading}
                    onClick={handleSignupReq}
                    variant="contained"
                    sx={{ width: 100 }}
                />
            </CustomStack>
        </>
    )
}

export { SignupForm }
