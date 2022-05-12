import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { Login } from './pages/login/Login'
import { Signup } from './pages/signup/Signup'
import { Tasks } from "./pages/tasks/Tasks";

export function AppRoutes() {
    return (
       
            <Routes>
                <Route path="/ToDoAppReact/" element={<Login />} />
                <Route path="/ToDoAppReact/signup" element={<Signup />} />
                <Route path="/ToDoAppReact/tasks" element={<Tasks />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        
    )
}