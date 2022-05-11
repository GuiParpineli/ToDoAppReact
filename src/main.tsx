import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './global.css'
import { Login } from './pages/login/Login'
import { Signup } from './pages/signup/Signup'
import { AppRoutes } from './Routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
)
