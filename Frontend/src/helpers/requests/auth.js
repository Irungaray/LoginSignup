import Axios from "axios"

let apiUri = import.meta.env.VITE_API_URI

export const login = async (user, password) => {
    try {
        const res = await Axios({
            method: "POST",
            url: `${apiUri}/sessions`,
            data: {
                email: user,
                password: password
            }
        })

        return res
    } catch (err) {
        return err
    }
}
