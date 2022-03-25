import Axios from "axios"

let apiUri = import.meta.env.VITE_API_URI

export const getActiveSessions = async () => {
    try {
        const res = await Axios({
            method: "GET",
            url: `${apiUri}/sessions`,
            withCredentials: true
        })

        return res
    } catch (err) {
        return err
    }
}
