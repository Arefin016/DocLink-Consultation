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
            loader: ({params}) => fetch(`http://localhost:5000/serviceProvider/${params.id}`)
        }
      ]
    },
  ]);

  export default router;