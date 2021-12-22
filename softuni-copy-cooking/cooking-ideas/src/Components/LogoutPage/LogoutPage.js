import {Navigate, useNavigate} from 'react-router-dom';
import * as authService from '../../services/authService';
import { useEffect} from "react";
import {useAuthContext} from "../../contexts/AuthContext";

const LogoutPage = () => {

    const navigate = useNavigate();
    const {user, logout} = useAuthContext();

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