import { emailRegex } from "./regex"

export const validateLogin = (email, password) => {
    let isEmail = emailRegex.test(email)
    let isPsw = password.length > 6

    if ( isEmail && isPsw ) return false
    return true
}
