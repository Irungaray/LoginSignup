// Utils & conf
import { useFormData, useRequest } from "../../../hooks"
import { getActiveSessions } from "../../../helpers/requests/misc"
import { useEffect } from "preact/hooks"
import { CustomBox } from "../../containers"

// Int comps
import { Text } from "../../atoms"

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
                <Text v="h4" text="Active users:" />

                {response && response.data.map((user) => (
                    <li>
                        User: {user.user},
                        Created At: {user.createdAt},
                        Agent: {user.userAgent}
                        {/* Valid: {user.valid === true ? "valid" : "invalid"} */}
                    </li>
                ))}
            </CustomBox>
        </>
    )
}

export { Home }
