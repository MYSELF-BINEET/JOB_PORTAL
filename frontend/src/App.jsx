import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/shared/Navbar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login.jsx'
import SignUp from './components/auth/SignUp.jsx'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'


const appRouter=createBrowserRouter([
  {
    path: '/',
    element:<Home/>
  },
  {
    path: '/login',
    element:<Login/>
  },
  {
    path: '/signup',
    element:<SignUp/>
  },
  {
    path: '/jobs',
    element:<Jobs />
  },
  {
    path:"/browse",
    element:<Browse />
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={appRouter}/>
  )
}

export default App
