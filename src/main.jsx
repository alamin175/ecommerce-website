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
import Signup from './components/SignUp/Signup.jsx';
import AuthContext from './components/Context/AuthContext.jsx';
import PrivateRouter from './Private Router/PrivateRouter.jsx';

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
        element: <PrivateRouter><Inventory></Inventory></PrivateRouter>
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
        element: <PrivateRouter><Checkout></Checkout></PrivateRouter>
      },
      {
        path: 'signup',
        element:<Signup></Signup>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
    <RouterProvider router={router}></RouterProvider>
    </AuthContext>

  </React.StrictMode>,
)
