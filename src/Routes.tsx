import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { Login } from './pages/login/Login'
import { Signup } from './pages/signup/Signup'

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}