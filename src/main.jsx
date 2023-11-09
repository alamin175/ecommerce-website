import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Orders from './components/orders/Orders.jsx';
import Home from './components/Layout/Home.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Shop from './components/main container/main-container.jsx';
import Login from './components/Login/Login.jsx';
import loadData from './Loader/loader.js';
import Checkout from './components/Checkout/Checkout.jsx';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        path:'/',
        element: <Shop></Shop>
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'order',
        element: <Orders></Orders>,
        loader: loadData
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'checkout',
        element: <Checkout></Checkout>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>,
)
