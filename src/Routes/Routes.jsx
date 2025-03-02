import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddService from "../pages/AddService/AddService";
import ManageService from "../pages/ManageService/ManageService";
import PrivateRoute from "./PrivateRoute";
import UpdateService from "../pages/ManageService/UpdateService";
import Services from "../pages/Services/Services";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import BookNow from "../pages/BookNow/BookNow";
import BookedServices from "../pages/BookedServices/BookedServices";
import ServiceToDo from "../pages/ServiceToDo/ServiceToDo";
import ServiceToDoUpdate from "../pages/ServiceToDo/ServiceToDoUpdate";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/addService',
            element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/manageService',
            element: <PrivateRoute><ManageService></ManageService></PrivateRoute>
        },
        {
            path: '/updateService/:id',
            element: <UpdateService></UpdateService>,
            loader: ({params}) => fetch(`https://b9-a11-server-sigma.vercel.app/serviceProvider/${params.id}`)
        },
        {
            path: '/services',
            element: <Services></Services>,
            loader: () => fetch('https://b9-a11-server-sigma.vercel.app/addService')
        },
        {
            path: '/service/:id',
            element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://b9-a11-server-sigma.vercel.app/addService/${params.id}`)
            
        },
        {
            path: '/bookNow/:id',
            element: <PrivateRoute><BookNow></BookNow></PrivateRoute>,
            loader: ({params}) => fetch(`https://b9-a11-server-sigma.vercel.app/addService/${params.id}`)


        },
        {
            path: '/bookedServices',
            element: <PrivateRoute><BookedServices></BookedServices></PrivateRoute>
        },
        {
            path: '/serviceToDo',
            element: <PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>,
            loader: () => fetch('https://b9-a11-server-sigma.vercel.app/bookings')
        },
        {
            path: '/serviceToDo/:id',
            element: <PrivateRoute><ServiceToDoUpdate></ServiceToDoUpdate></PrivateRoute>,
            loader: ({params}) => fetch(`https://b9-a11-server-sigma.vercel.app/bookings/${params.id}`)
        }
      ]
    },
  ]);

  export default router;