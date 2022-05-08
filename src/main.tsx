import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login } from './pages/login/Login'
import { Signup } from './pages/signup/Signup'
import './global.css'
import { AppRoutes } from './Routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
)
