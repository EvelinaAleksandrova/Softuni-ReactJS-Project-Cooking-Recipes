
import {useAuthContext} from "../../contexts/AuthContext";
import {useNavigate} from 'react-router-dom';
import * as authService from '../../services/authService.js';
import {useNotificationContext, types} from "../../contexts/NotificationContext";

const LoginPage = () => {

    const {login} = useAuthContext();
    const navigate = useNavigate();
    const {addNotification} = useNotificationContext();

    const onLoginHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then(authData => {
                login(authData);
                addNotification('You logged in successfully.', types.info)
                navigate('/my-recipes');
            }).catch(error => {
            console.log(error);
            addNotification("Your email or password is invalid! or If you don't have account you need to register first!", types.warn)
        })

    }

    return (
        <section id="login-page" className="login">
            <form id="login-form" onSubmit={onLoginHandler} method="POST">
                <fieldset>
                    <legend style={{"text-align": "center", "width": "101%", "font-size": "15px", "font-weight":"bold"}}>Login Form</legend>
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
                    <input className="button submit" type="submit" value="Login" style={{"background":"#d36161"}}/>
                </fieldset>
            </form>
        </section>
    );
}

export default LoginPage;