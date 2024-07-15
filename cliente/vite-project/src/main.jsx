import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Sudoku from './components/Sudoku'
import Home from './components/Home.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to ="/home"></Navigate>
    },
    {
      path: "/home",
      element: <Home></Home>
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/signup",
      element: <Signup></Signup>,
    },
    {
      path: "/game",
      element: <Sudoku></Sudoku>
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
