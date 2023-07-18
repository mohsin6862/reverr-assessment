import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import './index.css'
import router from './Routes/Routes.jsx'
import AuthProvider from './AuthProvider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='w-full max-w-6xl mx-auto'>
<AuthProvider>  <RouterProvider router={router} /></AuthProvider>
  </div>
  </React.StrictMode>,
)