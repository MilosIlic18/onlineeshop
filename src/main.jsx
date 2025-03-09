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
import SingleProductPage from './pages/SingleProductPage.jsx'
import CartPage from './pages/CartPage.jsx'
import FavoritePage from './pages/FavoritePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

const router = createBrowserRouter([
  {
    path:'/', element:<AppLayout/>,
    errorElement:<NotFoundPage/>,
    children:[
      {path:'/',element:<HomePage/>},
      {path:'/singleProduct/:id', element:<SingleProductPage/>},
      {path:'/cart',element:<CartPage/>},
      {path:'/favorite',element:<FavoritePage/>}
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
