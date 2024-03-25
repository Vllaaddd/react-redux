import { createBrowserRouter } from "react-router-dom";
import { Layout } from './components/Layout/Layout'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/tasks',
                element: <PrivateRoute component={Tasks} redirectTo='/login' />
            },
            {
                path: '/login',
                element: <RestrictedRoute component={Login} redirectTo={'/'} />
            },
            {
                path: '/register',
                element: <RestrictedRoute component={Register} redirectTo={'/'} />
            }
        ]
    }
])