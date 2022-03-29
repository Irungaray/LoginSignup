// Ext comps
import { Route, Redirect } from "react-router-dom"

import { useContext } from "preact/hooks"
import { SessionContext } from "../../context/SessionContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { isLogged, setIsLogged } = useContext(SessionContext);

    return (
        <Route
            {...rest}

            render={(props) => {
                if (isLogged) {
                    return Component
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: props.location },
                            }}
                        />
                    )
                }
            }}
        />
    )
}

export { ProtectedRoute }
