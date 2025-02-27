import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// router
import { createBrowserRouter, RouterProvider } from 'react-router'
// layout
import AppLayout from './AppLayout.jsx'
// pages
import HomePage from './pages/HomePage.jsx'



const router = createBrowserRouter([
  {
    path:'/', element:<AppLayout/>,
    errorElement:<div>Error Page</div>,
    children:[
      {path:'/',element:<HomePage/>}
    ]
  }]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
