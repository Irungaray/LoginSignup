import { emailRegex } from "./regex"

export const validateSignup = (email, password, passwordConfirmation, name) => {
    let isEmail = emailRegex.test(email)
    let isPsw = password.length >= 6
    let isPswConfirm = passwordConfirmation === password
    let isName = name.length > 3

    if (isEmail && isPsw && isPswConfirm && isName) return false
    return true
}
