import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'









import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main/Main.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import Registration from './Pages/Registration/Registration.jsx';
import AuthProvider from './Pages/AuthProvider/AuthProvider.jsx';
import Checkout from './Pages/Checkout/Checkout.jsx';
import BookingService from './Pages/BookingService/BookingService.jsx';
import Private from './Pages/Private/Private.jsx';
import LogoCarItem from './Pages/LogoCarItem/LogoCarItem.jsx';
import About from './Pages/About/About.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Registration></Registration>
      },
      {
        path:"/check/:id",
        element: <Private><Checkout></Checkout></Private>,
        loader:({params})=>fetch(`https://car-doctor-backend-side.vercel.app/service/${params.id}`)
      },
      {
        path:"/book",
        
        element:<Private>
          <BookingService></BookingService>
          </Private>,
      },
      {
        path:"/car",
        element:<LogoCarItem></LogoCarItem>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <div className='lg:max-w-5xl mx-auto ml-8'>
    <StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
 
  </StrictMode>,
  </div>
)
