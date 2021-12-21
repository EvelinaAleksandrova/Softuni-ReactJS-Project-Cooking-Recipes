import * as authService from '../../services/authService';
import {AuthContext} from "../../contexts/AuthContext";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let {email, password} = Object.fromEntries(new FormData(e.currentTarget));


        authService.register(email, password)
            .then(res => {
                login(res);
                navigate('/my-recipes');
            })
    }

    return (
        <section id="register-page" className="register">
            <form id="register-form" action="" method="POST" onSubmit={registerSubmitHandler}>
                <fieldset>
                    <legend>Register Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" required/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" required/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="repeat-pass">Repeat Password</label>
                        <span className="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password" required/>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Register"/>
                </fieldset>
            </form>
        </section>
    );
}
export default RegisterPage;