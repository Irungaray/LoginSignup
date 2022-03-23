// Int comps
import { Login, Register, NotFound } from "./components/pages"

// Ext comps
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </BrowserRouter>
    )
}

export { Router }
