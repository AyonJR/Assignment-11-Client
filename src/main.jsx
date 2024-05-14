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
import MyQueries from './MyQueries.jsx';
import UpdateMyQuery from './UpdateMyQuery.jsx';
import MyQueryDetails from './MyQueryDetails.jsx';
import MyRecommendations from './MyRecommendations.jsx';
import RecommendationsForMe from './RecommendationsForMe.jsx';
import ErrorPage from './ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <ErrorPage></ErrorPage>,
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
        loader: () => fetch(`https://assignment-11-pi.vercel.app/queries`)
      },
      {
        path:"/myQueries",
        element:<MyQueries></MyQueries>,
      },
      {
        path:"/updateQuery/:id",
        element:<UpdateMyQuery></UpdateMyQuery>,
        loader: ({params}) => fetch(`https://assignment-11-pi.vercel.app/queryUpdate/${params.id}`)
      },
      {
        path:"/queryDetails/:id",
        element:<MyQueryDetails></MyQueryDetails>,
        loader: ({params}) => fetch(`https://assignment-11-pi.vercel.app/query/${params.id}`)
      },
      {
        path:"/myRecommendations",
        element:<MyRecommendations></MyRecommendations>
      },
      {
        path:"/recommendationsForMe",
        element:<RecommendationsForMe></RecommendationsForMe>
      },
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
