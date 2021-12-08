import {Navigate} from 'react-router-dom';
import * as authService from '../../services/authService';


const LogoutPage = ({
                        onLogout
                    }) => {
    // shte iztriem ot localStroge
    authService.logout();
    onLogout();


    return <Navigate to="/login" replace={true}/>
}
export default LogoutPage;