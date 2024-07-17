import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/HomePage.jsx'
import CartPage from './pages/CartPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Wishlist from './pages/Wishlist.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
    {
      path: "",
      element: <HomePage/>
    },
    {
      path: "/wishlist",
      element: <Wishlist/>
    },
    {
      path: "cart",
      element: <CartPage/>
    },
    {
      path: "login",
      element: <LoginPage/>
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)
