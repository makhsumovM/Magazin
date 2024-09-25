import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ForLogin from './pages/forLogin'
import Layout from './layout/layout'
import Dashbroad from './pages/dashbroad'
import Orders from './pages/orders'
import Products from './pages/products'
import Other from './pages/other'

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
          element:<Dashbroad/>,
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
          path:'*',
          element:<div>404 Not Found</div>
        },
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