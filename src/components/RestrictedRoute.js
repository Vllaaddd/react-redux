import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";

export default function RestrictedRoute({ component: Component, redirectTo }){

    const isAuthenticated = useSelector(selectIsLoggedIn)

    return isAuthenticated ? <Navigate to={redirectTo} /> : <Component />
}