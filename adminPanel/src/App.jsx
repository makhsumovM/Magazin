import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ForLogin from './pages/forLogin'
import Layout from './layout/layout'
import Dashbroad from './pages/dashbroad'
import Orders from './pages/orders'
import Products from './pages/products'
import Other from './pages/other'
import Dashboard from './pages/dashbroad'
import ForAddinProduct from './pages/forAddinProduct'
import ForEdditProductById from './pages/forEditProductByID'


const App = () => {
   const router = createBrowserRouter([
    {
      path: '/',
      element: <ForLogin/>
    },
    {
      path:'/layout',
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<Dashboard/>,
        },
        {
          path:'orders',
          element:<Orders/>
        },
        {
          path:'products',
          element:<Products/>
        },
        {
          path:'other',
          element:<Other/>
        },
        {
          path:'newProduct',
          element:<ForAddinProduct/>
        },
        {
          path:'*',
          element:<div>404 Not Found</div>
        },
        {
          path:':id',
          element:<ForEdditProductById/>
        }
      ]
    }

   ])
  return (
    <>
      <RouterProvider  router={router}/>
    </>
  )
}

export default App