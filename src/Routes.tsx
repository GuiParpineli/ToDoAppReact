import {
    BrowserRouter,
    Routes,
    Route,
    Router,
} from "react-router-dom";

import { Login } from './pages/login/Login'
import { Signup } from './pages/signup/Signup'

export function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>

        </BrowserRouter>
    )
}