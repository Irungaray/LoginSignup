// Utils & conf
import { useFormData, useRequest } from "../../../hooks"
import { getActiveSessions } from "../../../helpers/requests/misc"
import { useEffect } from "preact/hooks"
import { CustomBox } from "../../containers"

const Home = () => {
    const [ handleActiveSessionsReq, loading, response, error ] = useRequest(
        () => getActiveSessions(),
        () => console.log(response),
        () => console.log("Error retrieving sessions", error)
    )

    useEffect(() => {
        handleActiveSessionsReq()
    }, [])

    return (
        <>
            {loading && "Loading"}

            <CustomBox>
                {response && response.data.map((user) => (
                    <li>
                        User: {user.user},
                        Created At: {user.createdAt}
                        Agent: {user.userAgent}
                    </li>
                ))}
            </CustomBox>
        </>
    )
}

export { Home }
