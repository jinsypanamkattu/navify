import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'



import { Home } from './pages/Home';
import { About } from './pages/About';
import UserListing from './pages/UserListing';
import UserDetail from './pages/UserDetail';
import NotFound from './pages/NotFound';


import {createBrowserRouter,RouterProvider} from 'react-router-dom'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {path:"/",element:<Home/>},
      {path:"/about",element:<About/>},
      {path:"/users", element:<UserListing />},
      {path:"/user/:id", element:<UserDetail />},
      {path:"*", element:NotFound }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
