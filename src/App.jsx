
import React from 'react'
import './App.scss'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/home/Home'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import Gigs from './pages/gigs/Gigs'
import Gig from './pages/gig/gig'
import Commandes from './pages/commandes/Commandes'
import MesOffres from './pages/mesOffres/MesOffres'
import Add from './pages/add/Add'
import Messages from './pages/messages/Messages'
import Message from './pages/message/Message'


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
      },
      {
        path: '/Gigs',
        element: <Gigs />
      },
      {
        path: '/gig/:id',
        element: <Gig />
      },
      {
        path: '/commandes',
        element: <Commandes />
      },
      {
        path: '/mesOffres',
        element: <MesOffres />
      },
      {
        path: '/add',
        element: <Add />
      },
      {
        path: '/messages',
        element: <Messages />
      },
      {
        path: '/message/:id',
        element: <Message />
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
