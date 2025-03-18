import { Outlet } from 'react-router'
import { useState } from 'react'
// axios
import axios from 'axios'
// components
import HeaderComponent from './components/HeaderComponent'
import NavbarComponent from './components/NavbarComponent'
import CategoryComponent from './components/CategoryComponent'
import FooterComponent from './components/FooterComponent'


axios.defaults.baseURL = 'https://dummyjson.com'

function AppLayout() {
  const [activeHeader,setActiveHeader] = useState(true)
  return (
    <div>
      {activeHeader && <HeaderComponent setActiveHeader={setActiveHeader} />}
      <NavbarComponent />
      <CategoryComponent />
      <div className='min-h-screen'>
        <Outlet/>
      </div>
      <FooterComponent/>
    </div>
  )
}

export default AppLayout
