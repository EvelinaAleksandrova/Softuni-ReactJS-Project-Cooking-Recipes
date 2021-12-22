import {Navigate, useNavigate} from 'react-router-dom';
import * as authService from '../../services/authService';
import {useContext, useEffect} from "react";
import {AuthContext} from "../../contexts/AuthContext";

const LogoutPage = () => {

    const navigate = useNavigate();
    const {user, logout} = useContext(AuthContext);

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                navigate("/home");
            })
    }, []);

    return null;
}
export default LogoutPage;