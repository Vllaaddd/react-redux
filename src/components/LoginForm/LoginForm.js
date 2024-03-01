import { useDispatch } from "react-redux";
import css from './LoginForm.module.css'
import { login } from "../../redux/auth/operations";

export default function LoginForm(){

    const dispatch = useDispatch();

    function handleFormSubmit(ev){
        ev.preventDefault();
        const form = ev.currentTarget;
        dispatch(login({
            email: form.elements.email.value,
            password: form.elements.password.value,
        }))
        form.reset()
    }

    return(
        <form className={css.form} onSubmit={handleFormSubmit}>
            <label className={css.label}>Email
               <input name="email" placeholder="email" type="email" /> 
            </label>
            <label className={css.label}>Password
                <input name="password" placeholder="password" type="password" />
            </label>
            <button type="submit">Увійти</button>
        </form>
    )
}