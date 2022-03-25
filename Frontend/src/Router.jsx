// Int comps
import { Login, Signup, NotFound, Home } from "./components/pages"

// Ext comps
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/signup" element={<Signup />} />

                <Route path="/home" element={<Home />} />

                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </BrowserRouter>
    )
}

export { Router }
