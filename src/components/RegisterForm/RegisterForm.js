import { useDispatch } from "react-redux";
import css from './RegisterForm.module.css'
import { register } from "../../redux/auth/operations";

export default function RegisterForm(){

    const dispatch = useDispatch();

    function handleFormSubmit(ev){
        ev.preventDefault();
        const form = ev.currentTarget;
        dispatch(register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        }))
        form.reset()
    }

    return(
        <form className={css.form} onSubmit={handleFormSubmit}>
            <label className={css.label}>Name
                <input name="name" placeholder="Name" type="text" />
            </label>
            <label className={css.label}>Email
               <input name="email" placeholder="email" type="email" /> 
            </label>
            <label className={css.label}>Password
                <input name="password" placeholder="password" type="password" />
            </label>
            <button type="submit">Зареєструватись</button>
        </form>
    )
}