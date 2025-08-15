import React, { Children } from 'react'
import Layout from './Componants/Layout/Layout';
import Category from './Componants/Category/Category';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Details from './Componants/Details/Details';



const router = createBrowserRouter([
  {
    path: "recipe",element: <Layout/>,
    children:[
      {
        index: true,element: <Category/>
       
      },{
        path:"Details/:idMeal",element: <Details/>
      },{
    path:'*',element: <div><h2>404 Not Found</h2></div>
  }
     

    ]
  },
  {
    path: "",element: <Layout/>,
    children:[
      {
        index: true,element: <Category/>
       
      },{
        path:"Details/:idMeal",element: <Details/>
      },{
    path:'*',element: <div><h2>404 Not Found</h2></div>
  }
     

    ]
  }
  
  
])



export default function App() {







  return (


    <>
    


    <RouterProvider router={router} />



    </>

    
  )
}
