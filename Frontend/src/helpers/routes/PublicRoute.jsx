// Ext comps
import { Route } from "react-router-dom"

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}

            render={() => {
                return Component
            }}
        />
    )
}

export { PublicRoute }
