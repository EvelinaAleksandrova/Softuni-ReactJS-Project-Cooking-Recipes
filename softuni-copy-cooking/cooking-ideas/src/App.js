import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';

import * as authService from './services/authService';
import Header from "./Components/Header/Header";
import DashboardPage from "./Components/DashboardPage/DashboardPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import MyRecipesPage from "./Components/MyRecipesPage/MyRecipesPage";
import CreateRecipe from "./Components/CreateRecipe/CreateRecipe";
import DetailsRecipe from "./Components/DetailsRecipe/DetailsRecipe";
import LogoutPage from "./Components/LogoutPage/LogoutPage";
import Footer from "./Components/Footer/Footer";

function App() {
    const [userInfo, setUserInfo] = useState({isAuthenticated: false, username: ''});

    useEffect(() => {
        let user = authService.getUser();

        setUserInfo({
            isAuthenticated: Boolean(user),
            user,
        })

    }, []);

    const onLogin = (email) => {
        setUserInfo({
            isAuthenticated: true,
            user: email,
        });
    };

    const onLogout = () => {
        setUserInfo({
            isAuthenticated: false,
            user: null,
        });
    };

    return (
        <div id="container">
            <Header {...userInfo} />

            <main id="site-content">
                <Routes>
                    <Route path="/dashboard/*" element={<DashboardPage/>}/>
                    <Route path="/login" element={<LoginPage onLogin={onLogin}/>}/>
                    <Route path="/logout" element={<LogoutPage onLogout={onLogout}/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/my-recipes" element={<MyRecipesPage/>}/>
                    <Route path="/create" element={<CreateRecipe/>}/>
                    <Route path="/details/:recipeId" element={<DetailsRecipe/>}/>


                </Routes>
            </main>
            <Footer/>

        </div>
    );
}

export default App;