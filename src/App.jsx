
import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } 

from 'react-router-dom'
import Home from './pages/home/Home'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'

//import NavBar from './components/NavBar'

function App() {

  const Layout = () => {
    return (
      <div className='app'>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    )
  }
  
  const router = createBrowserRouter([
    {
      path: '/',
    element : <Layout />,
    children : [
      {
        path: '/',
        element: <Home />
      }
    ]
    }
  ])

  return (
    <div>
    <RouterProvider router={router} />
    </div>
  )
}

export default App
