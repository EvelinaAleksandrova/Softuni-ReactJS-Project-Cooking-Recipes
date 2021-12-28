import * as authService from '../../services/authService';
import {useAuthContext} from "../../contexts/AuthContext";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {Alert} from "react-bootstrap";

const RegisterPage = () => {
    const navigate = useNavigate();
    const {login} = useAuthContext();
    const [errorsPassword, setErrorsPassword] = useState({name: false});

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let {email, password} = Object.fromEntries(new FormData(e.currentTarget));


        authService.register(email, password)
            .then(res => {
                login(res);
                navigate('/my-recipes');
            })
    }

    const passwordChangeHandler = (e) => {
        let currentPassword = e.target.value;

        if (currentPassword.length < 6) {
            setErrorsPassword(state => ({...state, name: "Password should be at least 6 characters!"}))
        } else {
            setErrorsPassword(state => ({...state, name: false}));
        }
    }

    return (
        <section id="register-page" className="register">
            <form id="register-form" action="" method="POST" onSubmit={registerSubmitHandler}>
                <fieldset>
                    <legend style={{"text-align": "center", "width": "101%", "font-size": "15px", "font-weight":"bold"}}>Register Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" required/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input" style={{borderColor: errorsPassword.name ? 'blue' : 'inherit'}}>
                            <input type="password" name="password" id="password" placeholder="Password"
                                   required onBlur={passwordChangeHandler}/>
                        </span>
                        <Alert variant="primary" show={errorsPassword.name}>{errorsPassword.name}</Alert>
                    </p>
                    <p className="field">
                        <label htmlFor="repeat-pass">Repeat Password</label>
                        <span className="input" style={{borderColor: errorsPassword.name ? 'blue' : 'inherit'}}>
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password"
                                   required onBlur={passwordChangeHandler}/>
                        </span>
                        <Alert variant="primary" show={errorsPassword.name}>{errorsPassword.name}</Alert>
                    </p>
                    <input className="button submit" type="submit" value="Register" style={{"background":"#d36161"}}/>
                </fieldset>
            </form>
        </section>
    );
}
export default RegisterPage;