// Int comps
import { Login, Signup, NotFound, Home } from "./components/pages"
import { PublicRoute, ProtectedRoute } from "./helpers/routes"

// Ext comps
import { BrowserRouter, Switch } from "react-router-dom"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute exact path="/" component={<Login />} />

                <PublicRoute exact path="/signup" component={<Signup />} />

                <PublicRoute exact path="/home" component={<Home />} />

                <PublicRoute exact path="*" component={ <NotFound /> } />
            </Switch>
        </BrowserRouter>
    )
}

export { Router }
