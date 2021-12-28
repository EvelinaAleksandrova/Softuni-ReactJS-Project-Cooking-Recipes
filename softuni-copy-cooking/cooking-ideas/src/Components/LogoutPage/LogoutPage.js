import {Navigate, useNavigate} from 'react-router-dom';
import * as authService from '../../services/authService';
import { useEffect} from "react";
import {useAuthContext} from "../../contexts/AuthContext";
import {types, useNotificationContext} from "../../contexts/NotificationContext";

const LogoutPage = () => {

    const navigate = useNavigate();
    const {user, logout} = useAuthContext();
    const {addNotification} = useNotificationContext();

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                addNotification('Your logout was successful', types.info)
                navigate("/home");
            })
    }, []);

    return null;
}
export default LogoutPage;