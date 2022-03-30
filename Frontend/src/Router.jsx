// Utils & config
import { PublicRoute, ProtectedRoute } from "./helpers/routes"
import { SessionProvider } from "./context/SessionContext"

// Int comps
import { Login, Signup, NotFound, Home } from "./components/pages"
import { Header } from "./components/molecules"

// Ext comps
import { BrowserRouter, Switch } from "react-router-dom"

const Router = () => {
    return (
        <SessionProvider>
            <Header />
            <BrowserRouter>
                <Switch>
                    <PublicRoute exact path="/" component={<Login />} />

                    <PublicRoute exact path="/signup" component={<Signup />} />

                    <ProtectedRoute exact path="/home" component={<Home />} />

                    <ProtectedRoute exact path="/protec" component={<h1>Ruta protegida</h1>} />

                    <PublicRoute exact path="*" component={ <NotFound /> } />
                </Switch>
            </BrowserRouter>
        </SessionProvider>
    )
}

export { Router }
