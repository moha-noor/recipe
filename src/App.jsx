import React from 'react';
import Layout from './Componants/Layout/Layout';
import Category from './Componants/Category/Category';
import Details from './Componants/Details/Details';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Category />
        },
        {
          path: "Details/:idMeal",
          element: <Details />
        },
        {
          path: '*',
          element: <div><h2>!404 Not Found</h2></div>
        }
      ]
    },
    {
      path: "recipe",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Category />
        },
        {
          path: "Details/:idMeal",
          element: <Details />
        },
        {
          path: '*',
          element: <div><h2>!404 Not Found</h2></div>
        }
      ]
    }
  ]
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
