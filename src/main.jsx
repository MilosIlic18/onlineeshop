import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// clerk
import { ClerkProvider } from '@clerk/clerk-react'
// router
import { createBrowserRouter, RouterProvider } from 'react-router'
// layout
import AppLayout from './AppLayout.jsx'
// redux
import {Provider} from 'react-redux'
import store from './store/store.js'
// pages
import HomePage from './pages/HomePage.jsx'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

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
    <Provider store={store}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <RouterProvider router={router}/>
      </ClerkProvider>
    </Provider>
  </StrictMode>,
)
