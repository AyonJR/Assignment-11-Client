import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Root from './Root';
import Home from './Home';
import Register from './Register';
import AuthProvider from './AuthProvider';
import Login from './Login.jsx';
import AddQueries from './AddQueries.jsx';
import Queries from './Queries.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path:"/" , 
        element:<Home></Home>
      }, 
      {
        path:"/register",
        element: <Register></Register>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/addQueries",
        element:<AddQueries></AddQueries>
      },
      {
        path:"/Queries",
        element:<Queries></Queries>,
        loader: () => fetch(`http://localhost:5000/queries`)
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <App/>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
)
