import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";

export default function PrivateRoute({ component: Component, redirectTo }){

    const isAuthenticated = useSelector(selectIsLoggedIn)
    const isRefreshing = useSelector(selectIsRefreshing)

    return isAuthenticated ? <Component /> : <Navigate to={redirectTo} />
}