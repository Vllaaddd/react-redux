import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Header(){
    const dispatch = useDispatch()
    
    const handleButtonClick = () => {
        dispatch(logout())
    }

    const isLoggedIn = useSelector(selectIsLoggedIn)

    return(
        <nav className={css.nav}>
            <div className={css.linksContainer}>
                <NavLink className={css.link} to={'/'}>Home</NavLink>
                <NavLink className={css.link} to={'/tasks'}>Tasks</NavLink>
            </div>
            {!isLoggedIn && (
                <div className={css.linksContainer}>
                    <NavLink className={css.link} to={'/login'}>Login</NavLink>
                    <NavLink className={css.link} to={'/register'}>Register</NavLink>
                </div>
            )}
            {isLoggedIn && (
                <div>
                    <button onClick={handleButtonClick}>Logout</button>
                </div>
            )}
        </nav>
    )
}