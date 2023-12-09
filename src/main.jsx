import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Components/Routes/Routes.jsx'
import AuthProviders from './Components/AuthProvider/AuthProviders'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={Routes}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
