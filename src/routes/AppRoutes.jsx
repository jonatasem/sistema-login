
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom"

import Register from "../components/Register"
import App from "../App"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <RouterRoutes>
                <Route path="/" element={<App />} />
                <Route path="/register" element={<Register />} />
            </RouterRoutes>
        </BrowserRouter>
    )
}

export default AppRoutes