// Utils & conf
import { useFormData, useRequest } from "../../../hooks"
import { getActiveSessions } from "../../../helpers/requests/misc"
import { useEffect } from "preact/hooks"

const Home = () => {
    const [ handleActiveSessionsReq, loading, data, error ] = useRequest(
        () => getActiveSessions(),
        () => console.log("Exito", data),
        () => console.log("Error capo", error)
    )

    useEffect(() => {
        handleActiveSessionsReq()
    }, [])

    return (
        <>
            {loading && "Loading"}

            {data && JSON.stringify(data)}

            Please login
        </>
    )
}

export { Home }
