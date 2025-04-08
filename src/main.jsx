import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import WebRoutes from './routes/WebRoutes';


import {
  RouterProvider,
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={WebRoutes} />


  </React.StrictMode>,
)
