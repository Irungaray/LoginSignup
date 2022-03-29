import Axios from "axios"

let apiUri = import.meta.env.VITE_API_URI

export const login = async (email, password) => {
    try {
        const res = await Axios({
            method: "POST",
            url: `${apiUri}/sessions`,
            data: {
                email,
                password
            },
            withCredentials: true
        })

        return res
    } catch (err) {
        return err
    }
}

export const signup = async (email, password, passwordConfirmation, name) => {
    try {
        const res = await Axios({
            method: "POST",
            url: `${apiUri}/users`,
            data: {
                email,
                password,
                passwordConfirmation,
                name,
            }
        })

        return res
    } catch (err) {
        return err
    }
}

export const refreshSession = async () => {
    try {
        const res = await Axios({
            method: 'GET',
            url: `${apiUri}/refresh`,
            withCredentials: true
        })

        return res
    } catch (err) {
        return err
    }
}
